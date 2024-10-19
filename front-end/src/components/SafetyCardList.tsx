import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Badge } from "@/components/ui/badge"


// Define the interface for our card data
interface CardData {
  id: number;
  title: string;
  description: string;
  content: string;
  score: number;
}

// Props for the CardList component
interface CardListProps {
  cards: CardData[];
}

// Individual Card component
const CardItem: React.FC<CardData> = ({ title, description, content, score }) => (
  <Card className="w-[350px] m-4">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <p>{content}</p>
    </CardContent>
    <CardFooter>
      <Badge>Score: {score}</Badge>
    </CardFooter>
  </Card>
);

// CardList component
export const SafetyCardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div className="flex-col justify-center items-center">
      {cards.map((card) => (
        <CardItem key={card.id} {...card} />
      ))}
    </div>
  );
};