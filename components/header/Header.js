"use client";

import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

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

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="w-full">
      {/* Top header with dark background */}
      <div className="bg-[#333333] text-white border-b border-[#D9D9D9]">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo and brand name */}
          <div>
            <Link href={"/"} className="flex items-center">
              <Image
                src="/images/brand-logo.png"
                width={0}
                height={0}
                alt={"brand"}
                sizes={"100vw"}
                priority
                className={"w-[65px] h-[65px]"}
              />
              <h1 className="ml-2 text-xl md:text-2xl font-semibold">
                Omni HealthCare
              </h1>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white">
                  For Patients <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Patient Information</DropdownMenuItem>
                <DropdownMenuItem>Insurance</DropdownMenuItem>
                <DropdownMenuItem>Patient Portal</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href={"/book-appointment"}>
              <Button className="py-5 text-blue-500 bg-white hover:bg-blue-500 border border-blue-500 hover:text-white">
                Make Appointment
              </Button>
            </Link>

            <Button
              variant="outline"
              className="py-5 text-blue-500 bg-white hover:bg-blue-500 border border-blue-500 hover:text-white"
            >
              EN | বা
            </Button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b">
                    <div className="flex items-center justify-between">
                      <Link href={"/"} className="flex items-center">
                        <Image
                          src="/images/brand-logo.png"
                          width={0}
                          height={0}
                          alt={"brand"}
                          sizes={"100vw"}
                          priority
                          className={"w-[65px] h-[65px]"}
                        />
                        <h1 className="ml-2 text-xl md:text-2xl font-semibold">
                          Omni HealthCare
                        </h1>
                      </Link>
                    </div>
                  </div>

                  <div className="flex-1 overflow-auto py-2">
                    <div className="px-4 py-2">
                      <h3 className="mb-2 text-lg font-semibold">
                        For Patients
                      </h3>
                      <div className="space-y-1">
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          Patient Information
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          Insurance
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          Patient Portal
                        </Button>
                      </div>
                    </div>

                    <div className="px-4 py-2 border-t">
                      <h3 className="mb-2 text-lg font-semibold">
                        Specialties
                      </h3>
                      <Accordion type="single" collapsible className="w-full">
                        {specialties.map((specialty, index) => (
                          <AccordionItem
                            key={specialty}
                            value={`specialty-${index}`}
                          >
                            <AccordionTrigger className="py-2">
                              {specialty}
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="pl-4 space-y-1">
                                <Button
                                  variant="ghost"
                                  className="w-full justify-start"
                                >
                                  Overview
                                </Button>
                                <Button
                                  variant="ghost"
                                  className="w-full justify-start"
                                >
                                  Treatments
                                </Button>
                                <Button
                                  variant="ghost"
                                  className="w-full justify-start"
                                >
                                  Doctors
                                </Button>
                                <Button
                                  variant="ghost"
                                  className="w-full justify-start"
                                >
                                  FAQs
                                </Button>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </div>

                  <div className="p-4 border-t mt-auto">
                    <div className="grid gap-2">
                      <Link href={"/book-appointment"}>
                        <Button className="w-full bg-blue-500 hover:bg-blue-600">
                          Make Appointment
                        </Button>
                      </Link>
                      <Button variant="outline" className="w-full">
                        EN | বা
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Specialties navigation - desktop only */}
      <nav className="bg-white border-b shadow-sm hidden md:block">
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
                        "text-gray-700 hover:text-blue-600",
                        activeDropdown === specialty && "text-blue-600"
                      )}
                    >
                      {specialty} <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {/* <Link href={"/doctors-profile"}>
                      <DropdownMenuItem>Doctors Profile</DropdownMenuItem>
                    </Link>
                    <Link href={"/service"}>
                      <DropdownMenuItem>Service</DropdownMenuItem>
                    </Link> */}
                    <Link href={"/search-doctors"}>
                      <DropdownMenuItem>Search Doctors</DropdownMenuItem>
                    </Link>
                    <Link href={"/book-appointment"}>
                      <DropdownMenuItem>Book Appointment</DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
