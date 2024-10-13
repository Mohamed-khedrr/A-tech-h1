import { Component } from '@angular/core';
import { QrCodeModule } from 'ng-qrcode';

@Component({
  selector: 'app-summery',
  standalone: true,
  imports: [QrCodeModule],
  templateUrl: './summery.component.html',
  styleUrl: './summery.component.scss',
})
export class SummeryComponent {}
