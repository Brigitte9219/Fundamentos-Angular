import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {

  @Input() nombre?:string;
  @Input() apellido:string | undefined;

  constructor(){

  }

}
