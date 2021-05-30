import { matDialogAnimations } from '@angular/material/dialog';
import {Component, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Inject } from '@angular/core';  

@Component({
  selector: 'app-warning-dialog',
  templateUrl: './warning-dialog.component.html',
  styleUrls: ['./warning-dialog.component.scss']
})
export class WarningDialogComponent implements OnInit {

  warning_text: string;
  
  constructor(
    private dialogRef: MatDialogRef<WarningDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.warning_text = data.warning_text;
}

  ngOnInit(): void {
    
  }

  abort(): void {
    this.dialogRef.close("");
  }

  ok(): void {
    this.dialogRef.close("ok");
  }

}
