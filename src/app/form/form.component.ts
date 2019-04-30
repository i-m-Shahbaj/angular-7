import {Component, OnInit, OnChanges, DoCheck} from "@angular/core";
@Component({
    selector:"app-form",
    templateUrl:"./form.component.html",
    styleUrls: ['./form.component.css']
})
export class AppForm implements OnInit,OnChanges,DoCheck{
    disabled = false;
    email='shahbaj khan';
    password='1231313131';
    constructor(){

    }
    submitForm(event:Event){
        this.email = '';
    }
    enabled(){
        return false;
    }
    ngOnInit(){

    }
    ngOnChanges(){

    }
    ngDoCheck(){
        
    }

}