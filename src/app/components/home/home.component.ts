import { Component } from '@angular/core';
import { Joueur } from 'src/app/model';
import { RequetesService } from 'src/app/services/requetes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent 
{
  public joueurSelected?:Joueur;

  constructor(private requetes:  RequetesService) { }

  public joueurs :Joueur[] = [];

  ngOnInit()
  {
      this.requetes.getJoueurs().subscribe(data=>{
        this.joueurs = data;
      });
  }
}
