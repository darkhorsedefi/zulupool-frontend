import { Injectable, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StorageService } from 'services/storage.service';

@Injectable({
    providedIn: 'root',
})
@Component({
    selector: 'app-target-login-badge',
    templateUrl: './target-login-badge.component.html',
    styleUrls: ['./target-login-badge.component.less'],
})
export class TargetLoginBadgeComponent implements OnInit {
    @Output()
    onTargetChange = new EventEmitter<string>();

    usersItems: any;
    selectedIndex: number;
    constructor(private storageService: StorageService) {}

    ngOnInit() {
        if (this.storageService.allUsersData?.length === 0) return;
        this.usersItems = this.storageService.allUsersData;
        this.selectedIndex = this.storageService.allUsersData.findIndex(
            user => user.login === this.storageService.targetUser,
        );
    }

    onUserChange(): void {
        this.storageService.targetUser = this.usersItems[this.selectedIndex].login;
        this.onTargetChange.emit(this.storageService.targetUser);
    }
}
