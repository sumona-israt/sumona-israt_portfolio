export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  gpa?: string;
  honors?: string[];
  coursework?: string[];
  image?: string;
}

// Real entries only — do not invent GPA, honors, or coursework.
export const education: EducationEntry[] = [
  {
    id: "msc-aiml",
    degree: "MSc in Artificial Intelligence & Machine Learning",
    institution: "East West University",
    location: "Dhaka, Bangladesh",
    period: "In Progress",
    image: "/images/education/east-west-university.jpg",
  },
  {
    id: "bsc-cse",
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "East West University",
    location: "Dhaka, Bangladesh",
    period: "January 2022 – December 2025",
    image: "/images/education/east-west-university.jpg",
  },
  {
    id: "hsc-science",
    degree: "Higher Secondary Certificate (Science)",
    institution: "Dhaka Cantt Girls' Public School & College",
    location: "Dhaka, Bangladesh",
    period: "2018 – 2020",
    image: "/images/education/dhaka-cantt-girls-college.webp",
  },
];
