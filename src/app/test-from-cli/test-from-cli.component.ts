import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-test-from-cli',
  templateUrl: './test-from-cli.component.html',
  styleUrls: ['./test-from-cli.component.scss'],
})
export class TestFromCliComponent implements AfterViewInit, OnInit {
  personName = 'John Doe';
  title = 'Test Form CLI';
  imgSrc = 'assets/img/apple-touch-icon.png';
  class = 'new-class';
  showPassword = false;
  number = 2;
  subscriptions: Subscription[] =[];
  @ViewChild('inputEl') testVar!: ElementRef;
  // const testVar = document.getElementById('inputEl')
  @ViewChildren('inputEl') testVarArray!: QueryList<ElementRef>;
  // const testVarArray = document.querySelectorAll'inputEl')

  constructor() {}

  ngOnInit(): void {
    // const myPromise = new Promise((resolve, reject) => {
    //   console.log('Promise started');
    //   const x = 5;
    //   const y = 6;

    //   if (x + y == 10) {
    //     console.log('promise has been resolved');
    //     resolve('Success');
    //   } else {
    //     console.log('promise has been rejected');
    //     reject('Error has happened');
    //   }
    // });

    // myPromise
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    const myObservable = new Observable((observer) => {
      console.log('Observable started');
      const x = 5;
      const y = 5;

      if (x + y == 10) {
        console.log('Observable has been resolved');
        observer.next(x*y);
      } else {
        console.log('Observable has been rejected');
        observer.error('Error has happened');
      }
      if(x/y ==1){
        observer.next(x/y);
      }
      observer.complete();
    });


  this.subscriptions.push(myObservable.subscribe(
      (res)=>{
        console.log(res);
      },
      (err)=>{
        console.log(err);
      },
      ()=>{
        console.log('completed');
        
      }
    ))

   const myInterval = this.ourOwnInterval(0, 1000);
   myInterval.subscribe(
     (res)=>{
       console.log(res);
     },
     (err)=>{},
     ()=>{}
   )

  //  this.subscriptions.unsubscribe();

   
  }


  ourOwnInterval(x: number, intervalPeriod: number){
    return new Observable((observer)=>{
      setInterval(()=>{
        observer.next(x++)
      }, intervalPeriod)
    })
  }

  ngAfterViewInit(): void {
    // console.log((this.testVar.nativeElement as HTMLInputElement).value);
    // // console.log(this.testVarArray);
    // this.testVarArray.forEach((el) => {
    //   console.log(el);
    //   const element = el.nativeElement as HTMLInputElement;
    //   element.classList.add('form-control');
    // });
  }

  testButton(x: HTMLInputElement) {
    // console.log(x.classList);

    // RXJS ( Subject, operators)
    // NGRX

  }
}
