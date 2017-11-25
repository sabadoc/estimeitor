import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
    constructor(private router: Router) { }
    ngOnInit() {
        console.log('Welcome componente inizializated');
    }

}