import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Deck } from 'backend/models/Deck';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  // private decks: Deck[] = [];
  private decks: any[] = [];
  private decksUpdated = new Subject<Deck []>();

  constructor(private http: HttpClient) { }

  getDecksUpdateListener() {
    return this.decksUpdated.asObservable();
  }

  addDeck(deckName: string, creatorUsername: string, cards: any[]) {
    const deck: Deck = { id: null, deckName, creatorUsername, cards };
    this.http
      .post<{ message: string, userId: string }>('http://localhost:3000/api/users', deck)
      .subscribe(responseData => {
        console.log(responseData.message);
      });
  }

  // getDecks(creatorUsername: String) {
  //   return this.http.get<{ _id: string; deckName: string; creatorName: string; cards: any[] }>(
  //     'http://localhost:3000/api/decks/' + creatorUsername
  //     );
  // }

  getDecks(creatorUsername) {
    this.http
      .get<{ decks: any[] }>(
        'http://localhost:3000/api/decks/' + creatorUsername
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
