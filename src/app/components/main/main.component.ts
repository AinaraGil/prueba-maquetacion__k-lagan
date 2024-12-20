import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { ContentComponent } from '../content/content.component';

@Component({
    selector: 'app-main',
    imports: [HeaderComponent, HeroComponent, ContentComponent],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
})
export class MainComponent {}
