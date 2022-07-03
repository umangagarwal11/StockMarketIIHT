import { Component, OnInit } from '@angular/core';
import { Sector } from 'src/model/Sector';
import { SectorService } from 'src/services/sector.service';
@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit{

  public formData: Sector={
    sectorId:'',
    sectorName:'',
    sectorDescription:''

  };
  sectors:Sector[];
  submitted:boolean;
  constructor(private sectorService: SectorService) {
    this.submitted=false;
  }
  ngOnInit(): void{
    this.sectorService.getSectors().subscribe(response => {this.sectors=response});

  }
  onSubmit()
  {
    this.sectorService.addSector(this.formData);
    this.submitted=true;
    console.log("out");
    
  }
  onDelete(data)
  {
    this.sectorService.deleteSector(data);
  }
  onEdit(data)
  {
    this.sectorService.editSector(data);
  }


}
