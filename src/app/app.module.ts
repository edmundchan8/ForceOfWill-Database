import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TradingcardsService } from './tradingcards.service';
import { AdvancedSearchComponent } from './components/advanced-search/advanced-search.component';
import { HttpClientModule } from '@angular/common/http';
import { DraftComponent } from './components/draft/draft.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvancedSearchComponent,
    DraftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TradingcardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
