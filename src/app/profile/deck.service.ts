import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Deck } from 'backend/models/Deck';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  private decks: Deck[] = [];
  private decksUpdated = new Subject<Deck []>();

  constructor(private http: HttpClient) { }

  getDecksUpdateListener() {
    return this.decksUpdated.asObservable();
  }

  getDecks(username: String) {
    this.http
      .get<{message: string, decks: any}>(
        'http://localhost:3000/api/decks'
      )
      .pipe(map((deckData) => {
        return deckData.decks.map(deck => {
          return {
            deckName: deck.deckName,
            creatorUsername: deck.creatorUsername,
            cards: deck.cards,
            id: deck._id
          };
        });
      }))
      .subscribe((transformedDecks) => {
        this.decks = transformedDecks;
        this.decksUpdated.next([...this.decks]);
      });
  }
}
