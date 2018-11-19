import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DejasTuCarroEnCasaPage } from '../dejas-tu-carro-en-casa/dejas-tu-carro-en-casa';
import { ZonaInseguraPage } from '../zona-insegura/zona-insegura';
import { VAEnMalEstadoPage } from '../v-aen-mal-estado/v-aen-mal-estado';
import { AccidentePage } from '../accidente/accidente';

@Component({
  selector: 'page-menu-reportes',
  templateUrl: 'menu-reportes.html'
})
export class MenuReportesPage {

  constructor(public navCtrl: NavController) {
  }
  goToDejasTuCarroEnCasa(params){
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
  }
}
