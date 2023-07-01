import { Component } from '@angular/core';
import { Personnage } from 'src/app/model';

@Component({
  selector: 'app-select-champ',
  templateUrl: './select-champ.component.html',
  styleUrls: ['./select-champ.component.scss']
})
export class SelectChampComponent {
  public personnages: Personnage[] = [
    {
      nom: "mage_feu",
      image: "mage_feu",
      color: "red",
      stats: [
        {
          "nom": "Endurance",
          "qte": 2
        },
        {
          "nom": "Force",
          "qte": 1
        },
        {
          "nom": "agilité",
          "qte": 2
        },
        {
          "nom": "Intelligence",
          "qte": 5
        },
        {
          "nom": "Charisme",
          "qte": 3
        }
      ]
    },
    {
      nom: "mage_glace",
      image: "mage_glace",
      color: "blue",
      stats: [
        {
          "nom": "Endurance",
          "qte": 3
        },
        {
          "nom": "Force",
          "qte": 2
        },
        {
          "nom": "agilité",
          "qte": 2
        },
        {
          "nom": "Intelligence",
          "qte": 3
        },
        {
          "nom": "Charisme",
          "qte": 3
        }
      ]
    }
  ];
  public personnageLock: Personnage[];

  selectPerso(perso: Personnage){
    this.personnageLock.push(perso);
  }
}
