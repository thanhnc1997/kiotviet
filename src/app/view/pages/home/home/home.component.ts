import { Component, OnInit } from '@angular/core';

// Modules
import { Utilities } from 'src/app/common/helpers';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    constructor(
        private utilities: Utilities,
    ) { }

    ngOnInit() {
        this.utilities.setLoading(false);
    }

    onCheckOut() { }

    onCreateOrder() { }
}
