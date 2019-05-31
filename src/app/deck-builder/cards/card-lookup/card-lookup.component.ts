import { CardService } from '../../Shared/card.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-card-lookup',
  templateUrl: './card-lookup.component.html',
  styleUrls: ['./card-lookup.component.css']
})
export class CardLookupComponent implements OnInit {

  constructor(private service: CardService) { }

  ngOnInit() {
  }

  cardSearch(form: NgForm) {
    if (form.invalid) { return; }

    this.service.getCards(form.value.cardName);
    form.reset();
  }
}
