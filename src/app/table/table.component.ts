import {ApiService} from '../api.service';
import {Software} from '../software';
import {Component, OnInit, ViewChild, Output , EventEmitter} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  //@Output() data1 = new EventEmitter<Software>();
  //@Output() clicked1 = new EventEmitter<boolean>();
  clicked = false;
  index = 0;
  myRow:Software;
  myClicked:boolean;
  data:Software;
  displayedColumns: string[] = ['SoftwareId', 'SoftwareName', 'LanguageUsed', 'CreateDate', 'Owner', 'Actions'];
  products: Software[];
  dataSource: MatTableDataSource<Software>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private apiService: ApiService) {
    
  }
  ngOnInit() {
    this.apiService.fetchData().subscribe((data: any[]) => {
      console.log(data);
      this.products = data;
      this.dataSource = new MatTableDataSource(this.products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();

     if (this.dataSource.paginator) {
       this.dataSource.paginator.firstPage();
     }
  }
  gotClicked(row: Software)
  {
    this.clicked = true ;
    this.data = row;
    this.myRow =row;
    this.myClicked=this.clicked;
    //console.log("hello");
    //this.data1.emit(this.data);
    //console.log(this.clicked);
  }


  displayedColumns1: string[] = ['Admin Group Name', 'QA Group Name'];
  
  
  
}


