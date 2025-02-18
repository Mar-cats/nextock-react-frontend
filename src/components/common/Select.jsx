import { createListCollection } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText
} from "@/components/ui/select";

const Select = ({ value, setValue }) => {
  return (
    <SelectRoot
      collection={frameworks}
      defaultValue={["day"]}
      width="60px"
      variant="filled"
      value={value}
      onValueChange={(e) => setValue(e.value)}
      color="var(--color-gray-900)"
    >
      <SelectTrigger>
        <SelectValueText placeholder="Select Unit" />
      </SelectTrigger>
      <SelectContent>
        {frameworks.items.map((unit) => (
          <SelectItem item={unit} key={unit.value}>
            {unit.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
};

const frameworks = createListCollection({
  items: [
    { label: "일", value: "day" },
    { label: "주", value: "week" },
    { label: "월", value: "month" },
    { label: "년", value: "year" }
  ]
});

export default Select;
