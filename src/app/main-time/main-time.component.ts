import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-time',
    templateUrl: './main-time.component.html',
    styleUrls: ['./main-time.component.scss']
})
export class MainTimeComponent implements OnInit {
    today: number = 0;
    setTime: any = null;
    constructor() { }

    ngOnInit() {
        this.getTodayTime();
        this.setTime = setInterval(() => {
            this.getTodayTime();
        }, 1000);
    }
    getTodayTime(): void {
        this.today = Date.now();
    }
    ngOnDestroy(): void {
        clearInterval(this.setTime);
    }

}
