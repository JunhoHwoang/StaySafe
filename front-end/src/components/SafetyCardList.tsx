import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

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
const CardItem: React.FC<CardData> = ({
  title,
  description,
  content,
  score,
}) => (
  <Card className="m-4 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
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
    <div className="flex flex-col pt-4 w-full">
      {cards.map((card) => (
        <Link key={card.id} to={`/${card.id}`} className="no-underline">
          <CardItem {...card} />
        </Link>
      ))}
    </div>
  );
};
