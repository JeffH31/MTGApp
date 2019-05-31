import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  card: any;
  private deckUpdated = new Subject<any>();

  constructor() { }

  getDeckUpdatedListener() {
    return this.deckUpdated.asObservable();
  }

  addToDeck(card: any) {
    this.card = card;
    this.deckUpdated.next(this.card);
  }

  removeFromDeck(card: any) {
    console.log(card.name + ' from remove from deck in deck service');
  }
}
