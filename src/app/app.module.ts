import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardLookupComponent } from './deck-builder/cards/card-lookup/card-lookup.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CardListComponent } from './deck-builder/cards/card-list/card-list.component';
import { HeaderComponent } from './header/header.component';
import { DeckHeaderComponent } from './deck-builder/deck/deck-header/deck-header.component';
import { DeckListComponent } from './deck-builder/deck/deck-list/deck-list.component';
import { DeckBuilderComponent } from './deck-builder/deck-builder.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { CreateAccountComponent } from './home/create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    CardLookupComponent,
    CardListComponent,
    HeaderComponent,
    DeckHeaderComponent,
    DeckListComponent,
    DeckBuilderComponent,
    HomeComponent,
    LoginComponent,
    CreateAccountComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    // RouterModule.forRoot([
    //   {
    //     path: 'home',
    //     component: HomeComponent
    //   },
    //   {
    //     path: 'deck-builder',
    //     component: DeckBuilderComponent
    //   }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
