import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { CountryButton } from '../country-button.interface';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  providers: [CountriesService]
})
export class CountriesComponent implements OnInit {
  public countryButtons: CountryButton[];

  constructor(
    private countriesService: CountriesService,
    private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.countriesService.getCountryButtons()
      .subscribe((buttons: CountryButton[]) => {
        this.countryButtons = buttons;
      });
  }

  public onSendMessageClick(): void {
    this.communicationService.messageSubject.next('Button clicked');
  }
}
