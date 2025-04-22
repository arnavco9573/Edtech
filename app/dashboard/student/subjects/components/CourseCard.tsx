"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Progress,
} from "@heroui/react";
import { useRouter } from "next/navigation";

type Lesson = {
  title: string;
  description?: string;
};

type Week = {
  week: number;
  lessons: Lesson[];
};

type Course = {
  id: number;
  title: string;
  tags: string[];
  assigned: number;
  lastEdited: string;
  progress: number;
  roadmap: Week[];
};

export default function CourseCard({ course }: { course: Course }) {
    const router = useRouter();

  return (
    <>
      <Card shadow="sm" isPressable onPress={() => router.push(`/dashboard/student/subjects/${course.id}`)} className="w-full max-w-sm hover:shadow-lg transition">
        <CardHeader className="p-4">
          <div className="flex items-center justify-between w-full">
            <Chip color="secondary">{course.assigned} Assignments</Chip>
            <div className="text-sm text-gray-500">...</div>
          </div>
        </CardHeader>
        <CardBody className="px-4 py-2">
          <h3 className="text-base font-semibold">{course.title}</h3>
          <div className="flex flex-wrap gap-2 my-2">
            {course.tags.map((tag) => (
              <Chip key={tag} color="default" size="sm">
                {tag}
              </Chip>
            ))}
          </div>
        </CardBody>
        <CardFooter className="px-4 pb-4 text-sm text-gray-500 flex justify-between">
          <span>Edited {course.lastEdited} ago</span>
          <div className="flex items-center gap-2">
            Completed: <Progress color="success" size="sm" value={course.progress} className="w-16" />
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
