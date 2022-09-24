import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tpm-candidate-prospects',
  templateUrl: './tpm-candidate-prospects.component.html',
  styleUrls: ['./tpm-candidate-prospects.component.scss']
})
export class TpmCandidateProspectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray("", event.previousIndex, event.currentIndex);
  }

}