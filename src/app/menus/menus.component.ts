import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit, AfterViewInit {

  constructor() { }

  menus = [
    {
      name: "Nos entrées",
      "items": [
        {
          libelle: "Terrine de campagne préparée par nos soins. Cornichons et salade. Condiments et Aromates", 
          prix: "6,50"
        },
        {
          libelle: "Croûtes aux champignons sur Toast à l'Ail. Quelques Morilles au vin du Jura", 
          prix: "6.80"
        },
        {
          libelle: "D'autres suggestions d'Entrées selon retour du marché"
        }
      ]
    },
    {
      name: "Nos plats",
      "items": [
        {
          libelle: "Suprême de Poulet Fermier en Marinade. Roti au four et jus de cuisson goûteux", 
          prix: "18.50"
        },
        {
          libelle: "Coeur de Rumsteak poêlé. Petites Pommes Grenaille rôties", 
          prix: "20.50"
        },
        {
          libelle: "Fricassée de Rognons de Veau aux Champignons des sous-bois. Crême légère", 
          prix: "18"
        },
        {
          libelle: "Les suggestions de Poisson du jour retour du marché selon arrivage..."
        }
      ]
    },
    {
      name: "Les gourmandises",
      "items": [
        {
          libelle: "Nougat glacé et coulis de Fruits rouges"
        },
        {
          libelle: "Moelleux au Chocolat glace Vanille"
        },
        {
          libelle: "Crème brulée à la Vanille bourbon"
        },
        {
          libelle: "Vacherin meringué. Chantilly"
        },
        {
          libelle: "Café ou Chocolat Liégois"
        },
        {
          libelle: "Café, Thé ou Chocolat gourmand",
          prix: "7.50"
        }
      ]
    }
  ]

  ngOnInit() {
  }
  ngAfterViewInit() {
    $(function () {
      $('.parallax').parallax();
    })
  }
}
