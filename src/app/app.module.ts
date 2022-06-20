import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { TriviaStateModule } from './state-management/trivia/trivia.state.module';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('./presentation/pages/home/home.page.module').then(
            (m) => m.HomePageModule
          ),
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '',
      },
    ]),
    NgxsModule.forRoot(),
    TriviaStateModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
