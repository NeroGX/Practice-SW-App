import { Component, OnInit } from '@angular/core';
import { Ship } from '../Ship';
import { ShipsServiceService } from './ships-service.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {
  ships: Ship[] = [
    
  ]

  constructor(private shipsService: ShipsServiceService) { }

  ngOnInit(): void {
    this.getShips();
  }

  getShips(): void {
    this.shipsService.getShips()
    .subscribe(data => (this.ships = data.results));
  }
}