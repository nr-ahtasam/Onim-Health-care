import { Facebook, Twitter, Youtube, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-800">
            {/* Top section - Social and Newsletter */}
            <div className="border-t border-gray-400">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 divide-x divide-gray-400">
                    {/* Social Network */}
                    <div className="py-16 px-8 flex flex-col items-center justify-center">
                        <p className="text-sm text-gray-500 mb-2 text-center">Social network</p>
                        <h3 className="text-2xl font-bold mb-8 text-center">Follow us on our network</h3>
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
                        <h3 className="text-2xl font-bold mb-8 text-center">Be the first to know</h3>
                        <div className="flex w-full max-w-md">
                            <div className="relative w-full">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="pr-24 py-6 rounded-full border-gray-300 bg-white"
                                />
                                <Button
                                    className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full px-6 py-1 bg-blue-500 hover:bg-blue-600"
                                >
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle section - Logo, Contact, Hours, Specialties */}
            <div className="border-t border-gray-400">
                <div className="max-w-7xl mx-auto py-12 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Logo and Tagline (Full Width) */}
                        <div className="col-span-1 md:col-span-3">
                            <div className="flex items-center gap-4 mb-4">
                                {/* Logo */}
                                <Link href={"/"} className="flex items-center">
                                    <Image src="/images/brand-logo.png"
                                           width={0}
                                           height={0}
                                           alt={"brand"}
                                           sizes={"100vw"}
                                           priority
                                           className={"w-[65px] h-[65px]"}
                                    />
                                    <h1 className="ml-2 text-lg font-semibold">Omni HealthCare</h1>
                                </Link>

                                {/* Tagline */}
                                <p className="text-gray-600">Care that fits your life!</p>
                            </div>
                            {/* Divider */}
                            <hr className="border-gray-200 mb-6"/>
                        </div>

                        {/* Contact Information (with Call and Email below) */}
                        <div className="col-span-1">
                            <div className="space-y-6">
                                <div>
                                    <div className="border-b border-gray-200 pb-2 mb-4">
                                        <h4 className="font-bold">Visit our Hospital</h4>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-4">123 Main street, Area name, Location name,
                                        City - 123456</p>
                                </div>

                                <div>
                                    <div className="border-b border-gray-200 pb-2 mb-4">
                                        <h4 className="font-bold">Give us a call</h4>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-4">0123456789</p>
                                </div>

                                <div>
                                    <div className="border-b border-gray-200 pb-2 mb-4">
                                        <h4 className="font-bold">Email us on</h4>
                                    </div>
                                    <p className="text-sm text-gray-600">enquiry@hospital.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Opening Hours */}
                        <div className="col-span-1">
                            <div className="border-b border-gray-200 pb-2 mb-4">
                                <h4 className="font-bold">Opening Hours</h4>
                            </div>
                            <div className="text-sm text-gray-600">
                                <p className="mb-2">Mon - Fri : 08:00 - 16:00</p>
                                <p className="mb-2">Sat : 08:00 - 16:00</p>
                                <p className="mb-2">Sun : 08:00 - 16:00</p>
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
                                        <li>
                                            <Link href="#" className="hover:text-blue-500">Cardiac Sciences</Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="hover:text-blue-500">Clinical Diagnostics</Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="hover:text-blue-500">Cosmetic Surgery</Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="hover:text-blue-500">Critical & Intensive
                                                Care</Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="hover:text-blue-500">Dental Sciences</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="border-b border-gray-200 pb-2 mb-4">
                                        <h4 className="font-bold">News and media</h4>
                                    </div>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li>
                                            <Link href="#" className="hover:text-blue-500">News</Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="hover:text-blue-500">Events</Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="hover:text-blue-500">Gallery</Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="hover:text-blue-500">Testimonials</Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="hover:text-blue-500">Insurance Partners</Link>
                                        </li>
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
                        <Link href="#" className="text-gray-500 hover:text-gray-700">Our Services</Link>
                        <Link href="#" className="text-gray-500 hover:text-gray-700">Careers</Link>
                        <Link href="#" className="text-gray-500 hover:text-gray-700">FAQs</Link>
                        <Link href="#" className="text-gray-500 hover:text-gray-700">Privacy policy</Link>
                        <Link href="#" className="text-gray-500 hover:text-gray-700">Terms and conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

