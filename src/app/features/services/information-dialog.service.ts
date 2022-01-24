import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InformationDialogComponent } from '../common-components/information-dialog/information-dialog.component';
import { InformationDialog } from 'src/app/models/information-dialog';
@Injectable()
export class InformationDialogService {  

  dialogRef!: MatDialogRef<InformationDialogComponent>;

  constructor(private dialog: MatDialog) { }

  public open(options:InformationDialog) {
    this.dialogRef = this.dialog.open(InformationDialogComponent, {    
        data: {
          title: options.title,
          message: options.message,
          background:options.background,
          confirmText: options.confirmText
        }
   });  
  }  
}