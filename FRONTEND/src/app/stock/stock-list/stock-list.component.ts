import { Component, OnInit } from '@angular/core';
import { StockService } from '../service/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  constructor(private readonly stockService: StockService) { }

  ngOnInit(): void {
    this.getStock();
  }

  getStock(){
    this.stockService.getStocks().subscribe(
      res =>console.log(res),
      err => console.log(err)
    );
  }

}
