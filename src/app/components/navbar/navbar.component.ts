import {
  Component,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public placeholderSearch: string = 'Search';
  public placeholderHeadlines: string = 'Headlines';
  public placeholderTheme: string = 'Switch theme';

  public isDarkMode: boolean;

  @ViewChild('searchBox') searchBox: any;

  @Output() newsContent: EventEmitter<string> = new EventEmitter();

  constructor(public appService: AppService) {
    this.isDarkMode = false;
    this.setInitialTheme();
  }

  ngOnInit(): void {}

  private setTheme(theme: string) {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    this.isDarkMode = theme === this.appService.DARK_THEME;
  }

  private setInitialTheme() {
    let currentTheme = localStorage.getItem('theme');

    if (currentTheme === null) {
      currentTheme = this.appService.LIGHT_THEME;
    }

    if (currentTheme === this.appService.DARK_THEME) {
      this.isDarkMode = true;
    }

    this.setTheme(currentTheme);
  }

  public searchKeyword() {
    if (this.appService.searchValue === '') {
      this.searchBox.nativeElement.classList.add('invalid');
    } else {
      this.newsContent.emit(this.appService.searchText);
    }
  }

  public onAnimationEnd() {
    this.searchBox.nativeElement.classList.remove('invalid');
  }

  public getHeadlines() {
    this.newsContent.emit(this.appService.headlinesText);
  }

  public switchTheme() {
    this.isDarkMode = !this.isDarkMode;
    let theme = this.isDarkMode
      ? this.appService.DARK_THEME
      : this.appService.LIGHT_THEME;

    this.setTheme(theme);
  }
}
