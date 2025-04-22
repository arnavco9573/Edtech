import CourseRoadmapPage from "./components/CourseRoadmapPage";


const CourseDetails = async ({ params }: { params: { id: string } }) => {

  const courseId = params.id;

  return <CourseRoadmapPage courseId={courseId} />;
};

export default CourseDetails;
