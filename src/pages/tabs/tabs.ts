import { Component } from '@angular/core';
import { HomePage, GuardadosPage } from '../index.paginas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

   home: any;
   guardados: any;
   
   
  constructor() {
     this.home = HomePage;
     this.guardados = GuardadosPage;
  }
}