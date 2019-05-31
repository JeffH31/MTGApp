import { DeckService } from './../../Shared/deck.service';
import { CardService } from '../../Shared/card.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit, OnDestroy {
  cards: any[] = [];
  private cardsSub: Subscription;

  constructor(private cardService: CardService, private deckService: DeckService) { }

  ngOnInit() {
    this.cardsSub = this.cardService.getCardsUpdatedListener()
      .subscribe((cards: any[]) => {
        this.cards = cards;
    });
  }

  ngOnDestroy() {
    this.cardsSub.unsubscribe();
  }

  addCard(card: any) {
    this.deckService.addToDeck(card);
  }

  removeCard(card: any) {
    this.deckService.removeFromDeck(card);
  }
}
