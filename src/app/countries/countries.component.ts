import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { CountryButton } from '../country-button.interface';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  providers: [CountriesService]
})
export class CountriesComponent implements OnInit {
  public countryButtons: CountryButton[];

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.getCountryButtons()
      .subscribe((buttons: CountryButton[]) => {
        this.countryButtons = buttons;
      });
  }

}
