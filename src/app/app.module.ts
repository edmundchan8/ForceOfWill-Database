import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TradingcardsService } from './tradingcards.service';
import { BoosterCardsService } from './booster-cards.service'
import { AdvancedSearchComponent } from './components/advanced-search/advanced-search.component';
import { HttpClientModule } from '@angular/common/http';
import { DraftComponent } from './components/draft/draft.component';
import { RandomGeneratorComponent} from './components/random-generator/random-generator.component'
import { DrawCardComponent } from './components/draw-card/draw-card.component';
@NgModule({
  declarations: [
    AppComponent,
    AdvancedSearchComponent,
    DraftComponent,
    RandomGeneratorComponent,
    DrawCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TradingcardsService, BoosterCardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
