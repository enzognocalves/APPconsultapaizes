import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountryService, CountryData } from '../../service/countries.service'; // CAMINHO CORRETO

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CountriesPage {
  nomePais: string = '';
  dadosPais: CountryData | null = null;
  error: string = '';
  isConsultando: boolean = false;

  constructor(private countryService: CountryService) {}

  consultar() {
    if (!this.nomePais?.trim()) {
      this.error = 'Digite o nome de um país.';
      this.dadosPais = null;
      return;
    }

    this.isConsultando = true;
    this.error = '';
    this.dadosPais = null;

    this.countryService.buscarPais(this.nomePais.trim()).subscribe({
      next: (dados) => {
        this.dadosPais = dados;
        this.isConsultando = false;
      },
      error: (err) => {
        console.error('Erro:', err);
        this.error = err.message || 'Erro ao consultar país.';
        this.isConsultando = false;
        this.dadosPais = null;
      }
    });
  }

  limparConsulta() {
    this.nomePais = '';
    this.dadosPais = null;
    this.error = '';
  }
}