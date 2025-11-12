import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "KnectHotel",
  description: "Cloud-based hotel management platform for modern hospitality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
