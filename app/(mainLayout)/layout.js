import Footer from "@/app/(mainLayout)/footer";
import "@/app/globals.css";
import ApolloWrapper from "@/components/apollo/ApolloWrapper";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/header/Header";
import BlogCardPreview from "@/components/news-letter/BlogCardPreview";
import PopUpModal from "@/components/PopUpModal";
import GoogleTranslateWidget from "@/components/shared/GoogleTranslateWidget";
import Testimonials from "@/components/shared/Testimonials";
import { Toaster } from "@/components/ui/sonner";
import { Poppins } from "next/font/google";
import { Suspense } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const poppins = Poppins({   
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Omni Health Care",
    template: "%s | Omni Health Care",
  },
  description: "Empowering Surgical Services in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          async
        ></script>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
      </head>
      <body className={`${poppins.variable} bg-[#F0F0F0]`}>
        <ApolloWrapper>
          <GoogleTranslateWidget /> {/* Hidden initialization */}
          <Header />
          {children}
          <Testimonials />
          <BlogCardPreview />
          <Footer />
          <Toaster />
          <PopUpModal />
        </ApolloWrapper>
      </body>
    </html>
  );
}
