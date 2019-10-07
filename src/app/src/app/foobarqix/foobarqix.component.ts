import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foobarqix',
  templateUrl: './foobarqix.component.html',
  styleUrls: ['./foobarqix.component.scss']
})
export class FoobarqixComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  compute(userInput: string): string {
    let result = '';
    if (parseInt(userInput, 0) % 3 === 0) {
      result += 'Foo';
    }
    if (userInput.indexOf('3') >= 0) {
      result += 'Foo';
    }

    if (userInput === '1') {
      result = '1';
    } else if (userInput === '2') {
      result = '2';
    }

    return result;
  }
}
