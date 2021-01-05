import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TradingcardsService } from './tradingcards.service';
import { BoosterCardsService } from './booster-cards.service'
import { AdvancedSearchComponent } from './components/Prerelease/advanced-search/advanced-search.component';
import { HttpClientModule } from '@angular/common/http';
import { DraftComponent } from './components/Prerelease/draft/draft.component';
import { RandomGeneratorComponent} from './components/Prerelease/random-generator/random-generator.component'
import { DrawCardComponent } from './components/Prerelease/draw-card/draw-card.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardListComponent } from './components/Prerelease/card-list/card-list.component';
import { CardApiComponent } from './components/TCGPlayerAPI/card-api/card-api.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvancedSearchComponent,
    DraftComponent,
    RandomGeneratorComponent,
    DrawCardComponent,
    CardListComponent,
    CardApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [TradingcardsService, BoosterCardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
