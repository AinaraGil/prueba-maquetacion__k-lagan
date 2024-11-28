import { Component } from '@angular/core';
import { DestinationsComponent } from './sections/destinations/destinations.component';

@Component({
    selector: 'app-content',
    imports: [DestinationsComponent],
    templateUrl: './content.component.html',
    styleUrl: './content.component.scss',
})
export class ContentComponent {}
