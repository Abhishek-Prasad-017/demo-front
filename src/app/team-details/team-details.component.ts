import { Component, OnInit , Input } from '@angular/core';
import {Software} from '../software';
@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  @Input() data:Software;
  @Input() clicked:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
