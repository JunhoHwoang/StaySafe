import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label";

export const CategoryFilter = () => {
  return (
    <div className="flex flex-col space-y-2">
      <Label htmlFor="terms">
        Category
      </Label>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          TODO
        </label>
      </div>
    </div>
  );
};