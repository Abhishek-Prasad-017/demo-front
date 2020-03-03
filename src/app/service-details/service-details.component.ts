import { Component, OnInit , Input } from '@angular/core';
import {Software} from '../software';
@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  @Input() data:Software;
  @Input() clicked:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
