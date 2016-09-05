import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChartComponent } from './ChartComponent';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartPointComponent } from './ChartPointComponent';
import { ChartXAxisComponent } from './ChartXAxisComponent';
import { ChartYAxisComponent } from './ChartYAxisComponent';

@NgModule({
    imports: [CommonModule],
    declarations: [ChartComponent, ChartSeriesComponent, ChartPointComponent, ChartXAxisComponent, ChartYAxisComponent],
    providers: [],
    exports: [ChartComponent]
})

export class HighchartsMoudle { }
