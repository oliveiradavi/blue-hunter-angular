import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.less']
})

export class HomeComponent {

	url: string = "https://node-blue-hunter.herokuapp.com";

	userInputValue: string = "";
	bookTitleInputValue: string = "";
	bookAuthorInputValue: string = "";

	userFound: boolean = true;
	bookFound: boolean = true;
	authorFound: boolean = true;

	userData:any = [];
	bookData:any = [];
	authorData:any = [];

	noUserFound: string   = "Nenhum usuário foi encontrado, verifique se o nome está correto.";
	noBookFound: string   = "Nenhum livro foi encontrado, verifique se o título está correto."
	noAuthorFound: string = "Nenhum livro foi encontrado, verifique se o nome do autor está correto."

	constructor(private http: HttpClient) {

	}

	userInput(event:any) {
		this.userInputValue = event.target.value;
	}

	findUser() {
		if(this.userInputValue.trim() !== "") {
			this.http.get( this.url + '/user/by-name/' + this.userInputValue ).subscribe(
				data => {
					this.userData = data;      
					this.userFound =  (undefined !== data[0]);      
				},
				err => {
					this.userFound = false;
				}
				)
		} else {
			this.userFound = false;
		}
	}

	bookInput(event:any) {
		this.bookTitleInputValue = event.target.value;		
	}

	findBookByTitle() {
		if(this.bookTitleInputValue.trim() !== "") {
			this.http.get( this.url + '/book/by-title/' + this.bookTitleInputValue ).subscribe(
				data => {
					this.bookData = data;
					this.bookFound =  (undefined !== data[0]);            
				}, 
				err => {
					this.bookFound = false;
				}
				)
		} else {
			this.bookFound = false;
		}
	}

	authorInput(event:any) {
		this.bookAuthorInputValue = event.target.value;
	}

	findBookByAuthor() {
		if(this.bookAuthorInputValue.trim() !== "") {
			this.http.get( this.url + '/book/by-author/' + this.bookAuthorInputValue ).subscribe(
				data => {
					this.authorData = data;
					this.authorFound =  (undefined !== data[0]);            
				}, 
				err => {
					this.authorFound = false;
				}
				)
		} else {
			this.authorFound = false;
		}
	}
	
}