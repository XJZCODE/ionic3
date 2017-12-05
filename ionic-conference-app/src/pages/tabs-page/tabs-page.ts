import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

// import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';
import { SpeakerListPage } from '../speaker-list/speaker-list';
import { PersonalPage} from '../personal/personal';
import { ShoppingCartPage} from '../shopping-cart/shopping-cart';
import { GoodsPage} from '../goods/goods';
// import {MySlide} from '../my-slide/my-slide';
@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = SchedulePage;
  tab2Root: any = SpeakerListPage;
  tab3Root: any = ShoppingCartPage;
  tab4Root: any = PersonalPage;
  tab5Root: any = GoodsPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
