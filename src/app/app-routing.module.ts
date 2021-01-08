import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvancedSearchComponent } from './components/Prerelease/advanced-search/advanced-search.component';
import { CardComponent } from './components/Prerelease/card/card.component';
import { DraftComponent } from './components/Prerelease/draft/draft.component';


const routes: Routes = [
  { path: 'card', component: CardComponent },
  { path: 'advanced_search', component: AdvancedSearchComponent },
  { path: 'prerelease', component: DraftComponent },
  { path: 'advanced_search', component: AdvancedSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ CardComponent, AdvancedSearchComponent ]