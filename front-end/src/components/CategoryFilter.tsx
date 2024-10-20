import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label";
import React from "react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategories: string[];
  onChange: (categories: string[]) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategories, onChange }) => {
  const handleCategoryChange = (category: string, checked: boolean) => {
    const updatedCategories = checked
      ? [...selectedCategories, category]
      : selectedCategories.filter(c => c !== category);
    onChange(updatedCategories);
  };

  return (
    <div className="flex flex-col space-y-2">
      <Label>Category</Label>
      {categories.map((category) => (
        <div key={category} className="flex items-center space-x-2">
          <Checkbox
            id={category}
            checked={selectedCategories.includes(category)}
            onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
            className="cursor-pointer" // Add this line
          />
          <label
            htmlFor={category}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer" // Add cursor-pointer here
          >
            {category}
          </label>
        </div>
      ))}
    </div>
  );
};