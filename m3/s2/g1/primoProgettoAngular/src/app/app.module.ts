import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompunoComponent } from './compuno/compuno.component';
import { CompdueComponent } from './compdue/compdue.component';
import { ComptreComponent } from './comptre/comptre.component';

@NgModule({
  declarations: [
    AppComponent,
    CompunoComponent,
    CompdueComponent,
    ComptreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
