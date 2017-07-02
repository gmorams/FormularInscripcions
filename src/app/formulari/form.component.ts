import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Usuari }    from '../us-model/us-model.model';

declare var $:any;

@Component({
  selector: 'formulari',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class Formulari {
  te:boolean=false;
  ca:boolean=false;

  active:boolean=true;
  valid:boolean=true;
  aux:boolean=true;

  inscripcions:Array<Usuari>=[];
  us = new Usuari("","","","","");

  pa:boolean=false;
  al:boolean=false;
  cu:boolean=false;
  op:boolean=false;
  ho:boolean=false;

  enviar(){
    if(this.us.nomp, this.us.noma, this.us.curs, this.us.opc, this.us.horari != ""){
        this.inscripcions.push(this.us);
        console.log(this.inscripcions);
        this.valid=true;
        this.newUs();
        if(this.aux)$('#inscrits').slideToggle(400);
        this.aux=false;
    }
    else{
        this.valid=false;
        if(this.us.nomp=="")this.pa=true;
        if(this.us.noma=="")this.al=true;
        if(this.us.curs=="")this.cu=true;
        if(this.us.opc=="")this.op=true;
        if(this.us.horari=="")this.ho=true;
    }
    
  }

  newUs(){
    this.us = new Usuari('', '', '', '', '');
    this.active = false;
    this.active = true;
  }

  seleccionado(curs:string){
    if(curs == "teatre"){
        this.te=!this.te;
    }
    else if(curs == "cant"){
        this.ca=!this.ca;
    }
    if(this.te == true && this.ca == false){
        this.us.opc="teatre";
    }
    if(this.te == false && this.ca == true){
        this.us.opc="cant";
    }
    if(this.te == true && this.ca == true){
        this.us.opc="te&ca";
    }
    if(this.te == false && this.ca == false){
        this.us.opc="";
    }
  }
  horaris(opc){
    if(opc=="teatre"){
        $('#cte').slideToggle(400);
    }
    if(opc=="cant"){
        $('#cca').slideToggle(400);
    }
  }
  hors(opc,hor){
      this.us.opc=opc;
      this.us.horari=hor;
      console.log(this.us.horari);
  }
  checkInscrits(){
    $('.boxInscrits').slideToggle(300);
  }
}


