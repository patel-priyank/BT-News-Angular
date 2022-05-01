import { Component, ViewChild } from '@angular/core';
import { NewsContentComponent } from './components/news-content/news-content.component';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(NewsContentComponent) newsContentComponent!: NewsContentComponent;

  constructor(private appService: AppService) {}

  public newsContent(event: string) {
    switch (event) {
      case this.appService.headlinesText:
        this.newsContentComponent.getHeadlines();
        break;

      case this.appService.searchText:
        this.newsContentComponent.getSearchResults(this.appService.searchValue);
        break;
    }
  }
}
