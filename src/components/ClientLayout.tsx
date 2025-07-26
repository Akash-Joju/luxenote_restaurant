'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RouteLoader from '@/components/RouteLoader';
import { Toaster } from 'sonner'; // ✅ import Toaster

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <RouteLoader />
      <Navbar />
      <main>{children}</main>
      {pathname === '/' && <Footer />}

      {/* ✅ Toaster goes here so it renders on every page */}
      <Toaster position="top-center" richColors closeButton />
    </>
  );
}
