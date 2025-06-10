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
import openTrellis from "../assets/company/openTrellis.svg";
import llamawood from "../assets/company/llamawood.svg";
import bashpole from "../assets/company/bashpole.svg";
import ur from "../assets/company/ur.svg";


// export const triph = require('"../assets/triph.png"');

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },


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
    title: "Lead Software Engineer",
    company_name: "Open Trellis",
    icon: openTrellis,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Drive end‑to‑end development of Open Trellis products, launch polished React/Next.js interfaces, and architect a fault‑tolerant backend with Node.js, TypeScript, Prisma, PlanetScale (MySQL), and Redis caching.",
      "Collaborate closely with shareholders to align technical solutions with business goals by supervising a development team and providing technical expertise on the board to drive strategic initiatives.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "LLAMAWOOD",
    icon: llamawood,
    iconBg: "#E6DEDD",
    date: "May 2024 - August 2024",
    points: [
      "Spearheaded the development of LLAMAWOOD's first scalable firewood delivery platform, integrating Uber Freight API into a custom logistics app that enabled real-time routing, pricing, and dispatch automation.",
      "Led data infrastructure overhaul by centralizing fragmented customer, inventory, and delivery datasets into a streamlined backend system, enabling actionable analytics and smarter inventory decisions.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Bashpole Software",
    icon: bashpole,
    iconBg: "#383E56",
    date: "November 2022 - February 2023",
    points: [
      "Spearheaded a React and Node.js UI overhaul that modernized the product's look‑and‑feel and lifted daily active engagement by 20% within one release cycle.",
      "Led peer code‑review rounds that raised overall commit quality and drove a 10% jump in intern throughput, while coaching teammates on clean‑code practices and test coverage.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "University of Richmond",
    icon: ur,
    iconBg: "#E6DEDD",
    date: "May 2021 - August 2024",
    points: [
      "Engineered and evaluated adversarial attacks against RNN-based speech recognition models (e.g., DeepSpeech2), exposing vulnerabilities in real-world voice systems through gradient-based perturbation and preprocessing exploits.",
      "Developed a novel hybrid LIME/LEMNA interpretability framework that isolated spectral dependencies in ASR models, validated via automated ablation studies using SciPy, Pandas, and scikit-learn.",
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
