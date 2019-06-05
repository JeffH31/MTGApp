import { Component, OnInit } from '@angular/core';
import { Deck } from 'backend/models/Deck';
import { DeckService } from './deck.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: String;
  decks: Deck[] = [];
  private decksSub: Subscription;

  constructor(private service: DeckService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('username')) {
        this.username = paramMap.get('username');
        this.service.getDecks(this.username);
        this.decksSub = this.service.getDecksUpdateListener()
        .subscribe((decks: Deck[]) => {
          this.decks = decks;
        }); 
      } else {
        console.log('error ocurred.');
      }
    });  
  }
}
