"use client";
import Link from "next/link";
import {
  Home,
  Users,
  GraduationCap,
  User,
  BookOpen,
  ClipboardList,
  FileText,
  CalendarDays,
  MessageSquare,
  Megaphone,
  Settings,
  LogOut,
  UserCircle,
  School,
  File,
  ClipboardCheck
} from "lucide-react";

const menuItems = [
  {
    title: "ADMIN",
    items: [
      { icon: <Home size={20} />, label: "Dashboard", href: "/dashboard/admin" },
      { icon: <Users size={20} />, label: "Manage Teachers", href: "/dashboard/admin" },
      { icon: <GraduationCap size={20} />, label: "Manage Students", href: "/dashboard/admin" },
      { icon: <File size={20} />, label: "Exams", href: "/dashboard/admin" },
      { icon: <FileText size={20} />, label: "Results", href: "/dashboard/admin" },
      { icon: <ClipboardCheck size={20} />, label: "Attendance", href: "/dashboard/admin" },
      { icon: <CalendarDays size={20} />, label: "Add Events", href: "/dashboard/admin" },
      { icon: <MessageSquare size={20} />, label: "Messages", href: "/dashboard/admin" },
      { icon: <Megaphone size={20} />, label: "Create Announcements", href: "/dashboard/admin" },
    ],
  },
  {
    title: "OTHER",
    items: [
      { icon: <UserCircle size={20} />, label: "Profile", href: "/admin/profile" },
      { icon: <Settings size={20} />, label: "Settings", href: "/admin/settings" },
      { icon: <LogOut size={20} />, label: "Logout", href: "/logout" },
    ],
  },
];

const MenuA = () => {
  return (
    <div className="mt-4 text-sm h-full overflow-y-auto pr-1 scrollbar-hide">
      {menuItems.map((section) => (
        <div className="flex flex-col gap-2" key={section.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {section.title}
          </span>
          {section.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-600 py-2 hover:text-black transition-colors"
            >
              {item.icon}
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MenuA;
