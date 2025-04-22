"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* Left Sidebar */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-white p-4 overflow-y-auto scrollbar-hide">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">School</span>
        </Link>
        <Menu />
      </div>

      {/* Right Main Content */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-y-auto">
        <Navbar />
        <div className="">{children}</div>
      </div>
    </div>
  );
}
