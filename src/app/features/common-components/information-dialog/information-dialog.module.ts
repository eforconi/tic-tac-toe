import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { InformationDialogService } from '../../services/information-dialog.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { InformationDialogComponent } from './information-dialog.component';
@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule
    ],
    declarations: [
        InformationDialogComponent
    ],
    exports: [InformationDialogComponent],
    entryComponents: [InformationDialogComponent],
    providers: [InformationDialogService]
  })
  export class ConfirmDialogModule {
  }