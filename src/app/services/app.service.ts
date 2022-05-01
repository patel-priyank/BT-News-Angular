import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiKey: string = 'd8f40c9b90314b0f9d8bb4dfdeed5b7c';
  private pageSize: number = 100;

  public headlinesUrl: string = `https://newsapi.org/v2/top-headlines?apiKey=${this.apiKey}&pageSize=${this.pageSize}&language=en`;
  public searchUrl: string = `https://newsapi.org/v2/everything?apiKey=${this.apiKey}&pageSize=${this.pageSize}&language=en`;

  public headlinesText: string = 'Headlines';
  public searchText: string = 'Search Results';

  public noHeadlinesText: string =
    'No new top stories. Please try again later.';
  public noResultsText: string =
    'No results found. Try changing the search query or loosening the filters.';

  public LIGHT_THEME: string = 'light';
  public DARK_THEME: string = 'dark';

  public searchValue: string = '';

  constructor() {}
}
