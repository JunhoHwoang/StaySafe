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
import { Input } from "@/components/ui/input";
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

export const Sidebar = () => {
  return (
    <div className="flex flex-row items-center space-x-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Filter</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Filter</DialogTitle>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <DatePicker />
              <ScoreFilter />
            </div>
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
          <SelectItem value="light">Score High to Low</SelectItem>
          <SelectItem value="dark">Score Low to High</SelectItem>
          <SelectItem value="system">Oldest</SelectItem>
          <SelectItem value="system">Newest</SelectItem>
          <SelectItem value="system">A-Z</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
