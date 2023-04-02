import { Component, OnInit } from '@angular/core';
import { SubService } from '../sub.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  constructor(private sub:SubService){ }

  ngOnInit(): void { }
  
  

}
