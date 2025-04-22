"use client";
import TableSearch from "@/app/components/TableSearch";

const TeacherListPage = () => {
  return (
    <div className="flex-1 p-4">
      <div className="bg-white rounded-md shadow-sm p-6">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-lg md:text-xl font-semibold text-gray-800">
            All Teachers
          </h1>
        </div>

        {/* Teachers Table */}
        <TableSearch />

        {/* Optional: Pagination or Footer controls */}
        {/* <div className="mt-4 flex justify-end">
          <PaginationComponent />
        </div> */}
      </div>
    </div>
  );
};

export default TeacherListPage;
