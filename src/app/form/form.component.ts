import {Component, OnInit, OnChanges, DoCheck} from '@angular/core';
import { UserService } from '../services/user.service';
import {User} from '../model/user.model';
@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class AppForm implements OnInit, OnChanges, DoCheck {
    err = {};
    user = new User();
    ngOnInit() {
        err = [];
    }
    enabled() {
        return false;
    }
    constructor(private userService: UserService) {
    }

    submitForm(event: Event) {
        return true;
        // this.userService.registerUser();
    }





    ngOnChanges() {

    }

    ngDoCheck() {
    }
}