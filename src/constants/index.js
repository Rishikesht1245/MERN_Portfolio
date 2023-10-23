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
  selfstack,
  tesla,
  shopify,
  carrent,
  lap4you,
  jobit,
  tripguide,
  threejs,
  infosys,
  bootstrap,
  aws,
  youtube,
  netflix,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
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
    name: "Bootstrap",
    icon: bootstrap,
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
    name: "aws",
    icon: aws,
  },
];

const experiences = [
  {
    title: "MERN FullStack Developer - Intern",
    company_name: "SelfStack hub LLP",
    icon: selfstack,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Built and deployed one project on AWS.",
      "Backend with Node.js, Express.js RESTAPI using MongoDB.",
      "Frontend with React.js & State Management with Redux, TailwindCSS and Bootstrap.",
      "Data Structures and Algorithms.",
      "Version control system - Git.",
      " Authentication and Authorization using JWT and sessions.",
    ],
  },
  {
    title: "System Associate",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#E6DEDD",
    date: "Jul 2021 - Feb 2023",
    points: [
      "Played a key role as a member of the Technical Documentation System (TDS) application team, contributing to the development of the e-commerce wing of the world's largest health and wellness products manufacturer.",
      "Regularly tested the application on a monthly basis following patching, ensuring its reliability and functionality.",
      "Demonstrated proficiency in business communication to effectively interact with clients and understand their requirements.",
      "Development and deployment of agents using VB Script to gather and extract relevant document from the system.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rishikesh proved me wrong.",
    name: "Abhay Raj",
    designation: "Student",
    company: "SelfStack",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their colleagues' success like Rishikesh does.",
    name: "Nizam K",
    designation: "Student",
    company: "SelfStack",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rishikesh optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Rahul N",
    designation: "Student",
    company: "SelfStack",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Lap4You eCommerce",
    description:
      "A fully-fledged e-commerce web application for budget friendly laptops with admin, manager and shopper sides which has most e-commerce features like cart, coupons and Wishlist and is hosted on an AWS EC2 Instance. ",
    tags: [
      {
        name: "EJS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node JS",
        color: "pink-text-gradient",
      },
    ],
    image: lap4you,
    source_code_link: "https://github.com/Rishikesht1245/LAP4YOU_ecommerce",
    live_link: "https://lap4you.shop/",
  },
  {
    name: "YouTube Clone",
    description:
      "A fully responsive YouTube-clone website build using React.js, Tailwind CSS, Rapid API and Axios. The website is fully responsive, providing a seamless experience across various devices and screen sizes. Search and Category wise Data fetching.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/Rishikesht1245/Youtube_Clone",
    live_link: "https://youtubeclone1245.netlify.app/",
  },
  {
    name: "Netflix Clone",
    description:
      "A fully responsive Netflix-clone website build using React.js, Tailwind CSS, TMBD API and Axios. The website is fully responsive, providing a seamless experience across various devices and screen sizes. Search and Category wise Data fetching.",
    tags: [
      {
        name: "Redux-toolkit",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/Rishikesht1245/NetFlix_clone_React",
    live_link: "https://netflixclone1245.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
