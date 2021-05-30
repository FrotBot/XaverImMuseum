import {Component, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Chase, ChaseList, ChaseMetaData} from 'src/app/shared/models/chase';
import {ChaseService} from 'src/app/shared/services/chase.service';
import {deserialize, serialize} from 'typescript-json-serializer';

@Component({
  selector: 'app-select-chase-push-dialog',
  templateUrl: './select-chase-push-dialog.component.html',
  styleUrls: ['./select-chase-push-dialog.component.scss']
})
export class SelectChasePushDialogComponent implements OnInit {
  constructor(
      private chaseService: ChaseService,
      private dialogRef: MatDialogRef<SelectChasePushDialogComponent>) {}

  chaseList = new ChaseList();

  ngOnInit(): void{this.chaseService.getAllChases().subscribe(chases => {
    this.chaseList = deserialize<ChaseList>(chases, ChaseList);

    //add extra entry to be displayed in push list:
    let extra_entry = new ChaseMetaData();
    extra_entry.title = "Neuen Eintrag anlegen"
    extra_entry.chaseId = "new"
    this.chaseList.chases.push(extra_entry);


    console.log(this.chaseList);
  })}

  closeDialog(): void {
    console.log('Zurück');
    this.dialogRef.close("");
  }

  chaseSelectorClicked(text: string) {
    console.log("selected: " + text);

    this.dialogRef.close(text); 
  }
}
