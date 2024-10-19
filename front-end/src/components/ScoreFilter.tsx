import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const ScoreFilter = () => {
  return (
    <div className="flex flex-col space-y-2">
      <Label>Score Range</Label>
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">0-20</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">20-40</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-three" id="option-three" />
          <Label htmlFor="option-three">40-60</Label>
        </div>
        
      </RadioGroup>
    </div>
  );
};
