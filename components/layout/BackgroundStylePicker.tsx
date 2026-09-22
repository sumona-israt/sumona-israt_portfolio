"use client";

import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BACKGROUND_STYLES,
  useBackgroundStyle,
  type BackgroundStyle,
} from "@/components/providers/background-style-provider";

export function BackgroundStylePicker() {
  const { style, setStyle } = useBackgroundStyle();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Change background animation">
          <Sparkles className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={style} onValueChange={(value) => setStyle(value as BackgroundStyle)}>
          {BACKGROUND_STYLES.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
