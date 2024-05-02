import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  orderId: string;
  customer: string;
  date: string;
  amount: string;
  Status: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    orderId: '#1234',
    customer: 'Killie Marquot',
    date: '21 January, 22',
    amount: '$2,241.02',
    Status: 'Shipped',
  },
  {
    orderId: '#1234',
    customer: 'Caroul Jenkins',
    date: '16 January, 22',
    amount: '$4,241.02',
    Status: 'Cancelled',
  },
  {
    orderId: '#1234',
    customer: 'Carl Jenkins',
    date: '09 Feburary, 22',
    amount: '$3,241.02',
    Status: 'Shipped',
  },
  {
    orderId: '#1234',
    customer: 'Daizy Robert',
    date: '05 May, 22',
    amount: '$2,241.02',
    Status: 'Awaiting Shipment',
  },
  {
    orderId: '#1234',
    customer: 'Killie Marquot',
    date: '09 September, 22',
    amount: '$2,241.02',
    Status: 'Shipped',
  },
  {
    orderId: '#1234',
    customer: 'Caroul Jenkins',
    date: '16 September, 22',
    amount: '$2,241.02',
    Status: 'Shipped',
  },
  {
    orderId: '#1234',
    customer: 'Carl Jenkins',
    date: '01 October, 22',
    amount: '$2,241.02',
    Status: 'Awaiting Shipment',
  },
  {
    orderId: '#1234',
    customer: 'Daizy Robert',
    date: '13 December, 22',
    amount: '$2,241.02',
    Status: 'Cancelled',
  },
];

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  displayedColumns: string[] = [
    'orderId',
    'customer',
    'date',
    'amount',
    'status',
    'action',
  ];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator | null =
    null;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
