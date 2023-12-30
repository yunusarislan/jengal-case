import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    CharacterDetailsComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
