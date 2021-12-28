export type Unit = {
  title: string;
  image: string;
  link: string;
  exploreId?: string;
  locked?: boolean;
  badgeId?: number;
  skills: number[];
};
type CourseData = {
  courses: Course[];
};
export type Course = {
  id: string;
  title: string;
  url: string;
  image: string;
  presale?: boolean;
  description?: string;
  locked?: boolean;
};
type Level = {
  title: string;
  units: Unit[];
};

export const getCourse = (id): Course => {
  return courseData.courses.find((course) => course.id === id);
};

const courseData: CourseData = {
  courses: [
    {
      id: "math1",
      image: "/images/courses/math.png",
      url: "course/math1",
      title: "Math Champ 1",
    },
    {
      id: "math2",
      image: "/images/courses/math.png",
      url: "course/math2",
      title: "Math Champ 2",
      locked: true,
      description: "Complete Math Champ 1 to unlock this course",
    },
    {
      id: "coding",
      image: "/images/courses/coding.jpg",
      title: "CS Champ",
      url: "coding",
      presale: true,
    },
    {
      id: "finance",
      image: "/images/skills/finance.png",
      url: "finance",
      title: "Finance Champ",
      presale: true,
    },
  ],
};

export default courseData;
