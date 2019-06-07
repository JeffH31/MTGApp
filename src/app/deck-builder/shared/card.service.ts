import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  rootURL = 'https://api.magicthegathering.io/v1/cards?name=';
  cards: any;
  card: any;
  private cardsUpdated = new Subject<any []>();  
  private deckUpdated = new Subject<any>();

  constructor(private http: HttpClient) { }

  getCardsUpdatedListener() {
    return this.cardsUpdated.asObservable();
  }

  getCards(name: string) {
    const newURL = this.rootURL + name;

    this.http.get(newURL)
    .subscribe((res) => {
      this.cards = res;
      this.cardsUpdated.next(this.cards.cards);
      console.log(this.cardsUpdated + ' cardsUpdated');
    });
  }

  getDeckUpdatedListener() {
    return this.deckUpdated.asObservable();
  }

  addToDeck(card: any) {
    this.card = card;
    this.deckUpdated.next(this.card);
  }
}
