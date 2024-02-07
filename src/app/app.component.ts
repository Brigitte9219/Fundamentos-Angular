import { Component } from '@angular/core';
import { LoggerService } from './hello/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fundamentos';
  titleStyles?:{};
  counter = 0;

  constructor(private logger:LoggerService){}

  myName:string ='Brigitte';

  saludar(message: string){
    this.logger.log(message);
    console.log('Sirve');
    this.counter++;
    this.updatetitleStyles();
  }

  updatetitleStyles(){
    this.titleStyles = {
      'margin-top':'40px',
      'color': this.counter < 3 ? 'green' : 'goldenrod'
    }
  }

  updateNameClasses(name:string){
    return  {
      'error': name.length <= 3,
      'warning': name.length > 3 && name.length <= 6,
      'success': name.length > 6,
      'bold': name.length > 8
    }
  }
}
