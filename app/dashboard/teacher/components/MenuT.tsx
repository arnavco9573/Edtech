"use client";
import Link from "next/link";
import {
  Home,
  ClipboardList,
  FileText,
  CalendarDays,
  MessageSquare,
  Megaphone,
  Settings,
  LogOut,
  UserCircle,
  BookOpen,
  School,
  ClipboardCheck,
  FilePlus,
  Users
} from "lucide-react";

const menuItems = [
    {
      title: "TEACHER PANEL",
      items: [
        { icon: <Home size={20} />, label: "Dashboard", href: "/dashboard/teacher" },
        { icon: <BookOpen size={20} />, label: "My Courses", href: "/dashboard/teacher" },
        { icon: <FilePlus size={20} />, label: "Create Material", href: "/dashboard/teacher" },
        { icon: <ClipboardList size={20} />, label: "Manage Lessons", href: "/dashboard/teacher" },
        { icon: <Users size={20} />, label: "My Students", href: "/dashboard/teacher" },
        { icon: <FileText size={20} />, label: "Student Results", href: "/dashboard/teacher" },
        { icon: <MessageSquare size={20} />, label: "Messages", href: "/dashboard/teacher" },
        { icon: <Megaphone size={20} />, label: "Announcements", href: "/dashboard/teacher" },
      ],
    },
    {
      title: "ACCOUNT",
      items: [
        { icon: <UserCircle size={20} />, label: "Profile", href: "/teacher/profile" },
        { icon: <Settings size={20} />, label: "Settings", href: "/teacher/settings" },
        { icon: <LogOut size={20} />, label: "Logout", href: "/logout" },
      ],
    },
  ];

const MenuT = () => {
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

export default MenuT;
