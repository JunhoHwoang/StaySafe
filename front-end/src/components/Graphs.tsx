"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Toggle } from "@/components/ui/toggle";

export const description = "An interactive bar chart";

const chartData = [
  { datetime: "2024-05-01 08:00", value: 372 },
  { datetime: "2024-05-01 09:00", value: 277 },
  // ... more data points ...
  { datetime: "2024-07-31 23:00", value: 846 },
];

const chartConfig = {
  views: {
    label: "Page Views",
  },
  value: {
    label: "Total Views",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function Graphs() {
  const [activeView, setActiveView] = React.useState<"date" | "time">("date");

  const processedData = React.useMemo(() => {
    return chartData.map(({ datetime, value }) => ({
      label:
        activeView === "date"
          ? new Date(datetime).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })
          : new Date(datetime).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            }),
      value,
    }));
  }, [activeView]);

  const total = React.useMemo(
    () => chartData.reduce((acc, curr) => acc + curr.value, 0),
    []
  );

  return (
    <div>
      <div className="flex flex-row items-center space-x-4 mb-4">
        <Toggle
          variant="outline"
          aria-label="View by date"
          pressed={activeView === "date"}
          onPressedChange={() => setActiveView("date")}
        >
          View by date
        </Toggle>
        <Toggle
          variant="outline"
          aria-label="View by time"
          pressed={activeView === "time"}
          onPressedChange={() => setActiveView("time")}
        >
          View by time
        </Toggle>
      </div>

      <Card>
        <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-4 sm:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-1">
            <CardTitle>Severe Scores</CardTitle>
            <CardDescription>
              Distribution of scores for the last 3 months
            </CardDescription>
          </div>
          <div className="flex items-center">
            <span className="text-md font-bold leading-none sm:text-3xl">
              Mean: {(total / chartData.length).toFixed(2)}
            </span>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            <BarChart
              accessibilityLayer
              data={processedData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="label"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="w-[150px]"
                    nameKey="views"
                    labelFormatter={(value) => value}
                  />
                }
              />
              <Bar dataKey="value" fill={`var(--color-value)`} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
