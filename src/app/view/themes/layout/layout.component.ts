import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

// Modules
import { Utilities } from 'src/app/common/helpers';

@Component({
    selector: 'app-pos-layout',
    templateUrl: './layout.component.html',
})

export class LayoutComponent implements OnInit {
    constructor(
        private router: Router,
        private utilities: Utilities
    ) { }

    ngOnInit(): void {
        // config route navigation
        this.router.events.subscribe((route) => {
            if (route instanceof NavigationStart) {
                this.utilities.setLoading(true);
            }
            if (route instanceof NavigationEnd) {
                console.log('end navigation');
                this.utilities.setLoading(false);
            }
        });
    }
}
