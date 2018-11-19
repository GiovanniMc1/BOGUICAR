import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PremioViajesGratisPage } from '../premio-viajes-gratis/premio-viajes-gratis';
import { PremioBotiquinGratisPage } from '../premio-botiquin-gratis/premio-botiquin-gratis';
import { PremioLavaTuCarroConDescuentoPage } from '../premio-lava-tu-carro-con-descuento/premio-lava-tu-carro-con-descuento';
import { DONARPage } from '../d-onar/d-onar';

@Component({
  selector: 'page-men-de-premios',
  templateUrl: 'men-de-premios.html'
})
export class MenDePremiosPage {

  constructor(public navCtrl: NavController) {
  }
  goToPremioViajesGratis(params){
    if (!params) params = {};
    this.navCtrl.push(PremioViajesGratisPage);
  }goToPremioBotiquinGratis(params){
    if (!params) params = {};
    this.navCtrl.push(PremioBotiquinGratisPage);
  }goToPremioLavaTuCarroConDescuento(params){
    if (!params) params = {};
    this.navCtrl.push(PremioLavaTuCarroConDescuentoPage);
  }goToDONAR(params){
    if (!params) params = {};
    this.navCtrl.push(DONARPage);
  }
}
