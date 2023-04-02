import { Component, OnInit } from '@angular/core';
import { SubService } from '../sub.service';

@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.scss']
})
export class Practice2Component implements OnInit {
username:any
  constructor(private sub:SubService) {}
  ngOnInit(): void {
    this.sub.username.subscribe(el=>{
      this.username=el
    })
  }
}
