
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Check, Palette } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ColorOption = 
  | "slate" | "gray" | "zinc" | "neutral" | "stone" 
  | "red" | "orange" | "amber" | "yellow" | "lime" 
  | "green" | "emerald" | "teal" | "cyan" | "sky" 
  | "blue" | "indigo" | "violet" | "purple" | "fuchsia" 
  | "pink" | "rose";

export function ThemeSelector({ asIcon = false }: { asIcon?: boolean }) {
  const { color, setColor } = useTheme();
  const { t } = useTranslation();

  const colors: { value: ColorOption; label: string; className: string }[] = [
    { value: "slate", label: "Slate", className: "bg-slate-500" },
    { value: "gray", label: "Gray", className: "bg-gray-500" },
    { value: "zinc", label: "Zinc", className: "bg-zinc-500" },
    { value: "neutral", label: "Neutral", className: "bg-neutral-500" },
    { value: "stone", label: "Stone", className: "bg-stone-500" },
    { value: "red", label: "Red", className: "bg-red-500" },
    { value: "orange", label: "Orange", className: "bg-orange-500" },
    { value: "amber", label: "Amber", className: "bg-amber-500" },
    { value: "yellow", label: "Yellow", className: "bg-yellow-500" },
    { value: "lime", label: "Lime", className: "bg-lime-500" },
    { value: "green", label: "Green", className: "bg-green-500" },
    { value: "emerald", label: "Emerald", className: "bg-emerald-500" },
    { value: "teal", label: "Teal", className: "bg-teal-500" },
    { value: "cyan", label: "Cyan", className: "bg-cyan-500" },
    { value: "sky", label: "Sky", className: "bg-sky-500" },
    { value: "blue", label: "Blue", className: "bg-blue-500" },
    { value: "indigo", label: "Indigo", className: "bg-indigo-500" },
    { value: "violet", label: "Violet", className: "bg-violet-500" },
    { value: "purple", label: "Purple", className: "bg-purple-500" },
    { value: "fuchsia", label: "Fuchsia", className: "bg-fuchsia-500" },
    { value: "pink", label: "Pink", className: "bg-pink-500" },
    { value: "rose", label: "Rose", className: "bg-rose-500" }
  ];

  if (asIcon) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
            <Palette className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <div className="grid grid-cols-5 gap-1 p-2">
            {colors.map((colorOption) => (
              <div
                key={colorOption.value}
                className={`flex h-8 w-8 items-center justify-center rounded-full cursor-pointer ${color === colorOption.value ? "ring-2 ring-primary" : ""}`}
                onClick={() => setColor(colorOption.value)}
                title={colorOption.label}
              >
                <div 
                  className={`flex h-6 w-6 items-center justify-center rounded-full ${colorOption.className}`}
                >
                  {color === colorOption.value && <Check className="h-3 w-3 text-white" />}
                </div>
                <span className="sr-only">{colorOption.label}</span>
              </div>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-1 p-1 w-full">
      {colors.map((colorOption) => (
        <div
          key={colorOption.value}
          className={`flex h-8 w-full items-center justify-center rounded-md p-1 cursor-pointer ${color === colorOption.value ? "ring-2 ring-primary" : ""}`}
          onClick={() => setColor(colorOption.value)}
        >
          <div 
            className={`flex h-6 w-6 items-center justify-center rounded-md ${colorOption.className}`}
          >
            {color === colorOption.value && <Check className="h-4 w-4 text-white" />}
          </div>
          <span className="sr-only">{colorOption.label}</span>
        </div>
      ))}
    </div>
  );
}
