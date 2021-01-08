import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvancedSearchComponent } from './components/Prerelease/advanced-search/advanced-search.component';
import { CardComponent } from './components/Prerelease/card/card.component';
<<<<<<< HEAD
import { DraftComponent } from './components/Prerelease/draft/draft.component';
=======
>>>>>>> 8f0974accea2dfb35b90f30fa2c63522e3916c06


const routes: Routes = [
  { path: 'card', component: CardComponent },
<<<<<<< HEAD
  { path: 'advanced_search', component: AdvancedSearchComponent },
  { path: 'prerelease', component: DraftComponent },
=======
  { path: 'advanced_search', component: AdvancedSearchComponent }
>>>>>>> 8f0974accea2dfb35b90f30fa2c63522e3916c06
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ CardComponent, AdvancedSearchComponent ]