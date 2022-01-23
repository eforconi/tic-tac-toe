import { Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  public confirmed(): Observable<any> {
    return this.dialogRef.afterClosed().pipe(take(1), map(res => {
        return res;
      }
    ));
  }

}