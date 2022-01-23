import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { InformationDialog } from 'src/app/models/information-dialog';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-information-dialog',
  templateUrl: './information-dialog.component.html',
  styleUrls: ['./information-dialog.component.scss']
})
export class InformationDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: InformationDialog,
    private mdDialogRef: MatDialogRef<InformationDialogComponent>
    ) {}

  ngOnInit(): void {
  }

  public cancel() {
    this.close(false);
  }
  public close(value:boolean) {
    this.mdDialogRef.close(value);
  }
  public confirm() {
    this.close(true);
  }
  @HostListener("keydown.esc") 
  public onEsc() {
    this.close(false);
  }
}
