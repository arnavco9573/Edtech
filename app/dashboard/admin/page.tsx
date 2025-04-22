import React from "react";
import AdminCard from "./components/AdminCard";
import CountChart from "@/app/components/CountChart";
import AttendanceChart from "@/app/components/AttendanceChart";
import FinanceChart from "@/app/components/FinanceChart";
import EventCalendar from "@/app/components/EventCalender";
import Announcements from "@/app/components/Announcement";

export default function page() {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left Content */}
      <div className="w-full lg-w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between">
          <AdminCard type="student" />
          <AdminCard type="teacher" />
          <AdminCard type="staff" />
        </div>
        {/* Middle Charts */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count Chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* Attendance Chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* Bottom Charts */}
        <div className="w-full h-[500px]">
          <FinanceChart/>
        </div>
      </div>
      {/* Right Main Content */}
      <div className="w-full lg-w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements/>
      </div>
    </div>
  );
}
