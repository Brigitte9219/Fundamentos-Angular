import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {

  name:string;

  constructor(){
    this.name ='Maritza';
    console.log(this.name);
  }

}
