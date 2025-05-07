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
      { label: "Piles Treatment", href: "/service/212" },
      { label: "Fistula Treatment", href: "/service/213" },
      { label: "Fissure Treatment", href: "/service/215" },
      {
        label: "Pilonidal Sinus Treatment",
        href: "/service/264",
      },
      { label: "Rectal Prolapse", href: "/service/342" },
    ],
  },
  {
    name: "Laparoscopy",

    submenu: [
      { label: "Hernia Surgery", href: "/service/74" },
      { label: "Gallstones Treatment", href: "/service/114" },
      {
        label: "Inguinal Hernia Treatment",
        href: "/service/297",
      },
      {
        label: "Umbilical Hernia Treatment",
        href: "/service/299",
      },
    ],
  },
  {
    name: "Gynaecology",

    submenu: [
      {
        label: "Uterus Removal",
        href: "/service/277",
      },

      ,
      { label: " Ovarian Cyst", href: "/service/340" },
    ],
  },

  {
    name: "Urology",

    submenu: [
      { label: "Circumcision", href: "/service/226" },
      {
        label: "Kidney Stones Treatment",
        href: "/service/219",
      },
      {
        label: "Hydrocele",
        href: "/service/317",
      },
      { label: "Balanitis", href: "/service/343" },
      { label: "Paraphimosis", href: "/service/226" },
    ],
  },
  {
    name: "Vascular",

    submenu: [
      {
        label: "Varicose Veins Treatment",
        href: "/service/254",
      },
      { label: "Varicocele Treatment", href: "/service/260" },
    ],
  },
  {
    name: "Aesthetics",

    submenu: [
      {
        label: "Gynecomastia",
        href: "/service/243",
      },
      { label: "Liposuction", href: "/service/245" },
      {
        label: "Breast Augmentation Surgery",
        href: "/service/281",
      },
    ],
  },
  {
    name: "Orthopedics",

    submenu: [
      { label: "Knee Replacement", href: "/service/266" },
      { label: "ACL Tear Treatment", href: "/service/249" },
      {
        label: "Hip Replacement Surgery",
        href: "/service/273",
      },
      { label: "Spine Surgery", href: "/service/382" },
    ],
  },
  {
    name: "Ophthalmology",

    submenu: [
      { label: "Lasik Eye Surgery", href: "/service/224" },
      { label: "Cataract Surgery", href: "/service/221" },
      {
        label: "Glaucoma Treatment",
        href: "/proctology/347",
      },
      { label: "Squint Surgery", href: "/service/349" },
      { label: "ICL surgery", href: "/service/350" },
      { label: "Contoura Vision", href: "/service/351" },
      { label: "Phaco Surgery", href: "/service/352" },
    ],
  },

  {
    name: "Weight Loss",

    submenu: [{ label: "Gastric Balloon", href: "/service/353" }],
  },
];
const patientMenuItems = [
  { label: "Search Doctors", href: "/search-doctors" },
  { label: "Booking Policy", href: "/book-appointment" },
  { label: "Insurance", href: "/" },
  { label: "Patient Portal", href: "/" },
];
export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="w-full sticky top-0 z-50 bg-white ">
      <div className=" bg-[#333333] text-white border-b border-[#D9D9D9]">
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
                {patientMenuItems.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <DropdownMenuItem>{item.label}</DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/book-appointment">
              <Button className="py-5 text-blue-500 bg-white hover:bg-blue-500 border border-blue-500 hover:text-white">
                Make Appointment
              </Button>
            </Link>

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
                      <Link href="tel:+880 1781445825">
                        <Button className="w-full bg-blue-500 hover:bg-blue-600">
                          Call Us
                        </Button>
                      </Link>
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
