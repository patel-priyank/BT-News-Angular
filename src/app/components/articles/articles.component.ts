import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  @Input() public isCardView: boolean;
  @Input() public articles: any;

  public noImagePath = '../../../assets/images/no-image.jpg';
  public articleDelimiter: string = ' [+';

  constructor() {
    this.isCardView = true;
  }

  ngOnInit(): void {}
}
