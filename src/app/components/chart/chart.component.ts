import { Component, Input, OnInit, OnChanges } from "@angular/core";

import { ChartDataSets, ChartOptions } from "chart.js";
import { Label } from "ng2-charts";

import { TranslateService } from "@ngx-translate/core";
import { SubscribableComponent } from "ngx-subscribable";
import { not } from "logical-not";

import { ThemeService } from "services/theme.service";
import { ETheme } from "enums/theme";

type Color = [number, number, number];

const themes: Record<ETheme, Color> = {
    [ETheme.Default]: [23, 125, 220],
    [ETheme.Dark]: [23, 125, 220],
};

@Component({
    selector: "app-chart",
    templateUrl: "./chart.component.html",
    styleUrls: ["./chart.component.less"],
})
export class ChartComponent extends SubscribableComponent
    implements OnInit, OnChanges {
    @Input()
    titleKey: string;

    @Input()
    labels: Label[];

    @Input()
    data: number[];

    chart: IChartSettings;

    constructor(
        private translateService: TranslateService,
        private themeService: ThemeService,
    ) {
        super();
    }

    ngOnInit(): void {
        this.subscriptions.push(
            this.themeService.theme.subscribe(theme => {
                this.ngOnChanges();
            }),
        );
    }

    ngOnChanges(): void {
        const { titleKey: title, labels, data } = this;

        if (not(data?.length > 0)) return;

        const [r, g, b] = themes[this.themeService.theme.value];

        this.chart = {
            datasets: [
                {
                    label: this.translateService.instant(title),
                    data,
                    borderColor: `rgb(${r}, ${g}, ${b})`,
                    backgroundColor: `rgba(${r}, ${g}, ${b}, .3)`,
                    pointRadius: 8,
                    pointBackgroundColor: "rgba(0,0,0,0)",
                    pointBorderColor: "rgba(0,0,0,0)",
                },
            ],
            labels,
            options: {},
        };
    }
}

interface IChartSettings {
    datasets: ChartDataSets[];
    labels: Label[];
    options: ChartOptions;
}
