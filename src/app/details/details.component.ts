import { Component, OnInit, Input } from '@angular/core';
import {Software} from '../software';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() data:Software;
  @Input() clicked:boolean;
  
  
  constructor() { 
    console.log(this.data);
    console.log(this.clicked);
  }
  
  ngOnInit(): void {
    //console.log(this.data);
    //console.log(this.clicked);
    //this.ngOnInit();
  }
  

}
