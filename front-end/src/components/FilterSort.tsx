import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "./DatePicker";
import { ScoreFilter } from "./ScoreFilter";
import { CategoryFilter } from "./CategoryFilter";

export const FilterSort = ({ items, onFilterSort }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedScore, setSelectedScore] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  // Handle date change from DatePicker
  const handleDateChange = (date) => {
    setSelectedDate(date);
    applyFilterSort();
  };

  // Handle score change from ScoreFilter
  const handleScoreChange = (score) => {
    setSelectedScore(score);
    applyFilterSort();
  };

  // Handle category change from CategoryFilter
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    applyFilterSort();
  };

  // Handle sort change
  const handleSortChange = (value) => {
    setSortOrder(value);
    applyFilterSort();
  };

  // Function to filter and sort items
  const applyFilterSort = () => {
    let filteredItems = [...items];

    // Apply filters
    if (selectedDate) {
      filteredItems = filteredItems.filter((item) => {
        // Assuming each item has a date field
        return (
          new Date(item.datetime).toDateString() ===
          new Date(selectedDate).toDateString()
        );
      });
    }

    if (selectedScore) {
      filteredItems = filteredItems.filter((item) => {
        // Assuming each item has a score field and selectedScore is a range (e.g., [min, max])
        return item.score >= selectedScore[0] && item.score <= selectedScore[1];
      });
    }

    if (selectedCategory) {
      filteredItems = filteredItems.filter((item) => {
        // Assuming each item has a category field
        return item.category === selectedCategory;
      });
    }

    // Apply sorting
    if (sortOrder) {
      filteredItems.sort((a, b) => {
        switch (sortOrder) {
          case "low":
            return b.score - a.score; // High to Low
          case "high":
            return a.score - b.score; // Low to High
          case "newest":
            console.log(a.datetime);
            return new Date(a.datetime) - new Date(b.datetime); // Oldest first
          case "oldest":
            return new Date(b.datetime) - new Date(a.datetime); // Newest first
          case "lex":
            return a.title.localeCompare(b.title); // A-Z by title
          default:
            return 0;
        }
      });
    }

    // Call the callback function with the filtered and sorted items
    onFilterSort(filteredItems);
  };

  return (
    <div className="flex flex-row items-center space-x-4 mb-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Filter</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Filter</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <DatePicker onChange={handleDateChange} />
            <ScoreFilter onChange={handleScoreChange} />
            <CategoryFilter onChange={handleCategoryChange} />
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Select onValueChange={handleSortChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="high">Score High to Low</SelectItem>
          <SelectItem value="low">Score Low to High</SelectItem>
          <SelectItem value="oldest">Oldest</SelectItem>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="lex">A-Z</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
