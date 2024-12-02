import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface FeatureElement {
    feature: string;
    basic: boolean;
    pro: boolean;
    enterprise: boolean;
}

const PRICES_DATA: FeatureElement[] = [
    { feature: 'Feature 1', basic: true, pro: true, enterprise: true },
    { feature: 'Feature 2', basic: true, pro: true, enterprise: true },
    { feature: 'Feature 3', basic: true, pro: true, enterprise: true },
    { feature: 'Feature 4', basic: true, pro: true, enterprise: true },
    { feature: 'Feature 5', basic: true, pro: true, enterprise: true },
    { feature: 'Feature 6', basic: false, pro: true, enterprise: true },
];

@Component({
    selector: 'app-prices',
    imports: [MatTableModule],
    templateUrl: './prices.component.html',
    styleUrl: './prices.component.scss',
})
export class PricesComponent {
    displayedColumns: string[] = ['feature', 'basic', 'pro', 'enterprise'];
    dataSource = PRICES_DATA;
}
