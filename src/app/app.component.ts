import { Component, ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flytbase';
  boxArr:any=[];
  selectedDivId:any='';
  selectedArrId:any;
  addBoxCount:number=0;
  keyboardOn: boolean = true;
  dif:any;

  constructor(){}

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    //console.log('event.key',event.key,this.keyboardOn);
    if(this.keyboardOn){
      let ele = document.getElementById(this.selectedDivId);
      let left = parseInt(ele.style.left);
      left=left>0?left:0;
      let top = parseInt(ele.style.top);
      top=top>0?top:0;
      switch(event.key) {
        case 'Delete':  
          this.deleteBox()  
          break;
        case 'ArrowLeft':
          if(left>0){
            this.dif = left - 1;
            ele.style.left = this.dif +'px';
          }
          break;
        case 'ArrowRight':
          //this.comFun(1);
          if(left<490){
            this.dif = left + 1;
            ele.style.left = this.dif +'px';
          }
          break;
        case 'ArrowUp':
          //this.comFun(-5);
          if(top>0){
            this.dif = top - 1;
            ele.style.top = this.dif + 'px';
          }
          break;
        case 'ArrowDown':
          //this.comFun(5)
          if(top<490){
            this.dif = top + 1;
            ele.style.top = this.dif + 'px';
          }
          break;
        case 'a':
          if(left>0){
            this.dif = left - 1;
            ele.style.left = this.dif +'px';
          }
          break;
        case 'd':
          //this.comFun(1);
          if(left<490){
            this.dif = left + 1;
            ele.style.left = this.dif +'px';
          }
          break;
        case 'w':
          if(top>0){
            this.dif = top - 1;
            ele.style.top = this.dif + 'px';
          }
          break;
        case 's':
          if(top<490){
            this.dif = top + 1;
            ele.style.top = this.dif + 'px';
          }
          break;
        default:
          // code block
      }
      
    }
  }

  toggleKeybrd(){
    this.keyboardOn = !this.keyboardOn;
  }

  addBox(){
    this.addBoxCount = this.addBoxCount + 1;
    let Rndid = '_' + Math.random().toString(36).substr(2, 9);
    this.boxArr.push({id:Rndid,zIndex:this.addBoxCount})
  }

  deleteBox(){
    this.boxArr.splice(this.selectedArrId, 1);
  }

  comFun(decInBy){
    // let targetIndex = this.selectedArrId+decInBy;
    // if(this.boxArr[targetIndex]){
    //   this.selectedDivId = this.boxArr[targetIndex].id;
    //   this.selectedArrId = targetIndex;
    // }
  }

  onboxSelect(data,e,i){
    this.selectedDivId = data.id;
    this.selectedArrId = i;
  }

}

