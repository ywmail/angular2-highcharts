import { Injectable } from '@angular/core';
import Highcharts = require('highcharts');

@Injectable()
export class HighchartsService {
    Highcharts: HighchartsStatic;

    constructor() {
        this.Highcharts = Highcharts;
    }

    initChart(chartOptions: any, type: string): HighchartsChartObject {
        if (!this.Highcharts[type]) {
            throw new Error(`${type} is unknown chart type.`);
        }

        return new this.Highcharts[type](chartOptions);
    }
}
