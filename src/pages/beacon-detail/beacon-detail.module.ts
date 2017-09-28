import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeaconDetailPage } from './beacon-detail';

@NgModule({
  declarations: [
    BeaconDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BeaconDetailPage),
  ],
})
export class BeaconDetailPageModule {}
