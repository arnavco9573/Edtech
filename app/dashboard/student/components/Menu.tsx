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
    title: "MENU",
    items: [
      { icon: <Home size={20} />, label: "Home", href: "/dashboard/student" },
      { icon: <Users size={20} />, label: "Teachers", href: "/dashboard/student/teachers" },
      { icon: <BookOpen size={20} />, label: "Courses", href: "/dashboard/student/subjects" },
      { icon: <ClipboardCheck size={20} />, label: "Attendance", href: "/dashboard/student" },
      { icon: <CalendarDays size={20} />, label: "Events", href: "/dashboard/student/events" },
      { icon: <MessageSquare size={20} />, label: "Messages", href: "/dashboard/student/feedback" },
      { icon: <Megaphone size={20} />, label: "Announcements", href: "/dashboard/student/announcements" },
    ],
  },
  {
    title: "OTHER",
    items: [
      { icon: <UserCircle size={20} />, label: "Profile", href: "/profile" },
      { icon: <Settings size={20} />, label: "Settings", href: "/settings" },
      { icon: <LogOut size={20} />, label: "Logout", href: "/logout" },
    ],
  },
];

const Menu = () => {
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

export default Menu;
