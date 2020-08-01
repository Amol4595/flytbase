import { Component } from '@angular/core';
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

  constructor(){}

  @HostListener('window:keyup', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    //console.log('event.key',event.key,this.keyboardOn);
    if(this.keyboardOn){
      switch(event.key) {
        case 'Delete':  
          this.deleteBox()  
          break;
        case 'ArrowLeft':
          this.comFun(-1);
          break;
        case 'ArrowRight':
          this.comFun(1);
          break;
        case 'ArrowUp':
          this.comFun(-5);
          break;
        case 'ArrowDown':
          this.comFun(5)
          break;
        case 'a':
          this.comFun(-1);
          break;
        case 'd':
          this.comFun(1);
          break;
        case 'w':
          this.comFun(-5);
          break;
        case 's':
          this.comFun(5)
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
    //console.log('boxArr',this.boxArr);
  }

  deleteBox(){
    //console.log('this.selectedArrId',this.boxArr,this.selectedArrId)
    this.boxArr.splice(this.selectedArrId, 1);
  }

  comFun(decInBy){
    let targetIndex = this.selectedArrId+decInBy;
    if(this.boxArr[targetIndex]){
      this.selectedDivId = this.boxArr[targetIndex].id;
      this.selectedArrId = targetIndex;
    }
  }

  onboxSelect(data,e,i){
    this.selectedDivId = data.id;
    this.selectedArrId = i;
  }

}

