"use client";

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
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GoogleTranslateButton from "../shared/GoogleTranslateButton";

const specialties = [
  {
    name: "Proctology",

    submenu: [
      { label: "Piles Treatment", href: "/proctology/piles-treatment" },
      { label: "Fistula Treatment", href: "/proctology/fistula-treatment" },
      { label: "Fissure Treatment", href: "/proctology/fissure-treatment" },
      {
        label: "Pilonidal Sinus Treatment",
        href: "/proctology/pilonidal-sinus-treatment",
      },
      { label: "Rectal Prolapse", href: "/proctology/rectal-prolapse" },
    ],
  },
  {
    name: "Laparoscopy",

    submenu: [
      { label: "Hernia Surgery", href: "/proctology/piles-treatment" },
      { label: "Gallstones Treatment", href: "/proctology/fistula-treatment" },
      {
        label: "Inguinal Hernia Treatment",
        href: "/proctology/pilonidal-sinus-treatment",
      },
      {
        label: "Umbilical Hernia Treatment",
        href: "/proctology/rectal-prolapse",
      },
    ],
  },
  {
    name: "Gynaecology",

    submenu: [
      {
        label: "Uterus Removal",
        href: "/proctology/fissure-treatment",
      },

      ,
      { label: " Ovarian Cyst", href: "/proctology/rectal-prolapse" },
    ],
  },

  {
    name: "Urology",

    submenu: [
      { label: "Circumcision", href: "/proctology/piles-treatment" },
      {
        label: "Kidney Stones Treatment",
        href: "/proctology/fissure-treatment",
      },
      {
        label: "Hydrocele",
        href: "/proctology/pilonidal-sinus-treatment",
      },
      { label: "Balanitis", href: "/proctology/rectal-prolapse" },
      { label: "Paraphimosis", href: "/proctology/rectal-prolapse" },
      { label: "Phimosis", href: "/proctology/rectal-prolapse" },
    ],
  },
  {
    name: "Vascular",

    submenu: [
      {
        label: "Varicose Veins Treatment",
        href: "/proctology/rectal-prolapse",
      },
      { label: "Varicocele Treatment", href: "/proctology/rectal-prolapse" },
    ],
  },
  {
    name: "Aesthetics",

    submenu: [
      {
        label: "Gynecomastia",
        href: "/proctology/rectal-prolapse",
      },
      { label: "Liposuction", href: "/proctology/rectal-prolapse" },
      {
        label: "Breast Augmentation Surgery",
        href: "/proctology/rectal-prolapse",
      },
      { label: "Tummy Tuck", href: "/proctology/rectal-prolapse" },
      { label: " Buccal Fat", href: "/proctology/rectal-prolapse" },
    ],
  },
  {
    name: "Orthopedics",

    submenu: [
      { label: "Knee Replacement", href: "/proctology/rectal-prolapse" },
      { label: "ACL Tear Treatment", href: "/proctology/rectal-prolapse" },
      {
        label: "Hip Replacement Surgery",
        href: "/proctology/rectal-prolapse",
      },
      { label: "Spine Surgery", href: "/proctology/rectal-prolapse" },
    ],
  },
  {
    name: "Ophthalmology",

    submenu: [
      { label: "Lasik Eye Surgery", href: "/proctology/rectal-prolapse" },
      { label: "Cataract Surgery", href: "/proctology/rectal-prolapse" },
      {
        label: "Glaucoma Treatment",
        href: "/proctology/rectal-prolapse",
      },
      { label: "Squint Surgery", href: "/proctology/rectal-prolapse" },
      { label: "ICL surgery", href: "/proctology/rectal-prolapse" },
      { label: "Contoura Vision", href: "/proctology/rectal-prolapse" },
      { label: "Phaco Surgery", href: "/proctology/rectal-prolapse" },
    ],
  },

  {
    name: "Weight Loss",

    submenu: [{ label: "Phaco Surgery", href: "/proctology/rectal-prolapse" }],
  },
];

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="w-full">
      <div className="sticky top-0 z-50 bg-[#333333] text-white border-b border-[#D9D9D9]">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/brand-logo.png"
              width={65}
              height={65}
              alt="brand"
              priority
            />
            <h1 className="ml-2 text-xl md:text-2xl font-semibold">
              Omni HealthCare
            </h1>
          </Link>

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

            <Link href="/book-appointment">
              <Button className="py-5 text-blue-500 bg-white hover:bg-blue-500 border border-blue-500 hover:text-white">
                Make Appointment
              </Button>
            </Link>

            {/* <Button
              variant="outline"
              className="py-5 text-blue-500 bg-white hover:bg-blue-500 border border-blue-500 hover:text-white"
            >
              EN | বা
            </Button> */}
            <GoogleTranslateButton />
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b">
                    <Link href="/" className="flex items-center">
                      <Image
                        src="/images/brand-logo.png"
                        width={65}
                        height={65}
                        alt="brand"
                        priority
                      />
                      <h1 className="ml-2 text-xl md:text-2xl font-semibold">
                        Omni HealthCare
                      </h1>
                    </Link>
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
                            key={specialty.name}
                            value={`specialty-${index}`}
                          >
                            <AccordionTrigger className="py-2">
                              {specialty.name}
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="pl-4 space-y-1">
                                {specialty.submenu?.map((item, i) => (
                                  <Link key={i} href={item.href}>
                                    <Button
                                      variant="ghost"
                                      className="w-full justify-start"
                                    >
                                      {item.label}
                                    </Button>
                                  </Link>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </div>

                  <div className="p-4 border-t mt-auto">
                    <div className="grid gap-2">
                      <Link href="/book-appointment">
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

      <nav className="sticky top-[65px] z-40 bg-white border-b shadow-sm hidden md:block">
        <div className="container mx-auto px-4 overflow-x-auto">
          <ul className="flex space-x-2 py-2">
            {specialties.map((specialty) => (
              <li key={specialty.name} className="whitespace-nowrap">
                <DropdownMenu
                  onOpenChange={(open) => {
                    if (open) setActiveDropdown(specialty.name);
                    else if (activeDropdown === specialty.name)
                      setActiveDropdown(null);
                  }}
                >
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "text-gray-700 hover:text-blue-600",
                        activeDropdown === specialty.name && "text-blue-600"
                      )}
                    >
                      {specialty.name} <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  {specialty.submenu && (
                    <DropdownMenuContent>
                      {specialty.submenu.map((item, i) => (
                        <Link key={i} href={item.href}>
                          <DropdownMenuItem>{item.label}</DropdownMenuItem>
                        </Link>
                      ))}
                    </DropdownMenuContent>
                  )}
                </DropdownMenu>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
