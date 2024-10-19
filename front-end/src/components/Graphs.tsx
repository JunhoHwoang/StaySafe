"use client";

import * as React from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface GraphsProps {
  cardData: {
    id: number;
    datetime: string;
    title: string;
    description: string;
    content: string;
    score: number;
  }[];
}

export function Graphs({ cardData }: GraphsProps) {
  const processedData = React.useMemo(() => {
    return cardData.map(({ datetime, score }) => ({
      x: new Date(datetime).getTime(),
      y: score,
      date: new Date(datetime).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    }));
  }, [cardData]);

  const total = React.useMemo(
    () => cardData.reduce((acc, curr) => acc + curr.score, 0),
    [cardData]
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-4 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1">
          <CardTitle>Severe Scores</CardTitle>
          <CardDescription>
            Distribution of scores over time
          </CardDescription>
        </div>
        <div className="flex items-center">
          <span className="text-md font-bold leading-none sm:text-3xl">
            Mean: {(total / cardData.length).toFixed(2)}
          </span>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis
              type="number"
              dataKey="x"
              name="date"
              domain={['auto', 'auto']}
              tickFormatter={(unixTime) => new Date(unixTime).toLocaleDateString()}
            />
            <YAxis type="number" dataKey="y" name="score" />
            <Tooltip
              cursor={{ strokeDasharray: '3 3' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white p-2 border rounded shadow">
                      <p>Date: {data.date}</p>
                      <p>Score: {data.y}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Scatter name="Scores" data={processedData} fill="red" />
          </ScatterChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
