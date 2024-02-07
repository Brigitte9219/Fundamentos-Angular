import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {

  @Input() nombre?:string;
  @Input() apellido:string | undefined;

  @Output() saludo:EventEmitter<string> = new EventEmitter<string>();

  constructor(){}

  hagaClick(){
    this.saludo.emit('Hola!');
  }

}
