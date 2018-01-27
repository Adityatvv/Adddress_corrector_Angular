import { Component } from '@angular/core';

@Component({
    selector: 'child-component',
    templateUrl: 'child.component.html',
    styles: ['h1 { color : red };']
})
export class ChildComponent {
    constructor() {}
}
