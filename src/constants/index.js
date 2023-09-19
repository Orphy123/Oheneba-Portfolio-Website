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
import {imat4} from "three/nodes";
import triph from "../assets/triph.png";
import ph1 from "../assets/ph1.jpeg";
import mineS from "../assets/mineS.png";
import sports from "../assets/sports.png";
import tictac from "../assets/tictac.png";
import deep from "../assets/deep.png";
import weat from "../assets/weat.png";


// export const triph = require('"../assets/triph.png"');

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  // {
  //   id: "contact",
  //   title: "Contact",
  // },
  {
    id: "resume",
    title: "Resume",
    link: "https://drive.google.com/file/d/12FhPfz9vzcZTz3-Vxob8HuQRHz-DAv4h/view?usp=sharing"
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
      "Spearheaded various projects at Bashpole Software, focusing on troubleshooting, debugging, and managing software business solutions to boost operational efficiency.",
      "Working with JavaScript, CSS, HTML, Google Apps Script, and Google Tag Manager to develop software management tools and processes to enhance the performance of fellow engineers.",
      "Managed vital SDLC tasks, including robust database design, application debugging, and software validation, ensuring the delivery of secure, high-quality software.",
    ],
  },
  {
    title: " Software Developer Intern",
    company_name: "Textopian",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Apr 2022",
    points: [
      "Developed and optimized a user-friendly interface for the digital reading platform, Textopian, utilizing Python and JavaScript. Key features included chapter segmentation, interactive tools for users to place emojis, comments, and questions, and a classroom tracking system for educators.",
      "Created an innovative algorithm to automate the importation and formatting of public database texts into the Textopian system, resulting in a 60% increase in operational efficiency and streamlining the content adaptation process.",
      "Led debugging efforts across projects, ensuring seamless user interaction with various texts and maintaining the platform's overall functionality and performance, while enhancing the usability of the platform for its diverse user base.",
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
    image: sports,
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
    image: deep,
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
    image: mineS,
    source_code_link: "https://github.com/Orphy123/Android-MineSweeper",
  },
  {
    name: "Android TicTacToe",
    description:
        "Challenge your friends in a classic duel of Xs and Os with a modern touch. This interactive game offers a fun experience for everyone!",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",

      },
      {
        name: "Multiplayer Functionality",
        color: "blue-text-gradient",
      },
      {
        name: "UI/UX",
        color: "pink-text-gradient",
      },
    ],
    image: tictac,
    source_code_link: "https://github.com/Orphy123/TicTacToe",
  },
  //   change the picture for Weather APP
  {
    name: "Android Weather App",
    description:
        "This advanced version of WeatherApp stands as a testament to modern app development practices, offering users a refined weather tracking experience while providing developers an example of a well-structured, scalable, and maintainable application.",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "OneMap API",
        color: "green-text-gradient",
      },
      {
        name: "Fused Location Provider",
        color: "pink-text-gradient",
      },


    ],
    image: weat,
    source_code_link: "https://github.com/Orphy123/Android-Weather-App",
  },

];

export { services, technologies, experiences, testimonials, projects };
