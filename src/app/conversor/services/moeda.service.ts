import { Injectable } from '@angular/core';

import { Moeda } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  private moedas: Moeda[];

  constructor() { }

  private moedasObj = [
    { "sigla": "AUD", "descricao": "Dolar Australiano" },
    { "sigla": "BGN", "descricao": "Lev Bulgaro" },
    { "sigla": "BRL", "descricao": "Real Brasileiro" },
    { "sigla": "CAD", "descricao": "Dolar Canadense" },
    { "sigla": "CHF", "descricao": "Franco Suico" },
    { "sigla": "CNY", "descricao": "Yuan Chines" },
    { "sigla": "CZK", "descricao": "Coroa Republica Tcheca" },
    { "sigla": "DKK", "descricao": "Coroa Dinamarquesa" },
    { "sigla": "EUR", "descricao": "Euro" },
    { "sigla": "GBP", "descricao": "Libra Esterlina" },
    { "sigla": "HKD", "descricao": "Dolar de Hong Kong" },
    { "sigla": "HRK", "descricao": "Coroa Croacia" },
    { "sigla": "HUF", "descricao": "Florim Hungaro" },
    { "sigla": "IDR", "descricao": "Rupia Indonesia" },
    { "sigla": "ILS", "descricao": "Novo Shekel Israelense" },
    { "sigla": "INR", "descricao": "Rupia Indiana" },
    { "sigla": "JPY", "descricao": "Iene Japones" },
    { "sigla": "KRW", "descricao": "Won Sul-Coreano" },
    { "sigla": "MXN", "descricao": "Peso Mexicano" },
    { "sigla": "MYR", "descricao": "Malasia Ringgit" },
    { "sigla": "NOK", "descricao": "Coroa Noruega" },
    { "sigla": "NZD", "descricao": "Dolar da Nova Zelandia" },
    { "sigla": "PHP", "descricao": "Peso Filipino" },
    { "sigla": "PLN", "descricao": "Zloty Polonia" },
    { "sigla": "RON", "descricao": "Leu Romeno" },
    { "sigla": "RUB", "descricao": "Belarus Ruble" },
    { "sigla": "SEK", "descricao": "Coroa Suecia" },
    { "sigla": "SGD", "descricao": "Dolar de Singapura" },
    { "sigla": "THB", "descricao": "Baht Tailandia" },
    { "sigla": "TRY", "descricao": "Lira Turca" },
    { "sigla": "USD", "descricao": "Dolar dos Estados Unidos" },
    { "sigla": "ZAR", "descricao": "Rand Africa do Sul" }
  ];

  listarTodas(): Moeda[]{
    if(this.moedas){
      return this.moedas;
    }

    this.moedas = [];

    for(let moedaObj of this.moedasObj){
      let moeda: Moeda = new Moeda();
      Object.assign(moeda, moedaObj);
      this.moedas.push(moeda);
    }

    return this.moedas;
  }
}
