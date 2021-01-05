import { Component, OnInit } from '@angular/core';
import { CardApiService } from '../../../card-api.service'

@Component({
  selector: 'app-card-api',
  templateUrl: './card-api.component.html',
  styleUrls: ['./card-api.component.css']
})
export class CardApiComponent implements OnInit {

  constructor(private cardApiService: CardApiService) { }

  public dataArray

  ngOnInit(): void {
    this.cardApiService.getData()
    .subscribe(data => this.dataArray = data)
    console.log(this.dataArray)
  }

}
