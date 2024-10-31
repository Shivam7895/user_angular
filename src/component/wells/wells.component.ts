import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/_services/user.service';
import { ConstUrls } from 'src/consUrl';

@Component({
  selector: 'app-wells',
  templateUrl: './wells.component.html',
  styleUrls: ['./wells.component.css']
})
export class WellsComponent implements OnInit {

  constructor(
    private _US:UserService
  ) { }

  ngOnInit(): void {
    this.getDetails()
  }

  tranxDetails:any = []
  getDetails(){
    let _id = localStorage.getItem('_id')
    this._US.secureGet(ConstUrls.usersApi.txnlist + _id).subscribe((res:any)=>{
      this.tranxDetails = res?.response
      console.log(this.tranxDetails,'resres')
    })
  }

}
