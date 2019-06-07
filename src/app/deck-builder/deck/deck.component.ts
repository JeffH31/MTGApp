import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CardService } from '../Shared/card.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit, OnDestroy {
  cards: any[] = [];
  private cardsSub: Subscription;
  // card: any;
  private deckSub: Subscription;

  constructor(private service: CardService) { }

  ngOnInit() {
    this.deckSub = this.service.getDeckUpdatedListener()
      .subscribe((card: any) => {
        this.cards.push(card);
    });
  }

  saveDeck(form: NgForm) {
  }

  deleteDeck(form: NgForm) {
  }

  ngOnDestroy() {
    this.deckSub.unsubscribe();
  }
  
  increaseCard(card: any) {
  }
}
