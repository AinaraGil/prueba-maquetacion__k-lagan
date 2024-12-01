import { Component } from '@angular/core';
import { DestinationsComponent } from './sections/destinations/destinations.component';
import { PlacesComponent } from './sections/places/places.component';
import { OffersComponent } from './sections/offers/offers.component';
import { PricesComponent } from './sections/prices/prices.component';
import { ContactComponent } from './sections/contact/contact.component';

@Component({
    selector: 'app-content',
    imports: [DestinationsComponent, PlacesComponent, OffersComponent, PricesComponent, ContactComponent],
    templateUrl: './content.component.html',
    styleUrl: './content.component.scss',
})
export class ContentComponent {}
