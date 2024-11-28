import { Component } from '@angular/core';
import { DestinationsComponent } from './sections/destinations/destinations.component';
import { PlacesComponent } from './sections/places/places.component';

@Component({
    selector: 'app-content',
    imports: [DestinationsComponent, PlacesComponent],
    templateUrl: './content.component.html',
    styleUrl: './content.component.scss',
})
export class ContentComponent {}
