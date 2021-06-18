import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/core/interfaces/products';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  product!:Product[];
  dataSource: MatTableDataSource<Product> = new MatTableDataSource<Product>();

  constructor(private productService: ProductService){
  }
  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.product = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource = new MatTableDataSource<Product>(data);
    });
    this.loadData();
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }


  handleSuccessfulResponse(response: Product[]) {
    this.product = response;
  }
    loadData() {
      this.productService.getProducts().subscribe((response) => this.handleSuccessfulResponse(response));
    }
}
