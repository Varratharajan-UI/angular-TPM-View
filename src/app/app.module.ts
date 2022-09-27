import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TpmViewPageComponent } from './tpm-view-page/tpm-view-page.component';
import { TpmCandidateOfferExtendedComponent } from './tpm-view-page/tpm-candidate-offer-extended/tpm-candidate-offer-extended.component';
import { TpmCandidateDroppedComponent } from './tpm-view-page/tpm-candidate-dropped/tpm-candidate-dropped.component';
import { TpmCandidateProspectsComponent } from './tpm-view-page/tpm-candidate-prospects/tpm-candidate-prospects.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent,
    TpmViewPageComponent,
    TpmCandidateOfferExtendedComponent,
    TpmCandidateDroppedComponent,
    TpmCandidateProspectsComponent

   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
