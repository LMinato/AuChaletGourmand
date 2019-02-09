import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { MenusListComponent } from './menus/menus-list/menus-list.component';
import { MenusViewComponent } from './menus/menus-view/menus-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactDetailsComponent,
    ContactListComponent,
    MenusListComponent,
    MenusViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
