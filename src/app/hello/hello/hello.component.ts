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

  listaNombres: Array<string> = [];
  ingreseNombre: string='';

  constructor(){}

  hagaClick(){
    this.saludo.emit('Hola!');
  }

  addName(){
    this.listaNombres.push(this.ingreseNombre);
    this.ingreseNombre = '';
    console.log(this.listaNombres);
  }



}
