import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TradingcardsService } from './tradingcards.service';
import { BoosterCardsService } from './booster-cards.service'
import { HttpClientModule } from '@angular/common/http';
import { RandomGeneratorComponent} from './components/Prerelease/random-generator/random-generator.component'
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardApiComponent } from './components/TCGPlayerAPI/card-api/card-api.component';
import { InteractionService } from '../app/interaction.service'

@NgModule({
  declarations: [
    AppComponent,
    RandomGeneratorComponent,
    CardApiComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [TradingcardsService, BoosterCardsService, InteractionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
