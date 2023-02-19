import { Component, OnInit, ViewChild } from '@angular/core';
import { Link, Rezept } from './customer';

import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./appdemo.component.scss'],
})
export class AppComponent {
  rezepte: Rezept[] = [];

  selectedRezepte: Rezept[] = [];

  links: Link[] = [];

  rezept_ausprobiert: any[] = [];

  loading: boolean = true;

  @ViewChild('dt') table!: Table;

  constructor(
    private customerService: CustomerService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.customerService.getCustomersLarge().then((rezepte: Rezept[]) => {
      this.rezepte = rezepte;
      this.loading = false;
    });

    this.links = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
    ];

    this.rezept_ausprobiert = [
      { label: 'Gekocht', value: 'gekocht' },
      { label: 'Noch nicht gekocht', value: 'nichtgekocht' },
      { label: 'XXX', value: 'xxx' },
    ];
    this.primengConfig.ripple = true;
  }

  onActivityChange(event: Event) {
    const value = (event.target as HTMLInputElement)?.value;
    if (value && value.trim().length) {
      const activity = parseInt(value);

      if (!isNaN(activity)) {
        this.table.filter(activity, 'activity', 'gte');
      }
    }
  }

  onDateSelect(value: Date) {
    this.table.filter(this.formatDate(value), 'date', 'equals');
  }

  formatDate(date: Date): string {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}-${month}-${year}`;
  }

  onRepresentativeChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.table.filter(target.value, 'representative', 'in');
  }
}
