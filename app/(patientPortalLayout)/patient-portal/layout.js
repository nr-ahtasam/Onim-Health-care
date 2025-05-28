import "@/app/globals.css";
import { PatientPanelProvider } from "@/context/PatientPanelContext";
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex">
          <main className="flex-1 lg:ml-64 p-6">
            <PatientPanelProvider>
              {children}
            </PatientPanelProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
