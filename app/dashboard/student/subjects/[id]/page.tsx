import CourseRoadmapPage from "./components/CourseRoadmapPage";

export default function CourseDetails({ params }: { params: { id: string } }) {
  return <CourseRoadmapPage courseId={params.id} />;
}
