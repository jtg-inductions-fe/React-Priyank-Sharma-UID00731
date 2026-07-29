export type StatisticsChartOrientation = 'horizontal' | 'vertical';

export type StatisticsChartData = {
    label: string;
    value: number;
};

export type StatisticsChartProps = {
    data: StatisticsChartData[];
    orientation: StatisticsChartOrientation;
};
