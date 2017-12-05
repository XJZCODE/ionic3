import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';
import { MySlide } from '../pages/my-slide/my-slide';
import { GoodsPage } from '../pages/goods/goods';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SchedulePage } from '../pages/schedule/schedule';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { PersonalPage} from '../pages/personal/personal';
import { ShoppingCartPage} from '../pages/shopping-cart/shopping-cart';
import { OrderListPage } from '../pages/order-list/order-list';
import { ImagePicker} from '@ionic-native/image-picker';
import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { Camera } from '@ionic-native/camera';
import { BatteryStatus } from '@ionic-native/battery-status';
import { TouchID } from '@ionic-native/touch-id';
import { HttpClientProvider } from '../providers/http-client/http-client';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { ProductInfoPage } from '../pages/product-info/product-info';
import { OrderPage } from '../pages/order/order';
import { AuthHttp } from 'angular2-jwt';
import { PayPage } from '../pages/pay/pay';
import { IfPaysuccessPage } from '../pages/if-paysuccess/if-paysuccess';
import { SettingPage } from '../pages/setting/setting';
@NgModule({
  declarations: [
    ConferenceApp,
    AccountPage,
    LoginPage,
    MySlide,
    GoodsPage,
    SchedulePage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    PersonalPage,
    ShoppingCartPage,
    ProductInfoPage,
    OrderPage,
    OrderListPage,
    PayPage,
    IfPaysuccessPage,
    SettingPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: SchedulePage, name: 'Schedule', segment: 'schedule' },
        { component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
        { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
        { component: MySlide, name: 'MySlide', segment:'MySlide'},
        { component: GoodsPage, name: 'Goods', segment:'Goods'},
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' },
        { component: ProductInfoPage, name: 'ProductInfoPage', segment: 'productInfo' },
        { component: OrderPage, name: 'OrderPage', segment: 'order' },
        { component: OrderListPage, name: 'OrderListPage', segment: 'orderList' },
        { component: PayPage, name: 'PayPage', segment: 'pay' },
        { component: IfPaysuccessPage, name: 'IfPaysuccessPage', segment: 'IfPaysuccess' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AccountPage,
    LoginPage,
    MySlide,
    GoodsPage,
    SchedulePage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    PersonalPage,
    ShoppingCartPage,
    ProductInfoPage,
    OrderPage,
    OrderListPage,
    PayPage,
    IfPaysuccessPage,
    SettingPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen,
    Camera,
    ImagePicker,
    BatteryStatus,
    TouchID,
    HttpClientProvider,
    AuthHttp,
    AuthServiceProvider

  ]
})
export class AppModule { }
