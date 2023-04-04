import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Calculator {
  parseStringToMathExpression(value: string) {
    return Function(`'use strict'; return (${value})`)();
  }
}
