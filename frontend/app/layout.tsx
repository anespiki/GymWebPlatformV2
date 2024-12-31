'use client'; // Mark the file as a client component

import './globals.css'; // Import global CSS
import { usePathname } from 'next/navigation'; // Import usePathname hook
import Link from 'next/link'; // Import Link for navigation

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get the current route

  return (
    <html lang="en">
      <body>
        {/* Render Navbar only if the route is not the login page */}
        {pathname !== '/' && pathname !=='/signup' && (
          <div className="home-navbar">
            <Link href="/home">
              <div className="logo">Sarajevo City Gym</div>
            </Link>
            <div className="nav-items">
              <Link href="/membership">
                <div className="nav-item">Memberships</div>
              </Link>
              <Link href="/about">
                <div className="nav-item">Why SCG</div>
              </Link>
              <Link href="/workouts">
                <div className="nav-item">Workouts</div>
              </Link>
              <Link href="/merch">
                <div className="nav-item">Merch</div>
              </Link>
              <Link href="/account">
                <div className="nav-item">Account</div>
              </Link>
            </div>
          </div>
        )}
        <main>{children}</main>
      </body>
    </html>
  );
}
