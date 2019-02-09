import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Menu } from '../menu';
import { MenusService } from '../menus.service';

declare var $: any;


@Component({
  selector: 'app-menus-list',
  templateUrl: './menus-list.component.html',
  styleUrls: ['./menus-list.component.scss']
})
export class MenusListComponent implements OnInit, AfterViewInit {

  public menus: Menu[];

  constructor(private _menusService: MenusService) { }

  ngOnInit() {
    // this._menusService.getMenus().then((menus: Menu[]) => {
    //   this.menus = menus.map((menus) => {
    //     console.log(menus);
        
    //     return menus;
    //   });
    // });  
    this.menus = [
      {
          _id: "5c5ec8a36bd03e1eac0c094d",
          name: "Nos entrées",
          items: [
              {
                  libelle: "Terrine de campagne préparée par nos soins. Cornichons et salade. Condiments et Aromates",
                  prix: "6,50"
              },
              {
                  libelle: "Croûtes aux champignons sur Toast à l'Ail. Quelques Morilles au vin du Jura",
                  prix: "6.80"
              },
              {
                  libelle: "D\'autres suggestions d'Entrées selon retour du marché",
                  prix: ""
              }
          ],
          createDate: "2019-02-09T12:33:39.275Z"
      },
      {
          _id: "5c5ecf726bd03e1eac0c094e",
          name: "Nos plats",
          items: [
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
                  libelle: "Les suggestions de Poisson du jour retour du marché selon arrivage...",
                  prix: ""
              }
          ],
          createDate: "2019-02-09T13:02:42.042Z"
      },
      {
          _id: "5c5ecf796bd03e1eac0c094f",
          name: "Les gourmandises",
          items: [
              {
                  libelle: "Nougat glacé et coulis de Fruits rouges",
                  prix: ''
              },
              {
                  libelle: "Moelleux au Chocolat glace Vanille",
                  prix: ''
              },
              {
                  libelle: "Crème brulée à la Vanille bourbon",
                  prix: ''
              },
              {
                  libelle: "Vacherin meringué. Chantilly",
                  prix: ''
              },
              {
                  libelle: "Café ou Chocolat Liégois",
                  prix: ''
              },
              {
                  libelle: "Café, Thé ou Chocolat gourmand",
                  prix: "7.50"
              }
          ],
          createDate: "2019-02-09T13:02:49.329Z"
      }
  ]  
  }
  ngAfterViewInit() {
    $(function () {
      $('.parallax').parallax();
    })
  }
}

