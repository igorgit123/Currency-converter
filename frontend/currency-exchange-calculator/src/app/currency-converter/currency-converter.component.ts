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

  loadCurrencies() {
    // console.log('Loading currencies...'); // Debugging log
    this.dataService.getCurrencyRates().subscribe(
      (data: CurrencyRate[]) => {
        this.currencyRates = data;
        this.loadFirstCurrencyToPage();
      },
      (error) => {
        console.error('Error fetching currency rates:', error); // Log error details
      }
    );
  }

  customKeyValueOrder = (
    a: { key: string; value: number },
    b: { key: string; value: number }
  ): number => {
    return 0;
  };

  loadFirstCurrencyToPage() {
    if (this.currencyRates.length > 0) {
      this.selectedBaseCurrency = this.currencyRates[0];
      this.selectedBaseRates = this.selectedBaseCurrency.rates;
      this.selectedBaseRateKeys = Object.keys(this.selectedBaseRates);

      this.selectedRate =
        this.selectedBaseCurrency.rates[this.selectedBaseRateKeys[0]];
      this.selectedRateKey = this.selectedBaseRateKeys[0];
      // console.log('First currency loaded:', this.selectedBaseCurrency); // Debugging log

      this.calculateExchange();
      this.toggleVisibility();
    } else {
      console.error('No currencies available to load'); // Additional error handling
    }
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
    const selectedValue = target.value;
    const selectedCurrency = JSON.parse(selectedValue);
    this.selectedRate = selectedCurrency.value;
    this.selectedRateKey = selectedCurrency.key;
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

  getSelectedBaseCurrencyBase() {
    return this.selectedBaseCurrency?.base;
  }

  getSelectedRateKey() {
    return this.selectedRateKey;
  }

  getAmountValue() {
    return this.amountValue;
  }
}
