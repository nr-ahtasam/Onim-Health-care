"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FEATURED_SERVICES_QUERY } from "@/lib/graphql";
import { useQuery } from "@apollo/client";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const { data } = useQuery(FEATURED_SERVICES_QUERY);

  const services = data?.page?.homeSections?.featuredServices?.nodes || []
  
  const newsLinks = [
    { label: "Hotel Omni Residency", href: "/news" },
    { label: "Omni Lights", href: "/events" },
    { label: "Ray International", href: "/gallery" },
    { label: "GMT Trading", href: "testimonials" },
    { label: "Insurance Partners", href: "insurance-partners" },
  ];
  return (
    <footer className=" text-gray-800">
      {/* Top section - Social and Newsletter */}
      <div className="md:border-t border-gray-400">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 md:divide-x divide-gray-400">
          {/* Social Network */}
          <div className="md:py-16 px-8 flex flex-col items-center justify-center">
            <p className="text-sm text-gray-500 mb-2 text-center">
              Social network
            </p>
            <h3 className="text-2xl font-bold mb-8 text-center">
              Follow us on our network
            </h3>
            <div className="flex gap-6">
              <Link href="#" className="text-blue-600 hover:text-blue-700">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-blue-400 hover:text-blue-500">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="text-red-600 hover:text-red-700">
                <Youtube size={24} />
              </Link>
              <Link href="#" className="text-pink-600 hover:text-pink-700">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="text-blue-600 hover:text-blue-700">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="py-16 px-8 flex flex-col items-center justify-center">
            <p className="text-sm text-gray-500 mb-2 text-center">Newsletter</p>
            <h3 className="text-2xl font-bold mb-8 text-center">
              Be the first to know
            </h3>
            <div className="flex w-full max-w-md">
              <div className="relative w-full">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pr-24 py-6 rounded-full border-gray-300 bg-white"
                />
                <Button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full px-6 py-1 bg-blue-500 hover:bg-blue-600">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle section - Logo, Contact, Hours, Specialties */}
      <div className="md:border-t border-gray-400">
        <div className="max-w-7xl mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Tagline (Full Width) */}
            <div className="col-span-1 md:col-span-3">
              <div className="flex items-center gap-4 mb-4">
                {/* Logo */}
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
                  <h1 className="ml-2 text-lg font-semibold">
                    Omni HealthCare
                  </h1>
                </Link>

                {/* Tagline */}
                <p className="text-gray-600">Care that fits your life!</p>
              </div>
              {/* Divider */}
              <hr className="border-gray-200 mb-6" />
            </div>

            {/* Contact Information (with Call and Email below) */}
            <div className="col-span-1">
              <div className="space-y-6">
                <div>
                  <div className="md:border-b border-gray-200 pb-2 mb-4">
                    <h4 className="font-bold">Visit our Head Quarters</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Block#D, House#42, Rd No-15, Dhaka 1213
                  </p>
                </div>

                <div>
                  <div className="border-b border-gray-200 pb-2 mb-4">
                    <h4 className="font-bold">Give us a call</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">01711-997401, 01711-997402</p>
                </div>

                <div>
                  <div className="border-b border-gray-200 pb-2 mb-4">
                    <h4 className="font-bold">Email us on</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    enquiry@omnihealthcare.com.bd
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="col-span-1">
              <div className="border-b border-gray-200 pb-2 mb-4">
                <h4 className="font-bold">Opening Hours</h4>
              </div>
              <div className="text-sm text-gray-600">
                <p className="mb-2">Mon - Fri : 10:00 - 19:00</p>
                <p className="mb-2">Sat : 10:00 - 19:00</p>
                <p className="mb-2">Sun : 10:00 - 19:00</p>
              </div>
            </div>

            {/* Specialties and News */}
            <div className="col-span-1">
              <div className="grid grid-cols-2 gap-x-4">
                <div>
                  <div className="border-b border-gray-200 pb-2 mb-4">
                    <h4 className="font-bold">Specialities</h4>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {services?.map((service) => {
                        return (
                          <li key={service.slug}>
                            <Link href={`/service/${service.slug}`} className="hover:text-blue-500">
                              {service?.serviceFields?.catName}
                            </Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
                <div>
                  <div className="border-b border-gray-200 pb-2 mb-4">
                    <h4 className="font-bold">Sister Concerns</h4>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {newsLinks.map((item, index) => (
                      <li key={index}>
                        <Link href={item.href} className="hover:text-blue-500">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section - Copyright and Links */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            ©2025 Omni Health Care. All Rights Reserved. Made By Rubytech
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/careers" className="text-gray-500 hover:text-gray-700">
              Careers
            </Link>
            <Link href="/faqs" className="text-gray-500 hover:text-gray-700">
              FAQs
            </Link>
            <Link
              href="/privacy-policy"
              className="text-gray-500 hover:text-gray-700"
            >
              Privacy policy
            </Link>
            <Link
              href="terms-and-conditions"
              className="text-gray-500 hover:text-gray-700"
            >
              Terms and conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
