import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import { COLORS } from '@constants';

import { StyledChartContainer } from './StatisticsChart.styles';
import type { StatisticsChartProps } from './StatisticsChart.types';

export const StatisticsChart = ({
    data,
    orientation,
}: StatisticsChartProps) => {
    const isHorizontal = orientation === 'horizontal';

    return (
        <StyledChartContainer>
            <ResponsiveContainer width="100%" height={320}>
                <BarChart
                    data={data}
                    layout={isHorizontal ? 'vertical' : 'horizontal'}
                    margin={{
                        top: 16,
                        right: 16,
                        left: 16,
                        bottom: 16,
                    }}
                >
                    <CartesianGrid
                        stroke={COLORS.TEXT.DISABLED}
                        strokeDasharray="3 3"
                    />

                    {isHorizontal ? (
                        <>
                            <XAxis
                                type="number"
                                tickLine={false}
                                axisLine={false}
                                tick={{
                                    fontSize: 12,
                                    fill: COLORS.TEXT.SECONDARY,
                                }}
                            />

                            <YAxis
                                type="category"
                                dataKey="label"
                                width={120}
                                tickLine={false}
                                axisLine={false}
                                tick={{
                                    fontSize: 12,
                                    fill: COLORS.TEXT.SECONDARY,
                                }}
                            />
                        </>
                    ) : (
                        <>
                            <XAxis
                                dataKey="label"
                                tickLine={false}
                                axisLine={false}
                                tick={{
                                    fontSize: 12,
                                    fill: COLORS.TEXT.SECONDARY,
                                }}
                            />

                            <YAxis
                                tickLine={false}
                                axisLine={false}
                                tick={{
                                    fontSize: 12,
                                    fill: COLORS.TEXT.SECONDARY,
                                }}
                            />
                        </>
                    )}

                    <Tooltip
                        cursor={{
                            fill: COLORS.PRIMARY.LIGHT,
                        }}
                    />

                    <Bar
                        dataKey="value"
                        fill={COLORS.PRIMARY.MAIN}
                        radius={[8, 8, 0, 0]}
                        animationDuration={700}
                    />
                </BarChart>
            </ResponsiveContainer>
        </StyledChartContainer>
    );
};
