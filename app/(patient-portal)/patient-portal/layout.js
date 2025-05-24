import SidePanel from "@/components/patient-portal/SidePanel";
import "@/app/globals.css"; // Import your global styles here
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex">
          {/* <SidePanel /> */}
          <main className="flex-1 ml-64 p-6">{children}</main>
          
        </div>
      </body>
    </html>
  );
}
