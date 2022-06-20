import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: 'home.page.component.html',
  styleUrls: ['home.page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  increaseNumber() {}
}
