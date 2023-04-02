import { Component, OnInit } from '@angular/core';
import { SubService } from '../sub.service';

@Component({
  selector: 'app-practice3',
  templateUrl: './practice3.component.html',
  styleUrls: ['./practice3.component.scss']
})
export class Practice3Component implements OnInit {
  username:any
  constructor(private sub:SubService) { }

  ngOnInit(): void {
    this.sub.username.subscribe(el=>{
      this.username=el
    })
  }

}
