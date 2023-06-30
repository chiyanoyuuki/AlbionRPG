import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent {
  
  @Output() validMdp = new EventEmitter<string>();

  public mdp: string = "";
  
  public checkMdp()
  {
    if(this.mdp==="quoikoupi"){this.validMdp.emit("home");}
    if(this.mdp==="adminpi"){this.validMdp.emit("admin");}
  }
}
