import { Component, OnInit, Directive, HostListener } from '@angular/core';

@Component({
    selector: 'app-main-time',
    templateUrl: './main-time.component.html',
    styleUrls: ['./main-time.component.scss']
})
export class MainTimeComponent implements OnInit {
    isflipped: boolean = false;
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
    flip(event,status:string): void {
        if (status === 'Y') {
            this.isflipped = true;
        } else {
            this.isflipped = false;
        }

    }

    ngOnDestroy(): void {
        clearInterval(this.setTime);
    }

}
