import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() black: boolean;
  @Input() flipped: boolean;
  constructor() {}

  public brandText = 'Cards Against Quarantine';

  ngOnInit(): void {}
}
