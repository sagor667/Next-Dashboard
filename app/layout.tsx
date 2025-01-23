import '@/app/ui/global.css';
import {styleScript} from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${styleScript.className} antialiased`}>{children}</body>
    </html>
  );
}
