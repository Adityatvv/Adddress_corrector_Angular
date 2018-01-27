import { Component } from '@angular/core';
import { GoogleapiService } from './googleapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GoogleapiService]
})
export class AppComponent {
  title = 'Enter Zip Code!';
  val: string = '';
  address: any = '';
  details = [];
  latLong: any = [];
  complete: any = [];
  subscribtion: any = [];

  constructor(private logger: GoogleapiService){  }

  addressValue(val){
    this.address = val.split(' ').join('+');
    console.log(this.address);
  }

  logFunc() {
    console.log(this.address);
    this.subscribtion =  this.logger.logService(this.address).subscribe(
      (data) => this.complete = data.results[0],
    );

    this.passValue(this.complete);
  }

   passValue(complete) {
      this.details = complete.address_components;
  };

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }



}
