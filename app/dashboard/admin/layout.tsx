// app/(admin)/layout.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import MenuA from "./components/MenuA";
import Navbar from "./components/Navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-white p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">School-gama</span>
        </Link>
        <MenuA />
      </div>

      {/* Main Content */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-y-auto">
        <Navbar />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
