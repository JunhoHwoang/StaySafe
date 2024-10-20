import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface GraphStatsProps {
  cardData: {
    id: number;
    datetime: string;
    title: string;
    description: string;
    content: string;
    score: number;
  }[];
}

export function GraphStats({ cardData }: GraphStatsProps) {
  const stats = useMemo(() => {
    const scores = cardData.map(card => card.score);
    const sum = scores.reduce((acc, score) => acc + score, 0);
    const mean = sum / scores.length;
    const sortedScores = [...scores].sort((a, b) => a - b);
    const median = scores.length % 2 === 0
      ? (sortedScores[scores.length / 2 - 1] + sortedScores[scores.length / 2]) / 2
      : sortedScores[Math.floor(scores.length / 2)];
    const variance = scores.reduce((acc, score) => acc + Math.pow(score - mean, 2), 0) / scores.length;
    const stdDev = Math.sqrt(variance);
    const highSeverityCount = scores.filter(score => score > 7).length;

    // Calculate 7-day moving average
    const movingAverage = cardData.map((card, index) => {
      const last7Days = cardData.slice(Math.max(0, index - 6), index + 1);
      const avg = last7Days.reduce((sum, c) => sum + c.score, 0) / last7Days.length;
      return { date: new Date(card.datetime), average: avg };
    });

    return {
      mean: mean.toFixed(2),
      max: Math.max(...scores),
      min: Math.min(...scores),
      median: median.toFixed(2),
      stdDev: stdDev.toFixed(2),
      highSeverityCount,
      movingAverage
    };
  }, [cardData]);

  return (
    <div className="flex flex-col gap-4">
    <Card className="w-full min-h-fit">
      <CardHeader>
        <CardTitle>Safety Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-semibold">Mean Severity</h3>
            <p>{stats.mean}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Max Severity</h3>
            <p>{stats.max}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Min Severity</h3>
            <p>{stats.min}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Median Severity</h3>
            <p>{stats.median}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Standard Deviation</h3>
            <p>{stats.stdDev}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">High-Severity Incidents</h3>
            <p>{stats.highSeverityCount}</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">7-Day Moving Average Trend</h3>
          <p>Last value: {stats.movingAverage[stats.movingAverage.length - 1].average.toFixed(2)}</p>
        </div>
      </CardContent>
    </Card>
    <Card className="w-full min-h-fit">
      <CardHeader>
        <CardTitle>Safety Statistics Summary</CardTitle>
      </CardHeader>
      <CardContent>
        TODO AI insights
      </CardContent>
    </Card>
    </div>
    
  );
}
