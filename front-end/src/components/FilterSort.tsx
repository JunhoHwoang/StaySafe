import { useEffect, useMemo, useState } from "react";
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

export const FilterSort = ({ items = [], onFilterSort = {} }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedScore, setSelectedScore] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("high");
  const categories = useMemo(() => 
    Array.from(new Set(items.map(item => item.category))),
    [items]
  );

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
  }, [sortOrder, selectedDate, selectedScore, selectedCategories]);

  // Function to filter and sort items
  const applyFilterSort = () => {
    let filteredItems = [...items];

    // Apply filters
    if (selectedDate) {
      filteredItems = filteredItems.filter((item) => {
        return (
          new Date(item.date).toDateString() ===
          new Date(selectedDate).toDateString()
        );
      });
    }

    if (selectedScore) {
      filteredItems = filteredItems.filter((item) => {
        return (
          item.severityScore >= selectedScore[0] &&
          item.severityScore <= selectedScore[1]
        );
      });
    }

    if (selectedCategories.length > 0) {
      filteredItems = filteredItems.filter((item) => 
        selectedCategories.includes(item.category)
      );
    }

    // Apply sorting with a fresh copy of the filtered items
    if (sortOrder) {
      filteredItems = filteredItems.slice().sort((a, b) => {
        switch (sortOrder) {
          case "high":
            return b.severityScore - a.severityScore; // Score High to Low
          case "low":
            return a.severityScore - b.severityScore; // Score Low to High
          case "newest":
            return new Date(b.date) - new Date(a.date); // Newest first
          case "oldest":
            return new Date(a.date) - new Date(b.date); // Oldest first
          case "lex":
            return a.overview.localeCompare(b.overview); // A-Z by title
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
            <CategoryFilter onChange={handleCategoryChange} categories={categories} selectedCategories={selectedCategories} />          </div>
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
