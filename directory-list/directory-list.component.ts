import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-directory-list',
  templateUrl: './directory-list.component.html',
  styleUrls: ['./directory-list.component.css']
})
export class DirectoryListComponent implements OnInit {

  dirList: any[] = [];
  filteredDirList: any[] = [];
  searchText: string = '';
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllDirectories();
  }

  getAllDirectories(){
    this.apiService.getAllDirectories().subscribe(res=>{
      this.dirList = res;
      this.filteredDirList = this.dirList;
    });
  }
  searchItem(event: KeyboardEvent){
   console.log("###",this.searchText)
    this.filterDirList();
    

  }
  filterDirList(){
    // this.filteredDirList = this.dirList.filter();
    if(this.searchText == ''){
      this.filteredDirList = this.dirList;

    }else{
      this.filteredDirList = this.dirList .filter(x => x.name.toLowerCase().startsWith(this.searchText));
    }
  }  
  
}
