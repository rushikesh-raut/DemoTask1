import { Component, OnInit } from '@angular/core';
import { SubService } from '../sub.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
  username:any
  constructor(private sub:SubService) {}
  ngOnInit(): void {
    this.sub.username.subscribe(el=>{
      this.username=el
    })
  }
  
}
