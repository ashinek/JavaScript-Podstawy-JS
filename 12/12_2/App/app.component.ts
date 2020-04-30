import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: '<h2>{{header}}</h2><p>{{text}}</p>'
})

export class AppComponent{

	header: string;
	text: string;

	constructor(){
		this.header = 'Najlepsza oferta!';
		this.text = 'Lorem ipsum chuje muje kurwy zwierze ja pierdole dziś nie wierzę, wal się kurwo ty jebana obciagana.';
	}
	
}