var express = require('express');
var router = express.Router();

var MENUS_COLLECTION = "menus";

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
  }

// Save database object from the callback for reuse.
var db;

/* GET users listing. */
router.get('/', function (req, res, next) {
    db.collection(MENUS_COLLECTION).find({}).toArray(function (err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get menus.");
        } else {
            res.status(200).json(docs);
        }
    });
});
router.post('/', function (req, res, next) {
    var newMenu = req.body;
    newMenu.createDate = new Date();

    if (!req.body.name) {
        handleError(res, "Invalid menu input", "Must provide a name.", 400);
    } else {
        db.collection(MENUS_COLLECTION).insertOne(newMenu, function (err, doc) {
            if (err) {
                handleError(res, err.message, "Failed to create new menus.");
            } else {
                res.status(201).json(doc.ops[0]);
            }
        });
    }
});

module.exports = function(db) {
    var module = {};

     module.get = function(req, res){
        this.db = db;
     }

     return router;
};

