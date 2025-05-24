import "@/app/globals.css";
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex">
          <main className="flex-1 ml-64 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
