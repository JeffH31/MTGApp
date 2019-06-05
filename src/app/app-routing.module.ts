import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './home/create-account/create-account.component';
import { LoginComponent } from './home/login/login.component';
import { DeckBuilderComponent } from './deck-builder/deck-builder.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'deck-builder', component: DeckBuilderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
