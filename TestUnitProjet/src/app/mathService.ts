import { Injectable } from '@angular/core';

@Injectable()

export class MathService {
    count: number = 0;

    // constructor() { }

    incrementCount() {
        this.count++;
    }

}
