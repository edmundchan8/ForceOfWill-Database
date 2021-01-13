import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvancedSearchComponent } from './components/Prerelease/advanced-search/advanced-search.component';
import { CardListComponent } from './components/Prerelease/card-list/card-list.component';
import { CardComponent } from './components/Prerelease/card/card.component';
import { DraftComponent } from './components/Prerelease/draft/draft.component';
import { DrawCardComponent } from './components/Prerelease/draw-card/draw-card.component'


const routes: Routes = [
  { path: 'card', component: CardComponent },
  { path: 'advanced_search', component: AdvancedSearchComponent },
  { path: 'prerelease', component: DraftComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ CardComponent, AdvancedSearchComponent, DraftComponent, CardListComponent, DrawCardComponent ]