import { NgForm } from '@angular/forms';
import { CardService } from '../../Shared/card.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-deck-header',
  templateUrl: './deck-header.component.html',
  styleUrls: ['./deck-header.component.css']
})
export class DeckHeaderComponent implements OnInit {
  cards: any[] = [];
  private cardsSub: Subscription;

  constructor(private service: CardService) { }

  ngOnInit() {

  }

  saveDeck(form: NgForm) {

  }

  deleteDeck(form: NgForm) {

  }
}
