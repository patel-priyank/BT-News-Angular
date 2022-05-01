import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.scss'],
})
export class NewsContentComponent implements OnInit {
  public cardViewText: string = 'Card View';
  public listViewText: string = 'List View';

  public title: string = this.appService.headlinesText;

  public isLoading: boolean;
  public isError: boolean;
  public errorMessage: string;

  public isCardView: boolean;

  public articles: any;

  constructor(public appService: AppService) {
    this.isCardView =
      !localStorage.getItem('view') || localStorage.getItem('view') === 'card';

    this.isLoading = false;
    this.isError = false;
    this.errorMessage = '';
  }

  ngOnInit(): void {
    this.getHeadlines();
  }

  public selectCardView(isCardView: boolean) {
    this.isCardView = isCardView;

    localStorage.setItem('view', isCardView ? 'card' : 'list');
  }

  public async getHeadlines() {
    this.isLoading = true;
    this.isError = false;

    this.title = this.appService.headlinesText;
    this.appService.searchValue = '';

    let response = await fetch(this.appService.headlinesUrl);
    let data = await response.json();

    this.isLoading = false;

    switch (data.status) {
      case 'ok':
        if (data.totalResults > 0) {
          this.articles = data.articles;
        } else {
          this.errorMessage = this.appService.noHeadlinesText;
          this.isError = true;
        }
        break;

      case 'error':
        this.errorMessage = data.message;
        this.isError = true;
        break;
    }
  }

  public async getSearchResults(keyword: string) {
    this.isLoading = true;
    this.isError = false;

    this.title = this.appService.searchText;

    let response = await fetch(`${this.appService.searchUrl}&q=${keyword}`);
    let data = await response.json();

    this.isLoading = false;

    switch (data.status) {
      case 'ok':
        if (data.totalResults > 0) {
          this.articles = data.articles;
        } else {
          this.errorMessage = this.appService.noResultsText;
          this.isError = true;
        }
        break;

      case 'error':
        this.errorMessage = data.message;
        this.isError = true;
        break;
    }
  }
}
