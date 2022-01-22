import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-test-from-cli',
  templateUrl: './test-from-cli.component.html',
  styleUrls: ['./test-from-cli.component.scss'],
})
export class TestFromCliComponent implements AfterViewInit{
  personName = 'John Doe';
  title = 'Test Form CLI';
  imgSrc = 'assets/img/apple-touch-icon.png';
  class = 'new-class';
  showPassword = false;
  number = 2;
  @ViewChild('inputEl') testVar!: ElementRef;
  // const testVar = document.getElementById('inputEl')
  @ViewChildren('inputEl') testVarArray!: QueryList<ElementRef>;
  // const testVarArray = document.querySelectorAll'inputEl')

  constructor() {
  }

  ngAfterViewInit(): void {
    console.log((this.testVar.nativeElement as HTMLInputElement).value);

    // console.log(this.testVarArray);
    this.testVarArray.forEach((el)=>{
      console.log(el)
      const element = el.nativeElement as HTMLInputElement;
      element.classList.add('form-control')
    })
  }

  testButton(x: HTMLInputElement){
    console.log(x.classList);
    
  }
 

}
