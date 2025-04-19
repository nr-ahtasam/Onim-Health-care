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
      { label: "Appendicitis", href: "/proctology/fissure-treatment" },
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
      { label: "Surgical Abortion", href: "/proctology/piles-treatment" },
      { label: "MTP", href: "/proctology/fistula-treatment" },
      {
        label: "Ectopic Pregnancy Treatment",
        href: "/proctology/fissure-treatment",
      },
      {
        label: "Molar Pregnancy Treatment",
        href: "/proctology/pilonidal-sinus-treatment",
      },
      { label: "Ovarian Cyst", href: "/proctology/rectal-prolapse" },
      { label: "Miscarriage Treatment", href: "/proctology/rectal-prolapse" },
      { label: "Endometriosis Treatment", href: "/proctology/rectal-prolapse" },
      { label: "Adenomyosis Treatment", href: "/proctology/rectal-prolapse" },
      { label: "PCOS-PCOD Treatment", href: "/proctology/rectal-prolapse" },
      {
        label: "Laser Vaginal Tightening",
        href: "/proctology/rectal-prolapse",
      },
      { label: "Hymenoplasty", href: "/proctology/rectal-prolapse" },
      { label: "Vaginoplasty", href: "/proctology/rectal-prolapse" },
      { label: "Labiaplasty", href: "/proctology/rectal-prolapse" },
      { label: "Vaginal Wart Removal", href: "/proctology/rectal-prolapse" },
    ],
  },
  {
    name: "ENT",

    submenu: [
      { label: "Tympanoplasty", href: "/proctology/piles-treatment" },
      { label: "Adenoidectomy", href: "/proctology/fistula-treatment" },
      { label: "Sinus Treatment", href: "/proctology/fissure-treatment" },
      {
        label: "Septoplasty",
        href: "/proctology/pilonidal-sinus-treatment",
      },
      { label: "FESS Surgery", href: "/proctology/rectal-prolapse" },
      { label: "Thyroidectomy", href: "/proctology/rectal-prolapse" },
      { label: "Tonsillectomy", href: "/proctology/rectal-prolapse" },
      { label: "Stapedectomy", href: "/proctology/rectal-prolapse" },
      { label: "Myringotomy", href: "/proctology/rectal-prolapse" },
      { label: "Throat Surgery", href: "/proctology/rectal-prolapse" },
      { label: "Ear Surgery", href: "/proctology/rectal-prolapse" },
      { label: "Vocal Cord Polyps", href: "/proctology/rectal-prolapse" },
      { label: "Nasal Polyps", href: "/proctology/rectal-prolapse" },
      { label: "Turbinate Reduction", href: "/proctology/rectal-prolapse" },
    ],
  },
  {
    name: "Urology",

    submenu: [
      { label: "Circumcision", href: "/proctology/piles-treatment" },
      { label: "Stapler Circumcision", href: "/proctology/fistula-treatment" },
      {
        label: "Kidney Stones Treatment",
        href: "/proctology/fissure-treatment",
      },
      {
        label: "Hydrocele",
        href: "/proctology/pilonidal-sinus-treatment",
      },
      { label: "ESWL", href: "/proctology/rectal-prolapse" },
      { label: "RIRS", href: "/proctology/rectal-prolapse" },
      { label: "PCNL", href: "/proctology/rectal-prolapse" },
      { label: "URSL", href: "/proctology/rectal-prolapse" },
      { label: "Enlarged Prostate", href: "/proctology/rectal-prolapse" },
      { label: "Frenuloplasty Surgery", href: "/proctology/rectal-prolapse" },
      { label: "Balanitis", href: "/proctology/rectal-prolapse" },
      { label: "Balanoposthitis", href: "/proctology/rectal-prolapse" },
      { label: "Paraphimosis", href: "/proctology/rectal-prolapse" },
      { label: "Foreskin Infection", href: "/proctology/rectal-prolapse" },
      { label: "Prostatectomy", href: "/proctology/rectal-prolapse" },
      { label: "Tight Foreskin", href: "/proctology/rectal-prolapse" },
      { label: "Phimosis", href: "/proctology/rectal-prolapse" },
      { label: "Toenail Removal", href: "/proctology/rectal-prolapse" },
      { label: "Epididymal cyst", href: "/proctology/rectal-prolapse" },
      { label: "Testicular Torsion", href: "/proctology/rectal-prolapse" },
      { label: "Vasectomy", href: "/proctology/rectal-prolapse" },
      { label: "Corn Removal", href: "/proctology/rectal-prolapse" },
      { label: "Swollen Penis", href: "/proctology/rectal-prolapse" },
      { label: "ESWL", href: "/proctology/rectal-prolapse" },
      { label: "ESWL", href: "/proctology/rectal-prolapse" },
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
      { label: "DVT Treatment", href: "/proctology/rectal-prolapse" },
      {
        label: "Diabetic Foot Ulcer Treatment",
        href: "/proctology/rectal-prolapse",
      },
      { label: "Uterine Fibroids", href: "/proctology/rectal-prolapse" },
      { label: "AV Fistula", href: "/proctology/rectal-prolapse" },
    ],
  },
  {
    name: "Aesthetics",

    submenu: [
      { label: "Gynecomastia", href: "/proctology/rectal-prolapse" },
      { label: "Cleft Lip", href: "/proctology/rectal-prolapse" },
      { label: "Beard Transplant", href: "/proctology/rectal-prolapse" },
      { label: "Blepharoplasty", href: "/proctology/rectal-prolapse" },
      { label: "Earlobe Repair", href: "/proctology/rectal-prolapse" },
      { label: "Buccal Fat", href: "/proctology/rectal-prolapse" },
      { label: "Double Chin", href: "/proctology/rectal-prolapse" },
      { label: "Scar Removal", href: "/proctology/rectal-prolapse" },
      { label: "Breast Reduction", href: "/proctology/rectal-prolapse" },
      { label: "Breast Lump", href: "/proctology/rectal-prolapse" },
      { label: "Tummy Tuck", href: "/proctology/rectal-prolapse" },
      { label: "Axillary Breast", href: "/proctology/rectal-prolapse" },
      {
        label: "Breast Augmentation Surgery",
        href: "/proctology/rectal-prolapse",
      },
      { label: "Rhinoplasty", href: "/proctology/rectal-prolapse" },
      { label: "Sebaceous Cyst Surgery", href: "/proctology/rectal-prolapse" },
      { label: "Breast Lift Surgery", href: "/proctology/rectal-prolapse" },
      { label: "Lipoma Surgery", href: "/proctology/rectal-prolapse" },
      { label: "Liposuction", href: "/proctology/rectal-prolapse" },
    ],
  },
  {
    name: "Dermatology",

    submenu: [
      { label: "Total Knee Replacement", href: "/proctology/rectal-prolapse" },
      { label: "Shoulder Arthroscopy", href: "/proctology/rectal-prolapse" },
      { label: "Knee Arthroscopy", href: "/proctology/rectal-prolapse" },
      { label: "Arthroscopy Surgery", href: "/proctology/rectal-prolapse" },
      { label: "Rotator Cuff Repair", href: "/proctology/rectal-prolapse" },
      { label: "Shoulder Replacement", href: "/proctology/rectal-prolapse" },
      { label: "Shoulder Dislocation", href: "/proctology/rectal-prolapse" },
      { label: "Spine Surgery", href: "/proctology/rectal-prolapse" },
      { label: "Hip Replacement Surgery", href: "/proctology/rectal-prolapse" },
      { label: "Meniscus Tear Treatment", href: "/proctology/rectal-prolapse" },
      { label: "ACL Tear Treatment", href: "/proctology/rectal-prolapse" },
      { label: "Carpal Tunnel Syndrome", href: "/proctology/rectal-prolapse" },
      { label: " Knee Replacement", href: "/proctology/rectal-prolapse" },
    ],
  },

  {
    name: "Weight Loss",

    submenu: [
      { label: "Bariatric Surgery", href: "/proctology/rectal-prolapse" },
      {
        label: "SPATZ intragastric balloon",
        href: "/proctology/rectal-prolapse",
      },
      { label: "Weightloss Surgery", href: "/proctology/rectal-prolapse" },
    ],
  },
  {
    name: "Opthalmology",
    submenu: [
      { label: "ESWL", href: "/proctology/rectal-prolapse" },
      { label: "ESWL", href: "/proctology/rectal-prolapse" },
      { label: "ESWL", href: "/proctology/rectal-prolapse" },
      { label: "ESWL", href: "/proctology/rectal-prolapse" },
      { label: "ESWL", href: "/proctology/rectal-prolapse" },
      { label: "ESWL", href: "/proctology/rectal-prolapse" },
      { label: "ESWL", href: "/proctology/rectal-prolapse" },
      { label: "ESWL", href: "/proctology/rectal-prolapse" },
      { label: "ESWL", href: "/proctology/rectal-prolapse" },
      { label: "ESWL", href: "/proctology/rectal-prolapse" },
    ],
  },
  {
    name: "Our Hospitals",
  },
];

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="w-full">
      <div className="bg-[#333333] text-white border-b border-[#D9D9D9]">
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

            <Button
              variant="outline"
              className="py-5 text-blue-500 bg-white hover:bg-blue-500 border border-blue-500 hover:text-white"
            >
              EN | বা
            </Button>
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

      <nav className="bg-white border-b shadow-sm hidden md:block">
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

// "use client";

// import { ChevronDown, Menu } from "lucide-react";
// import { useState } from "react";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import Link from "next/link";

// const specialties = [
//   {
//     name: "Proctology",
//     submenu: [
//       { label: "Piles Treatment", href: "/proctology/piles-treatment" },
//       { label: "Fistula Treatment", href: "/proctology/fistula-treatment" },
//       { label: "Fissure Treatment", href: "/proctology/fissure-treatment" },
//       {
//         label: "Pilonidal Sinus Treatment",
//         href: "/proctology/pilonidal-sinus-treatment",
//       },
//       { label: "Rectal Prolapse", href: "/proctology/rectal-prolapse" },
//     ],
//   },
//   {
//     name: "Laparoscopy",
//     submenu: [
//       { label: "Hernia Surgery", href: "/proctology/piles-treatment" },
//       { label: "Gallstones Treatment", href: "/proctology/fistula-treatment" },
//       { label: "Appendicitis", href: "/proctology/fissure-treatment" },
//       {
//         label: "Inguinal Hernia Treatment",
//         href: "/proctology/pilonidal-sinus-treatment",
//       },
//       {
//         label: "Umbilical Hernia Treatment",
//         href: "/proctology/rectal-prolapse",
//       },
//     ],
//   },
//   {
//     name: "Gynaecology",

//     submenu: [
//       { label: "Surgical Abortion", href: "/proctology/piles-treatment" },
//       { label: "MTP", href: "/proctology/fistula-treatment" },
//       {
//         label: "Ectopic Pregnancy Treatment",
//         href: "/proctology/fissure-treatment",
//       },
//       {
//         label: "Molar Pregnancy Treatment",
//         href: "/proctology/pilonidal-sinus-treatment",
//       },
//       { label: "Ovarian Cyst", href: "/proctology/rectal-prolapse" },
//       { label: "Miscarriage Treatment", href: "/proctology/rectal-prolapse" },
//       { label: "Endometriosis Treatment", href: "/proctology/rectal-prolapse" },
//       { label: "Adenomyosis Treatment", href: "/proctology/rectal-prolapse" },
//       { label: "PCOS-PCOD Treatment", href: "/proctology/rectal-prolapse" },
//       {
//         label: "Laser Vaginal Tightening",
//         href: "/proctology/rectal-prolapse",
//       },
//       { label: "Hymenoplasty", href: "/proctology/rectal-prolapse" },
//       { label: "Vaginoplasty", href: "/proctology/rectal-prolapse" },
//       { label: "Labiaplasty", href: "/proctology/rectal-prolapse" },
//       { label: "Vaginal Wart Removal", href: "/proctology/rectal-prolapse" },
//     ],
//   },
//   {
//     name: "ENT",

//     submenu: [
//       { label: "Tympanoplasty", href: "/proctology/piles-treatment" },
//       { label: "Adenoidectomy", href: "/proctology/fistula-treatment" },
//       { label: "Sinus Treatment", href: "/proctology/fissure-treatment" },
//       {
//         label: "Septoplasty",
//         href: "/proctology/pilonidal-sinus-treatment",
//       },
//       { label: "FESS Surgery", href: "/proctology/rectal-prolapse" },
//       { label: "Thyroidectomy", href: "/proctology/rectal-prolapse" },
//       { label: "Tonsillectomy", href: "/proctology/rectal-prolapse" },
//       { label: "Stapedectomy", href: "/proctology/rectal-prolapse" },
//       { label: "Myringotomy", href: "/proctology/rectal-prolapse" },
//       { label: "Throat Surgery", href: "/proctology/rectal-prolapse" },
//       { label: "Ear Surgery", href: "/proctology/rectal-prolapse" },
//       { label: "Vocal Cord Polyps", href: "/proctology/rectal-prolapse" },
//       { label: "Nasal Polyps", href: "/proctology/rectal-prolapse" },
//       { label: "Turbinate Reduction", href: "/proctology/rectal-prolapse" },
//     ],
//   },
//   {
//     name: "Urology",

//     submenu: [
//       { label: "Circumcision", href: "/proctology/piles-treatment" },
//       { label: "Stapler Circumcision", href: "/proctology/fistula-treatment" },
//       {
//         label: "Kidney Stones Treatment",
//         href: "/proctology/fissure-treatment",
//       },
//       {
//         label: "Hydrocele",
//         href: "/proctology/pilonidal-sinus-treatment",
//       },
//       { label: "ESWL", href: "/proctology/rectal-prolapse" },
//       { label: "RIRS", href: "/proctology/rectal-prolapse" },
//       { label: "PCNL", href: "/proctology/rectal-prolapse" },
//       { label: "URSL", href: "/proctology/rectal-prolapse" },
//       { label: "Enlarged Prostate", href: "/proctology/rectal-prolapse" },
//       { label: "Frenuloplasty Surgery", href: "/proctology/rectal-prolapse" },
//       { label: "Balanitis", href: "/proctology/rectal-prolapse" },
//       { label: "Balanoposthitis", href: "/proctology/rectal-prolapse" },
//       { label: "Paraphimosis", href: "/proctology/rectal-prolapse" },
//       { label: "Foreskin Infection", href: "/proctology/rectal-prolapse" },
//       { label: "Prostatectomy", href: "/proctology/rectal-prolapse" },
//       { label: "Tight Foreskin", href: "/proctology/rectal-prolapse" },
//       { label: "Phimosis", href: "/proctology/rectal-prolapse" },
//       { label: "Toenail Removal", href: "/proctology/rectal-prolapse" },
//       { label: "Epididymal cyst", href: "/proctology/rectal-prolapse" },
//       { label: "Testicular Torsion", href: "/proctology/rectal-prolapse" },
//       { label: "Vasectomy", href: "/proctology/rectal-prolapse" },
//       { label: "Corn Removal", href: "/proctology/rectal-prolapse" },
//       { label: "Swollen Penis", href: "/proctology/rectal-prolapse" },
//       { label: "ESWL", href: "/proctology/rectal-prolapse" },
//       { label: "ESWL", href: "/proctology/rectal-prolapse" },
//     ],
//   },
//   {
//     name: "Vascular",

//     submenu: [
//       {
//         label: "Varicose Veins Treatment",
//         href: "/proctology/rectal-prolapse",
//       },
//       { label: "Varicocele Treatment", href: "/proctology/rectal-prolapse" },
//       { label: "DVT Treatment", href: "/proctology/rectal-prolapse" },
//       {
//         label: "Diabetic Foot Ulcer Treatment",
//         href: "/proctology/rectal-prolapse",
//       },
//       { label: "Uterine Fibroids", href: "/proctology/rectal-prolapse" },
//       { label: "AV Fistula", href: "/proctology/rectal-prolapse" },
//     ],
//   },
//   {
//     name: "Aesthetics",

//     submenu: [
//       { label: "Gynecomastia", href: "/proctology/rectal-prolapse" },
//       { label: "Cleft Lip", href: "/proctology/rectal-prolapse" },
//       { label: "Beard Transplant", href: "/proctology/rectal-prolapse" },
//       { label: "Blepharoplasty", href: "/proctology/rectal-prolapse" },
//       { label: "Earlobe Repair", href: "/proctology/rectal-prolapse" },
//       { label: "Buccal Fat", href: "/proctology/rectal-prolapse" },
//       { label: "Double Chin", href: "/proctology/rectal-prolapse" },
//       { label: "Scar Removal", href: "/proctology/rectal-prolapse" },
//       { label: "Breast Reduction", href: "/proctology/rectal-prolapse" },
//       { label: "Breast Lump", href: "/proctology/rectal-prolapse" },
//       { label: "Tummy Tuck", href: "/proctology/rectal-prolapse" },
//       { label: "Axillary Breast", href: "/proctology/rectal-prolapse" },
//       {
//         label: "Breast Augmentation Surgery",
//         href: "/proctology/rectal-prolapse",
//       },
//       { label: "Rhinoplasty", href: "/proctology/rectal-prolapse" },
//       { label: "Sebaceous Cyst Surgery", href: "/proctology/rectal-prolapse" },
//       { label: "Breast Lift Surgery", href: "/proctology/rectal-prolapse" },
//       { label: "Lipoma Surgery", href: "/proctology/rectal-prolapse" },
//       { label: "Liposuction", href: "/proctology/rectal-prolapse" },
//     ],
//   },
//   {
//     name: "Dermatology",

//     submenu: [
//       { label: "Total Knee Replacement", href: "/proctology/rectal-prolapse" },
//       { label: "Shoulder Arthroscopy", href: "/proctology/rectal-prolapse" },
//       { label: "Knee Arthroscopy", href: "/proctology/rectal-prolapse" },
//       { label: "Arthroscopy Surgery", href: "/proctology/rectal-prolapse" },
//       { label: "Rotator Cuff Repair", href: "/proctology/rectal-prolapse" },
//       { label: "Shoulder Replacement", href: "/proctology/rectal-prolapse" },
//       { label: "Shoulder Dislocation", href: "/proctology/rectal-prolapse" },
//       { label: "Spine Surgery", href: "/proctology/rectal-prolapse" },
//       { label: "Hip Replacement Surgery", href: "/proctology/rectal-prolapse" },
//       { label: "Meniscus Tear Treatment", href: "/proctology/rectal-prolapse" },
//       { label: "ACL Tear Treatment", href: "/proctology/rectal-prolapse" },
//       { label: "Carpal Tunnel Syndrome", href: "/proctology/rectal-prolapse" },
//       { label: " Knee Replacement", href: "/proctology/rectal-prolapse" },
//     ],
//   },

//   {
//     name: "Orthopedics",

//     submenu: [
//       { label: "Phaco Surgery", href: "/proctology/rectal-prolapse" },
//       { label: "Contoura Vision", href: "/proctology/rectal-prolapse" },
//       { label: "ICL surgery", href: "/proctology/rectal-prolapse" },
//       { label: "FEMTO Lasik surgery", href: "/proctology/rectal-prolapse" },
//       { label: "SMILE Lasik surgery", href: "/proctology/rectal-prolapse" },
//       { label: "PRK Lasik", href: "/proctology/rectal-prolapse" },
//       { label: "Vitrectomy", href: "/proctology/rectal-prolapse" },
//       { label: "Diabetic Retinopathy", href: "/proctology/rectal-prolapse" },
//       { label: "Squint Surgery", href: "/proctology/rectal-prolapse" },
//       { label: "Glaucoma Treatment", href: "/proctology/rectal-prolapse" },
//       { label: "Retinal Detachment", href: "/proctology/rectal-prolapse" },
//       { label: "Cataract Surgery", href: "/proctology/rectal-prolapse" },
//       { label: " Lasik Eye Surgery", href: "/proctology/rectal-prolapse" },
//     ],
//   },
//   {
//     name: "Weight Loss",

//     submenu: [
//       { label: "Bariatric Surgery", href: "/proctology/rectal-prolapse" },
//       {
//         label: "SPATZ intragastric balloon",
//         href: "/proctology/rectal-prolapse",
//       },
//       { label: "Weightloss Surgery", href: "/proctology/rectal-prolapse" },
//     ],
//   },
//   {
//     name: "Opthalmology",
//     submenu: [
//       { label: "ESWL", href: "/proctology/rectal-prolapse" },
//       { label: "ESWL", href: "/proctology/rectal-prolapse" },
//       { label: "ESWL", href: "/proctology/rectal-prolapse" },
//       { label: "ESWL", href: "/proctology/rectal-prolapse" },
//       { label: "ESWL", href: "/proctology/rectal-prolapse" },
//       { label: "ESWL", href: "/proctology/rectal-prolapse" },
//       { label: "ESWL", href: "/proctology/rectal-prolapse" },
//       { label: "ESWL", href: "/proctology/rectal-prolapse" },
//       { label: "ESWL", href: "/proctology/rectal-prolapse" },
//       { label: "ESWL", href: "/proctology/rectal-prolapse" },
//     ],
//   },
//   {
//     name: "Our Hospitals",
//   },
// ];

// export default function Header() {
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   return (
//     <header className="w-full">
//       {/* Top header with dark background */}
//       <div className="bg-[#333333] text-white border-b border-[#D9D9D9]">
//         <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//           {/* Logo and brand name */}
//           <div>
//             <Link href={"/"} className="flex items-center">
//               <Image
//                 src="/images/brand-logo.png"
//                 width={0}
//                 height={0}
//                 alt={"brand"}
//                 sizes={"100vw"}
//                 priority
//                 className={"w-[65px] h-[65px]"}
//               />
//               <h1 className="ml-2 text-xl md:text-2xl font-semibold">
//                 Omni HealthCare
//               </h1>
//             </Link>
//           </div>

//           {/* Desktop navigation */}
//           <div className="hidden md:flex items-center space-x-2">
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" className="text-white">
//                   For Patients <ChevronDown className="ml-1 h-4 w-4" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent>
//                 <DropdownMenuItem>Patient Information</DropdownMenuItem>
//                 <DropdownMenuItem>Insurance</DropdownMenuItem>
//                 <DropdownMenuItem>Patient Portal</DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>

//             <Link href={"/book-appointment"}>
//               <Button className="py-5 text-blue-500 bg-white hover:bg-blue-500 border border-blue-500 hover:text-white">
//                 Make Appointment
//               </Button>
//             </Link>

//             <Button
//               variant="outline"
//               className="py-5 text-blue-500 bg-white hover:bg-blue-500 border border-blue-500 hover:text-white"
//             >
//               EN | বা
//             </Button>
//           </div>

//           {/* Mobile hamburger menu */}
//           <div className="md:hidden">
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon" className="text-white">
//                   <Menu className="h-6 w-6" />
//                   <span className="sr-only">Open menu</span>
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
//                 <div className="flex flex-col h-full">
//                   <div className="p-4 border-b">
//                     <div className="flex items-center justify-between">
//                       <Link href={"/"} className="flex items-center">
//                         <Image
//                           src="/images/brand-logo.png"
//                           width={0}
//                           height={0}
//                           alt={"brand"}
//                           sizes={"100vw"}
//                           priority
//                           className={"w-[65px] h-[65px]"}
//                         />
//                         <h1 className="ml-2 text-xl md:text-2xl font-semibold">
//                           Omni HealthCare
//                         </h1>
//                       </Link>
//                     </div>
//                   </div>

//                   <div className="flex-1 overflow-auto py-2">
//                     <div className="px-4 py-2">
//                       <h3 className="mb-2 text-lg font-semibold">
//                         For Patients
//                       </h3>
//                       <div className="space-y-1">
//                         <Button
//                           variant="ghost"
//                           className="w-full justify-start"
//                         >
//                           Patient Information
//                         </Button>
//                         <Button
//                           variant="ghost"
//                           className="w-full justify-start"
//                         >
//                           Insurance
//                         </Button>
//                         <Button
//                           variant="ghost"
//                           className="w-full justify-start"
//                         >
//                           Patient Portal
//                         </Button>
//                       </div>
//                     </div>

//                     <div className="px-4 py-2 border-t">
//                       <h3 className="mb-2 text-lg font-semibold">
//                         Specialties
//                       </h3>
//                       <Accordion type="single" collapsible className="w-full">
//                         {specialties.map((specialty, index) => (
//                           <AccordionItem
//                             key={specialty}
//                             value={`specialty-${index}`}
//                           >
//                             <AccordionTrigger className="py-2">
//                               {specialty}
//                             </AccordionTrigger>
//                             <AccordionContent>
//                               <div className="pl-4 space-y-1">
//                                 <Button
//                                   variant="ghost"
//                                   className="w-full justify-start"
//                                 >
//                                   Overview
//                                 </Button>
//                                 <Button
//                                   variant="ghost"
//                                   className="w-full justify-start"
//                                 >
//                                   Treatments
//                                 </Button>
//                                 <Button
//                                   variant="ghost"
//                                   className="w-full justify-start"
//                                 >
//                                   Doctors
//                                 </Button>
//                                 <Button
//                                   variant="ghost"
//                                   className="w-full justify-start"
//                                 >
//                                   FAQs
//                                 </Button>
//                               </div>
//                             </AccordionContent>
//                           </AccordionItem>
//                         ))}
//                       </Accordion>
//                     </div>
//                   </div>

//                   <div className="p-4 border-t mt-auto">
//                     <div className="grid gap-2">
//                       <Link href={"/book-appointment"}>
//                         <Button className="w-full bg-blue-500 hover:bg-blue-600">
//                           Make Appointment
//                         </Button>
//                       </Link>
//                       <Button variant="outline" className="w-full">
//                         EN | বা
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>

//       {/* Specialties navigation - desktop only */}
//       <nav className="bg-white border-b shadow-sm hidden md:block">
//         <div className="container mx-auto px-4 overflow-x-auto">
//           <ul className="flex space-x-2 py-2">
//             {specialties.map((specialty) => (
//               <li key={specialty} className="whitespace-nowrap">
//                 <DropdownMenu
//                   onOpenChange={(open) => {
//                     if (open) setActiveDropdown(specialty);
//                     else if (activeDropdown === specialty)
//                       setActiveDropdown(null);
//                   }}
//                 >
//                   <DropdownMenuTrigger asChild>
//                     <Button
//                       variant="ghost"
//                       className={cn(
//                         "text-gray-700 hover:text-blue-600",
//                         activeDropdown === specialty && "text-blue-600"
//                       )}
//                     >
//                       {specialty} <ChevronDown className="ml-1 h-4 w-4" />
//                     </Button>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent>
//                     {/* <Link href={"/doctors-profile"}>
//                       <DropdownMenuItem>Doctors Profile</DropdownMenuItem>
//                     </Link>
//                     <Link href={"/service"}>
//                       <DropdownMenuItem>Service</DropdownMenuItem>
//                     </Link> */}
//                     <Link href={"/search-doctors"}>
//                       <DropdownMenuItem>Search Doctors</DropdownMenuItem>
//                     </Link>
//                     <Link href={"/book-appointment"}>
//                       <DropdownMenuItem>Book Appointment</DropdownMenuItem>
//                     </Link>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// }
