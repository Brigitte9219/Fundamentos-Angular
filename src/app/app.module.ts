import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello/hello.component';
import { FormsModule } from '@angular/forms';
import { UpperCapitalPipe } from './hello/upper-capital.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UpperCapitalPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
