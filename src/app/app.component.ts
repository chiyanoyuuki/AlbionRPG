import { Component } from '@angular/core';
import { RequetesService } from './services/requetes.service';
import { Joueur } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  constructor(private requetes:  RequetesService) { }

  public page : string = "connect";

  ngOnInit()
  {
      
  }

  changePage(page:string)
  {
    this.page = page;
  }
}
