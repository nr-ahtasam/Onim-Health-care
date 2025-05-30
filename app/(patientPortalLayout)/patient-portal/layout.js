"use client";
import "@/app/globals.css";
import Header from "@/components/patient-portal/Header";
import { PatientPortalProvider } from "@/context/PatientPortalContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Layout = ({ children }) => (
  <html lang="en">
    <body>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen flex">
          <main className="flex-1 lg:ml-64 p-6">
            <PatientPortalProvider>
              <Header />
              {children}
              </PatientPortalProvider>
          </main>
        </div>
      </QueryClientProvider>
    </body>
  </html>
);

export default Layout;