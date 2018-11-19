import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CameraTabDefaultPagePage } from '../pages/camera-tab-default-page/camera-tab-default-page';
import { CartTabDefaultPagePage } from '../pages/cart-tab-default-page/cart-tab-default-page';
import { CloudTabDefaultPagePage } from '../pages/cloud-tab-default-page/cloud-tab-default-page';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { BOGUICARPage } from '../pages/b-oguicar/b-oguicar';
import { MenuReportesPage } from '../pages/menu-reportes/menu-reportes';
import { MenDePremiosPage } from '../pages/men-de-premios/men-de-premios';
import { DejasTuCarroEnCasaPage } from '../pages/dejas-tu-carro-en-casa/dejas-tu-carro-en-casa';
import { ZonaInseguraPage } from '../pages/zona-insegura/zona-insegura';
import { VAEnMalEstadoPage } from '../pages/v-aen-mal-estado/v-aen-mal-estado';
import { AccidentePage } from '../pages/accidente/accidente';
import { PremioViajesGratisPage } from '../pages/premio-viajes-gratis/premio-viajes-gratis';
import { PremioLavaTuCarroConDescuentoPage } from '../pages/premio-lava-tu-carro-con-descuento/premio-lava-tu-carro-con-descuento';
import { PremioBotiquinGratisPage } from '../pages/premio-botiquin-gratis/premio-botiquin-gratis';
import { DONARPage } from '../pages/d-onar/d-onar';
import { NOTICIASPage } from '../pages/n-oticias/n-oticias';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CameraTabDefaultPagePage,
    CartTabDefaultPagePage,
    CloudTabDefaultPagePage,
    TabsControllerPage,
    BOGUICARPage,
    MenuReportesPage,
    MenDePremiosPage,
    DejasTuCarroEnCasaPage,
    ZonaInseguraPage,
    VAEnMalEstadoPage,
    AccidentePage,
    PremioViajesGratisPage,
    PremioLavaTuCarroConDescuentoPage,
    PremioBotiquinGratisPage,
    DONARPage,
    NOTICIASPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CameraTabDefaultPagePage,
    CartTabDefaultPagePage,
    CloudTabDefaultPagePage,
    TabsControllerPage,
    BOGUICARPage,
    MenuReportesPage,
    MenDePremiosPage,
    DejasTuCarroEnCasaPage,
    ZonaInseguraPage,
    VAEnMalEstadoPage,
    AccidentePage,
    PremioViajesGratisPage,
    PremioLavaTuCarroConDescuentoPage,
    PremioBotiquinGratisPage,
    DONARPage,
    NOTICIASPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}