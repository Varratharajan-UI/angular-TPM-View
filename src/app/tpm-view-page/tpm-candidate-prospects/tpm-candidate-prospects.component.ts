import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tpm-candidate-prospects',
  templateUrl: './tpm-candidate-prospects.component.html',
  styleUrls: ['./tpm-candidate-prospects.component.scss'],
})
export class TpmCandidateProspectsComponent implements OnInit {
  constructor() {}

  itemsPerSlide = 4;
  singleSlideOffset = false;
  noWrap = true;
  showIndicator = false;

  slides = [
    {image: 'https://www.bigstockphoto.com/images/homepage/module-1.jpg'},
    {image: 'https://www.bigstockphoto.com/images/homepage/module-2.jpg'},
    {image: 'https://www.bigstockphoto.com/images/homepage/module-3.jpg'},
    {image: 'https://www.bigstockphoto.com/images/homepage/module-4.jpg'},
    {image: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg'},
    {image: 'https://www.bigstockphoto.com/images/homepage/module-3.jpg'},
    {image: 'https://www.bigstockphoto.com/images/homepage/module-1.jpg'},
    {image: 'https://www.bigstockphoto.com/images/homepage/module-5.jpg'}
  ];

  offerResponse = [
    {
      'candidateName': 'Sanket Joshi'
    },
    {
      'candidateName': 'Sanjay Kapoor'
    }, 
    {
      'candidateName': 'Anil Kapoor'
    }
  ]

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.offerResponse, event.previousIndex, event.currentIndex);
  }

  ngOnInit() {}
}
