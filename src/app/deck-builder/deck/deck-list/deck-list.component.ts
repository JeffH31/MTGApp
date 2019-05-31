import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DeckService } from '../../Shared/deck.service';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.css']
})
export class DeckListComponent implements OnInit, OnDestroy {
  card: any;
  cards: any[] = [];
  private deckSub: Subscription;

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.deckSub = this.deckService.getDeckUpdatedListener()
      .subscribe((card: any) => {
        this.cards.push(card);
    });
  }

  ngOnDestroy() {
    this.deckSub.unsubscribe();
  }

  increaseCard(card: any) {
  }

  decreaseCard(card: any) {
  }
}
