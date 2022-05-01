import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  @Input() public errorMessage: string;

  constructor() {
    this.errorMessage = '';
  }

  ngOnInit(): void {}

  public refresh() {
    location.reload();
  }
}
