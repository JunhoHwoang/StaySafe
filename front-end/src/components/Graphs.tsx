"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An interactive bar chart"

const chartData = [
  { datetime: "2024-05-01 08:00", value: 372 },
  { datetime: "2024-05-01 09:00", value: 277 },
  // ... more data points ...
  { datetime: "2024-07-31 23:00", value: 846 },
]

const chartConfig = {
  views: {
    label: "Page Views",
  },
  value: {
    label: "Total Views",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function Graphs() {
  const [activeView, setActiveView] = React.useState<"date" | "time">("date")

  const processedData = React.useMemo(() => {
    return chartData.map(({ datetime, value }) => ({
      label: activeView === "date"
        ? new Date(datetime).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
        : new Date(datetime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
      value
    }))
  }, [activeView])

  const total = React.useMemo(() => chartData.reduce((acc, curr) => acc + curr.value, 0), [])

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Severe Scores</CardTitle>
          <CardDescription>
            Distribution of scores for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["date", "time"].map((view) => (
            <button
              key={view}
              data-active={activeView === view}
              className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
              onClick={() => setActiveView(view as "date" | "time")}
            >
              <span className="text-xs text-muted-foreground">
                View by {view}
              </span>
              <span className="text-md font-bold leading-none sm:text-3xl">
                Mean
              </span>
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
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
  );
}
