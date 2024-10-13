import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { InvoiceDetailsComponent } from '../../components/invoice-details/invoice-details.component';
import { ClientDetailsComponent } from '../../components/client-details/client-details.component';
import { ProductsDetailsComponent } from '../../components/products-details/products-details.component';
import { SummeryComponent } from '../../components/summery/summery.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-homework-page',
  standalone: true,
  imports: [
    HeaderComponent,
    InvoiceDetailsComponent,
    ClientDetailsComponent,
    ProductsDetailsComponent,
    SummeryComponent,
    FooterComponent,
  ],
  templateUrl: './homework-page.component.html',
  styleUrl: './homework-page.component.scss',
})
export class HomeworkPageComponent {}
