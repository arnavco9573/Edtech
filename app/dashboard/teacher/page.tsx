import Announcements from "@/app/components/Announcement";
import BigCalendar from "@/app/components/BigCalender";

const TeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3 flex flex-col h-full">
        <div className="flex-1 bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold mb-4">Schedule</h1>
          <div className="h-[1000px]">
            {" "}
            {/* Set a height or use full */}
            <BigCalendar />
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;
