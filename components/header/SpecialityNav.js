"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
const specialties = [
  "Proctology",
  "Laparoscopy",
  "Gynaecology",
  "Urology",
  "Vascular",
  "Aesthetics",
  "Orthopedics",
  "Opthalmology",
  "Weight Loss",
];

export default function SpecialtyNav() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 overflow-x-auto">
        <ul className="flex space-x-2 py-2">
          {specialties.map((specialty) => (
            <li key={specialty} className="whitespace-nowrap">
              <DropdownMenu
                onOpenChange={(open) => {
                  if (open) setActiveDropdown(specialty);
                  else if (activeDropdown === specialty)
                    setActiveDropdown(null);
                }}
              >
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "text-gray-700 hover:text-blue-600 focus-visible:ring-0",
                      activeDropdown === specialty && "text-blue-600"
                    )}
                  >
                    {specialty} <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Overview</DropdownMenuItem>
                  <DropdownMenuItem>Treatments</DropdownMenuItem>
                  <DropdownMenuItem>Doctors</DropdownMenuItem>
                  <DropdownMenuItem>FAQs</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
