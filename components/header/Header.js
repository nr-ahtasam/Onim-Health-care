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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GoogleTranslateButton from "../shared/GoogleTranslateButton";
import { getNavMenu } from "@/lib/graphql";
import { useQuery } from "@apollo/client";

const patientMenuItems = [
  { label: "Search Doctors", href: "/search-doctors" },
  { label: "Booking Policy", href: "/book-appointment" },
  { label: "Insurance", href: "/" },
  { label: "Patient Portal", href: "/patient-portal" },
];
export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const {data,loading,error} = useQuery(getNavMenu);
  const navItems = data?.serviceCategories?.nodes.map((category) => {
    if(!category.description)  return;

    return {
      name: category.name,
      submenu: category.services.nodes.map((service) => ({
        label: service.title,
        href: `/service/${service.slug}`,
      })),
    }
  }).filter(item => item !== undefined);

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

            <Link href="tel:+880 1711997402">
              <Button className="py-5 text-white bg-[#FF937B]  flex items-center gap-2 duration-300">
                <Phone className="h-4 w-4" />
                Call Us
              </Button>
            </Link>
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
                        <SheetClose asChild>
                          <Link href="/patient-portal">
                            <Button
                              variant="ghost"
                              className="w-full justify-start"
                            >
                              Patient Information
                            </Button>
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link href="/insurance-partners">
                            <Button
                              variant="ghost"
                              className="w-full justify-start"
                            >
                              Insurance
                            </Button>
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link href="/patient-portal">
                            <Button
                              variant="ghost"
                              className="w-full justify-start"
                            >
                              Patient Portal
                            </Button>
                          </Link>
                        </SheetClose>
                      </div>
                    </div>

                    <div className="px-4 py-2 border-t">
                      <h3 className="mb-2 text-lg font-semibold">
                        Specialties
                      </h3>
                      <Accordion type="single" collapsible className="w-full">
                        {navItems?.map((specialty, index) => (
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
                                  <SheetClose key={i} asChild>
                                    <Link href={item.href}>
                                      <Button
                                        variant="ghost"
                                        className="w-full justify-start"
                                      >
                                        {item.label}
                                      </Button>
                                    </Link>
                                  </SheetClose>
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
                      <Link href="tel:+880 1711997402">
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
            {navItems?.map((specialty) => (
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
                        "text-gray-700 hover:text-blue-600 text-[15px]",
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
