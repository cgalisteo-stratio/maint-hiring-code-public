import { Component, OnInit } from '@angular/core';
import { EuroService } from 'src/app/services/euro.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	public title: String = 'Euro-Millones Calc';
	
	public summNumber: String = '';
	public reqNumber: String = '';


	public numbers: [];
	public stars: [];



	constructor(private euroService: EuroService) {
		
		this.numbers = [];
		this.stars = [];
	}

	ngOnInit(): void {

	}

	public newBet(): void {
		
		this.numbers = [];
		this.stars = [];

		this.euroService.getNewBet().pipe().subscribe(response => {
			this.numbers = response.data.item.numbers as [];
			this.stars = response.data.item.stars as [];

			console.log(this.numbers);
			console.log(this.stars);
		});
	}

	public newBetWithNumber(): void {
		
		this.numbers = [];
		this.stars = [];

		this.euroService.getNewBetWithNumber(this.reqNumber).pipe().subscribe(response => {
			this.numbers = response.data.item.numbers as [];
			this.stars = response.data.item.stars as [];

			console.log(this.numbers);
			console.log(this.stars);
		});
	}

	public newBetWithSumm(): void {
		
		this.numbers = [];
		this.stars = [];

		this.euroService.getNewBetWithSumm(this.summNumber).pipe().subscribe(response => {
			this.numbers = response.data.item.numbers as [];
			this.stars = response.data.item.stars as [];

			console.log(this.numbers);
			console.log(this.stars);
		});
	}

}