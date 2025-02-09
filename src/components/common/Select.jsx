import { For, Stack, createListCollection } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText
} from "@/components/ui/select";

const Select = () => {
  return (
    <SelectRoot
      collection={frameworks}
      defaultValue={["day"]}
      width='60px'
      variant='filled'
    >
      <SelectTrigger>
        <SelectValueText placeholder='Select Unit' />
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
