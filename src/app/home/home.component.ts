import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public activePic = 0; 
	public numImages = 4; 

  public imageRoute = "../../portfolio/assets/images/";
  // public imageRoute = "../../assets/images/"; 

  	constructor(private router: Router, private scrollAnimate: NgAnimateScrollService) { }

  	ngOnInit() {
  	}

  	setPic(num) {
  		this.activePic = num; 
  		console.log(this.activePic); 
  	}

  	incrementPic() {
  		this.activePic = (this.activePic + 1) % this.numImages; 
  		console.log(this.activePic); 
  	}

  	decrementPic() {
  		this.activePic = (this.activePic - 1);
  		if (this.activePic == -1) {
  			this.activePic = this.numImages - 1;
  		}
  		console.log(this.activePic); 
  	}

    nav(route) {
        this.router.navigate([route]);
    }

    scrollDown() {
      this.scrollAnimate.scrollToElement('about', 1500); 
    }

}
