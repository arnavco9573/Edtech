"use client";
import { Bell, MessageSquare } from "lucide-react";
import { Input, User } from "@heroui/react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-sm">
      {/* Search */}
      <div className="mr-4 w-1/2">
        <Input label="Search" type="text" variant="bordered" size="sm" />
      </div>

      <div className="flex items-center gap-6"> {/* This will ensure they align side by side */}
        {/* Avatar */}
        <div className="flex items-center p-2 border-1 border-gray-300 rounded-medium">
          <User
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
            }}
            name="Arnav Sharma"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
