import { Component } from "@angular/core";

@Component({
    selector: 'app-test-one',
    template: `<h1> Hello From Test Component</h1> <app-test-from-cli></app-test-from-cli>`,
    styles: [`h1{color: red}`]
})
export class TestOneComponent{}

