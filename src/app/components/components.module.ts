import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    CharacterDetailsComponent,
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ComponentsModule { }
