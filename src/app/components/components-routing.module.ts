import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CharacterListComponent } from './character-list/character-list.component';

const routes: Routes = [
  {path:'', redirectTo:'home-page',pathMatch:'full'},
  {path:'home-page', component: HomePageComponent},
  {path:'character-list', component: CharacterListComponent},
  {path:'character-details/:id', component: CharacterDetailsComponent},
  {path:'header', component: HeaderComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
