import { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

export const FilterSort = ({ items = [], onFilterSort = () => {} }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedScore, setSelectedScore] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOrder, setSortOrder] = useState("high");

  // Handle date change from DatePicker
  const handleDateChange = (date = null) => {
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
    console.log("Sort value selected:", value);
    setSortOrder(value);
  };

  // Use useEffect to trigger sorting whenever sortOrder changes
  useEffect(() => {
    if (sortOrder) {
      applyFilterSort();
    }
  }, [sortOrder, selectedDate, selectedScore, selectedCategory]);

  // Function to filter and sort items
  const applyFilterSort = () => {
    let filteredItems = [...items];
    console.log("Original Items:", items);
    console.log("Current Filters - Date:", selectedDate, "Score:", selectedScore, "Category:", selectedCategory, "Sort Order:", sortOrder);

    // Apply filters
    if (selectedDate) {
      filteredItems = filteredItems.filter((item) => {
        return new Date(item.datetime).toDateString() === new Date(selectedDate).toDateString();
      });
    }

    if (selectedScore) {
      filteredItems = filteredItems.filter((item) => {
        return item.score >= selectedScore[0] && item.score <= selectedScore[1];
      });
    }

    if (selectedCategory) {
      filteredItems = filteredItems.filter((item) => {
        return item.category === selectedCategory;
      });
    }

    // Apply sorting with a fresh copy of the filtered items
    if (sortOrder) {
      filteredItems = filteredItems.slice().sort((a, b) => {
        switch (sortOrder) {
          case "high":
            return b.score - a.score; // Score High to Low
          case "low":
            return a.score - b.score; // Score Low to High
          case "newest":
            return new Date(b.datetime) - new Date(a.datetime); // Newest first
          case "oldest":
            return new Date(a.datetime) - new Date(b.datetime); // Oldest first
          case "lex":
            return a.title.localeCompare(b.title); // A-Z by title
          default:
            return 0;
        }
      });
    }

    console.log("Filtered and Sorted Items:", filteredItems);
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
