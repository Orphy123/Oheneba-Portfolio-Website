import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "IOS Developer",
    icon: mobile,
  },
  {
    title: "Android Developer",
    icon: backend,
  },
  {
    title: "Software Engineering",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "Bashpole Software",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Nov 2022 - Feb 2023",
    points: [
      "Collaborating on a variety of projects, including troubleshooting, debugging, and efficient management of existing business solutions.",
      "Working with JavaScript, CSS, HTML, Google Apps Script, and Google Tag Manager to develop software management tools and processes to enhance the performance of fellow engineers.",
      "Prioritize and execute software development life cycle tasks such as designing database architecture, testing, and debugging applications, and validating software functionality and security.",
    ],
  },
  {
    title: " Software Developer Intern",
    company_name: "Textopian",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Apr 2022",
    points: [
      "Optimized an algorithm to populate our website database with UTF-8 texts and make them user-friendly.",
      "The software was implemented on a small scale in a few classes at the University of Richmond.",
      "Utilized Python and JavaScript in designing the algorithm and used GitHub to collaborate with the team.",
    ],
  },
  {
    title: "Acadmic Research Intern",
    company_name: "University of Richmond",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2022 - May 2023",
    points: [
      "Designed and implemented Python algorithms for attacking Voice Processing Systems with an 85% success rate.",
      "Developed a unique LIME/LEMNA explanation method for deep learning Speech Recognition Systems.",
      "Conducted extensive ablation study of DeepSpeech2 using SciPy, Pandas, and Scikit-learn.",
    ],
  },
  {
    title: "Strategy Consulting Intern",
    company_name: "Diive",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Aug 2022",
    points: [
      "Worked with a leading healthcare company called Hear.com to create an operation center to streamline their filling and processing of medical health insurance claims.",
      "Collaborated with a software company called GoodX Software to create a system that integrates with the entire management portion of their current business model.",
      "Tested our integrated business model against other institutions using alternative software solution systems to determine the rigidity of our solution system.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Working with Oheneba has been an incredible experience. His expertise in web development has greatly enhanced my understanding of computer science.",
    name: "William",
    designation: "Computer Science Student",
    company: "University of Richmond",
    image: "https://randomuser.me/api/portraits/men/7.jpg"
  }
  ,
  {
    testimonial: "Oheneba's contributions to our projects at Bashpole Software have been invaluable. His deep understanding of software engineering and attention to detail have significantly improved our product's performance.",
    name: "Rose",
    designation: "Software Engineer",
    company: "Bashpole Software",
    image: "https://randomuser.me/api/portraits/women/8.jpg"
  }
  ,
  {
    testimonial: "I never thought I'd find someone as passionate about web development as Oheneba. His creativity and dedication shine through in every project He undertakes.",
    name: "Matilda",
    designation: "Marketing Professional",
    company: "Falcon Corporation",
    image: "https://randomuser.me/api/portraits/women/9.jpg"
  }
  ,
];

const projects = [
  {
    name: "Sports With Me",
    description:
      "An Android app developed with a focus on promoting an active lifestyle, the app serves as a social sports networking platform connecting individuals seeking sports partners.",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Orphy123/Sports-With-Me",
  },
  {
    name: "Yolo Based Car Object Detection",
    description:
      " Enhancing Traffic Recognition and Management with YOLO-based Car Object Detection. Created a cutom machne learning model to mimic the performance of the YOLO v5 model.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "green-text-gradient",
      },
      {
        name: "Tensor Flow",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Orphy123/YOLO-based-Car-Object-Detection",
  },
  {
    name: "Android MineSweeper",
    description:
      "A robust android MineSweeper game, with the added functionality of freely adjusting the dimensions of the minefield. It has a timer, and a mine counter as well, also comes with flags, and modern UI interface",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Orphy123/Android-MineSweeper",
  },

];

export { services, technologies, experiences, testimonials, projects };
