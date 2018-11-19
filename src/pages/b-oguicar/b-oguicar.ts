import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuReportesPage } from '../menu-reportes/menu-reportes';
import { DejasTuCarroEnCasaPage } from '../dejas-tu-carro-en-casa/dejas-tu-carro-en-casa';
import { ZonaInseguraPage } from '../zona-insegura/zona-insegura';
import { VAEnMalEstadoPage } from '../v-aen-mal-estado/v-aen-mal-estado';
import { AccidentePage } from '../accidente/accidente';
import { MenDePremiosPage } from '../men-de-premios/men-de-premios';
import { PremioViajesGratisPage } from '../premio-viajes-gratis/premio-viajes-gratis';
import { PremioBotiquinGratisPage } from '../premio-botiquin-gratis/premio-botiquin-gratis';
import { PremioLavaTuCarroConDescuentoPage } from '../premio-lava-tu-carro-con-descuento/premio-lava-tu-carro-con-descuento';
import { DONARPage } from '../d-onar/d-onar';
import { NOTICIASPage } from '../n-oticias/n-oticias';

@Component({
  selector: 'page-b-oguicar',
  templateUrl: 'b-oguicar.html'
})
export class BOGUICARPage {

  constructor(public navCtrl: NavController) {
  }
  goToMenuReportes(params){
    if (!params) params = {};
    this.navCtrl.push(MenuReportesPage);
  }goToDejasTuCarroEnCasa(params){
    if (!params) params = {};
    this.navCtrl.push(DejasTuCarroEnCasaPage);
  }goToZonaInsegura(params){
    if (!params) params = {};
    this.navCtrl.push(ZonaInseguraPage);
  }goToVAEnMalEstado(params){
    if (!params) params = {};
    this.navCtrl.push(VAEnMalEstadoPage);
  }goToAccidente(params){
    if (!params) params = {};
    this.navCtrl.push(AccidentePage);
  }goToMenDePremios(params){
    if (!params) params = {};
    this.navCtrl.push(MenDePremiosPage);
  }goToPremioViajesGratis(params){
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
  }goToNOTICIAS(params){
    if (!params) params = {};
    this.navCtrl.push(NOTICIASPage);
  }
}
