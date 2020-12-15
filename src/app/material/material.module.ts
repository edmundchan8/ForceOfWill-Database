import { NgModule } from '@angular/core';
import { MatIconModule} from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatBadgeModule } from '@angular/material/badge'
import { MatProgressSpinnerModule}  from '@angular/material/progress-spinner'
import { MatProgressBarModule}  from '@angular/material/progress-bar'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatMenuModule } from '@angular/material/menu'
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

const material = [
  MatButtonModule, 
  MatButtonToggleModule, 
  MatIconModule, 
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatCardModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
