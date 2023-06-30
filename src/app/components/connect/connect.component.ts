import { Component } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent {
  
  public mdp: string = "";
  
  public checkMdp()
  {
    if(this.mdp==="quoikoupi"){}
  }
}
