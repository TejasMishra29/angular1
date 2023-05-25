import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form of PES MCOE';

  dname='';
  dadd='';

  getValue(name:string,add:string)
  {
    this.dname=name;
    this.dadd=add;
  }
}
