import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { JoinComponent } from './join/join.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    IndexComponent,
    CreateComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
