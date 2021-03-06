import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatSnackBar,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

import {NgModule} from '@angular/core';

const kubMaterialModules = [MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule, MatIconModule,
  MatSnackBarModule, MatChipsModule, MatSidenavModule, MatListModule, MatDialogModule];

@NgModule({
  imports: kubMaterialModules,
  exports: kubMaterialModules,
  providers: [MatSnackBar]
})
export class KubMaterialModule {
}
