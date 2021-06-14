import {Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'pm-star-rating',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating = 0;
  cropWidth = 75;

  ngOnChanges(): void {
    this.cropWidth = this.rating * 65 / 5;
  }

  onClick(): void {
    console.log(`${this.rating} was clicked`);
  }
}
