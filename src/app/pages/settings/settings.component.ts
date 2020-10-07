import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { UserApiService } from "api/user.api";
import { IUserSettings } from "interfaces/user";

@Component({
    selector: "app-settings",
    templateUrl: "./settings.component.html",
    styleUrls: ["./settings.component.less"],
})
export class SettingsComponent implements OnInit {
    settingsItems: IUserSettings[];
    selectedIndex: number;

    form = this.formBuilder.group({
        address: [],
        payoutThreshold: [],
        autoPayoutEnabled: [],
    } as Record<keyof IUserSettings, any>);
    isSubmitting = false;

    constructor(
        private formBuilder: FormBuilder,
        private userApiService: UserApiService,
    ) {}

    ngOnInit(): void {
        this.userApiService.getSettings().subscribe(({ coins }) => {
            if (coins.length > 0) {
                this.settingsItems = coins;
                this.selectedIndex = 0;

                this.changeCoin();
            }
        });
    }

    changeCoin(): void {
        this.form.patchValue(this.settingsItems[this.selectedIndex]);
    }

    save(): void {
        this.isSubmitting = true;

        const data = {
            ...this.form.value,
            coin: this.settingsItems[this.selectedIndex].name,
        };

        this.userApiService.updateSettings(data).subscribe(
            () => {
                this.isSubmitting = false;
            },
            () => {
                this.isSubmitting = false;
            },
        );
    }
}
