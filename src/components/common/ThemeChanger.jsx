import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { AiFillMoon } from "react-icons/ai";
import { IoSunny } from "react-icons/io5";

export default function () {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        color={"var(--color-gray-900)"}
        aria-label="Toggle Theme"
      >
        {colorMode === "light" ? <IoSunny /> : <AiFillMoon />}
      </IconButton>
    </ClientOnly>
  );
}
