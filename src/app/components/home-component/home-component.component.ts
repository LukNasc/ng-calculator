import { Component } from '@angular/core';
import { Calculator } from 'src/utils/calculator';

const operators = ['+', '-', '.', '%', '*'];

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss'],
})
export class HomeComponentComponent {
  displayValue = '';
  blocksKeys = [
    [{ label: '1' }, { label: '2' }, { label: '3' }, { label: '%' }],
    [{ label: '4' }, { label: '5' }, { label: '6' }, { label: '*' }],
    [{ label: '7' }, { label: '8' }, { label: '9' }, { label: '+' }],
    [{ label: '0', colspan: 2 }, { label: '.' }, { label: '=' }],
    [{ label: 'RESET', colspan: 3 }],
  ];

  constructor(private calculator: Calculator) {}

  onClick(e: Event) {
    const target = e.target as HTMLElement;
    let { innerHTML: value } = target;
    value = value.trim();
    if (value === '=') return this.resolveExpression(this.displayValue);
    if (value === 'RESET') return (this.displayValue = '');

    const latestChar = this.displayValue.charAt(this.displayValue.length - 1);

    if (operators.includes(latestChar) && latestChar === value) return;
    this.displayValue += value;
  }

  resolveExpression(value: string) {
    this.displayValue = this.calculator.parseStringToMathExpression(value);
  }
}
