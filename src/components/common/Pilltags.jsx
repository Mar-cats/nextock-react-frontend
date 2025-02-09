import { Flex, Tag } from "@chakra-ui/react";

const Tags = ({ tags, onClose, ...props }) => {
  return (
    <Flex gap='10px' wrap='wrap'>
      {tags.map((tag, index) => (
        <Tag.Root
          key={index}
          variant={"outline"}
          p={"6px 12px"}
          borderRadius={"full"}
          {...props}
        >
          <Tag.Label width={"max-content"} fontSize={"12px"}>
            {tag}
          </Tag.Label>
          {onClose && (
            <Tag.EndElement>
              <Tag.CloseTrigger />
            </Tag.EndElement>
          )}
        </Tag.Root>
      ))}
    </Flex>
  );
};

export default Tags;
