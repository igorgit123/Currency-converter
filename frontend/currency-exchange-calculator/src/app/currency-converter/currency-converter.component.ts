import { Component, OnInit } from '@angular/core';
import { CurrencyDataServiceService } from './currency-data-service.service';
import { CommonModule } from '@angular/common';
import { CurrencyRate } from './currency-data.interface';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [CommonModule],
  providers: [CurrencyDataServiceService],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.css',
})
export class CurrencyConverterComponent implements OnInit {
  currencyRates: CurrencyRate[] = [];
  selectedBaseCurrency: CurrencyRate | null = null;
  selectedBaseRates: { [key: string]: number } | null = null;
  selectedBaseRateKeys: string[] = [];
  selectedRateKey: string | null = null;
  selectedRate: number = 1;
  amountValue: number = 1;
  isElementVisible: boolean = false;

  constructor(private dataService: CurrencyDataServiceService) {}

  ngOnInit(): void {
    this.loadCurrencies();
  }

  onSelectBaseCurrency(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedIndex = target.selectedIndex;
    this.selectedBaseCurrency = this.currencyRates[selectedIndex];
    this.selectedBaseRateKeys = Object.keys(this.selectedBaseCurrency.rates);
    this.selectedBaseRates = this.selectedBaseCurrency.rates;
    this.selectedRate =
      this.selectedBaseCurrency.rates[this.selectedBaseRateKeys[0]];
    this.calculateExchange();
    this.toggleVisibility();
  }

  getValue(key: string): number {
    if (this.selectedBaseRates === null) {
      return 1;
    }
    return this.selectedBaseRates[key];
  }

  onSelectCurrencyRate(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedRate = +target.value;
  }

  onNumberChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.amountValue = +input.value;
    this.calculateExchange();
  }
  toggleVisibility() {
    this.isElementVisible = true;
  }

  calculateExchange(): number {
    return this.amountValue * this.selectedRate;
  }
  loadCurrencies() {
    this.dataService.getCurrencyRates().subscribe(
      (data: CurrencyRate[]) => {
        this.currencyRates = data;
      },
      (error) => {
        console.error('Error fetching currency rates:', error);
      }
    );
    this.selectedBaseCurrency = this.currencyRates[0];
  }
  getSelectedBaseCurrencyBase() {
    return this.selectedBaseCurrency?.base;
  }

  getAmountValue() {
    return this.amountValue;
  }
}
