import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
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

export const FilterSort = () => {
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
            <DatePicker />
            <ScoreFilter />
            <CategoryFilter />
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

      <Select>
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
