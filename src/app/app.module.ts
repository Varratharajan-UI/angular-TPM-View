import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {MaterialExampleModule} from '../material.module';
import { MatNativeDateModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { TpmViewPageComponent } from './tpm-view-page/tpm-view-page.component';
import { TpmCandidateOfferExtendedComponent } from './tpm-view-page/tpm-candidate-offer-extended/tpm-candidate-offer-extended.component';
import { TpmCandidateDroppedComponent } from './tpm-view-page/tpm-candidate-dropped/tpm-candidate-dropped.component';
import { TpmCandidateProspectsComponent } from './tpm-view-page/tpm-candidate-prospects/tpm-candidate-prospects.component';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    MaterialExampleModule,
    MatNativeDateModule,
    CarouselModule.forRoot()],
  declarations: [
    AppComponent,    
    TpmViewPageComponent,
    TpmCandidateOfferExtendedComponent,
    TpmCandidateDroppedComponent,
    TpmCandidateProspectsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
