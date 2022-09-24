import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tpm-candidate-offer-extended',
  templateUrl: './tpm-candidate-offer-extended.component.html',
  styleUrls: ['./tpm-candidate-offer-extended.component.scss']
})
export class TpmCandidateOfferExtendedComponent implements OnInit {
  public joiningStatusOption = false;
  public bvStatusOption = false;
  public mainStatusOption = false;
  constructor() { }

  ngOnInit() {
  }
  openOption(option) {
    if(option == 'joiningbonus') {
      this.joiningStatusOption = !this.joiningStatusOption;
    } else if(option == 'backgroundcheck') {
      this.bvStatusOption = !this.bvStatusOption;
    } else if(option == 'offeroption') {
      this.mainStatusOption = !this.mainStatusOption;
    }

  }

}