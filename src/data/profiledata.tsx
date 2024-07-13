import { Github, Linkedin, MessageCircle, Braces, Mail } from "lucide-react";
import InfosysLogoSvg from "@/assets/images/companies/infosys-technologies-logo.svg"
import SiemensLogoSvg from "@/assets/images/companies/siemens-ag-logo.svg";

const intro = {
  logo: "/images/avatar.png",
  firstName: "Muhammed",
  lastName: "Mahmood Alam.",
  greeting: "Hello! I am",
  titleWithDescription:
    "Full stack Developer with 10 years of experience developing microservices, Mobile  apps and web application using Spring Boot, Asp .Net , React JS and Xamarin. ",
  inspirational: [
    "Cloud is the modern abacus",
    "AI will <s>replace</s>  assist you",
  ],
  socialLinks: [
    {
      name: "Github",
      link: "https://github.com/mhmahmoodalam",
      iconClass: <Github />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/mhmahmoodalam",
      iconClass: <Linkedin />,
    },
    {
      name: "Hacker Rank",
      link: "https://www.hackerrank.com/mhmahmoodalam",
      iconClass: <Braces />,
    },
    {
      name: "Whatsapp",
      link: "https://wa.me/9160954481",
      iconClass: <MessageCircle />,
    },
    {
      name: "Mail",
      link: "mailto:mh.mahmood.alam@gmail.com",
      iconClass: <Mail />,
    },
  ],
};

const description = {
  
  skills: [
    "Team Leadership",
    "Web Development Life Cycle",
    "Cloud Developer",
    "UI Designing",

    "Microservice and distributed system design",
    "Cross platform mobile application development",
  ],
  data: [
    {
      title: "Years of experience",
      value: 10,
    },
    {
      title: "Enterprise projects",
      value: 12,
    },
    {
      title: "Rewards & Recognitions",
      value: 4,
    },
  ],
};

const experiences = {
  title: "My Experiences",
  about: [
    "Strategic Team Lead skilled in guidance and navigation of modern technology.",
    "Accustomed to driving  efficiency and effectiveness by developing, delivering and supporting strategic plans.",
    "Demonstrated skill in translating technical requirements to business solutions.",
    "Eager to contribute to team success through problem solving, attention to detail and excellent organizational skills.",
  ],
  achievements: [
    "Developed a community app for collaboration and idea sharing",
    "Enhanced the cloud services to be performant and reliable",
    "Developed a Docx to html converter for privacy policy management system saving 300+ hours of manual work",
    "Help improve user experience with better design flows",
    "Developed an automated monitoring system that checks for the system logs, analyze the longest running database queries and send weekly report to stakeholders."
  ],
  history: [
    {
      startDate: "August, 2018",
      endDate: null,
      company: "Siemens Technologies Ltd",
      url: "siemens.com",
      type: "Tech Firm",
      logo: SiemensLogoSvg,
      partnerCompany: {
        name: "WSAudiology",
        url: "https://wsa.com",
        logo: "/images/wsa_logo.png",
      },
      role: "Technical Lead Engineer",
      summary: "Managed a team of 5 developers, providing architectural guidance and identifying optimization opportunities in legacy systems. Conducted tech sessions on microservices and architectural patterns.Migrated a monolithic application to microservice architecture, leveraging containerization and orchestration tools. Collaborated with development and QA teams to design and develop robust, scalable solutions that met client requirements for functionality, scalability, and performance. Participated in the architecture, design, and implementation of backend and frontend features using Java, Xamarin, and React JS.",
      responsibilities: [
        "Managing team of 5 developers",
        "Guiding team on architectural aspects",
        "Identifying Scope of improvement on existing system",
        "Tech sessions on various microservices and architectural patterns",
        "Revamped company's landing page and registration via deploying responsive design",
        "Migrated Monolithic application to microservice architecture",
        "Updated old code bases to modern development standards, improving functionality.",
        "Contributed new features by identifying scope of improvements in existing system.",
        "Worked with software development and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability and performance.",
        "Participated in architecture, design and implementation of back-end & frontend features using Java, Xamarin and React JS.",
        "Reviewed project specifications and designed technology solutions that met or exceeded performance expectations.",
        "Developed robust, scalable, modular and API-centric infrastructures.",
      ],
      roleChanges: [
        {
          title: "Team Lead",
          date: "April, 2022",
        },
        {
          title: "Team Architect",
          date: "October, 2021",
        },
        {
          title: "Senior Software Developer",
          date: "Aug, 2018",
        },
      ],
    },
    {
      startDate: "July, 2014",
      endDate: "June, 2014",
      company: "Infosys Ltd",
      url: "infosys.com",
      type: "Tech Firm",
      logo: InfosysLogoSvg,
      partnerCompany: {
        name: "NORDSTROM",
        url: "https://www.nordstrom.com",
        logo: "/images/nordstrom_logo.png",
      },
      role: "Senior System Engineer",
      summary: "Led migration from SOAP-based backend to REST-based Spring Boot application. Developed solutions integrating customer and customer address management with Informatica MDM infrastructure. Proposed technical feasibility for new system designs and suggested optimizations for performance. Created manuals and conducted training sessions for team members on new systems. Implemented automated monitoring system for system logs and database queries, generating weekly reports for stakeholders.",
      responsibilities: [
        "Migration of SOAP based backend to Rest based spring boot application",
        "Developed solutions to manage customer and customer address around Informatica MDM infrastructure",
        "Proposed technical feasibility solutions for new system designs and suggested options for performance improvement of technical components.",
        "Created manuals and took training sessions to educate co-workers on new systems.",
      ],
      roleChanges: [
        {
          title: "Senior System Engineer",
          date: "August, 2016",
        },
        {
          title: "System Engineer",
          date: "October, 2014",
        },
        {
          title: "Intern",
          date: "Jun, 2014",
        },
      ],
    },
  ],
};

const skillSet = {
  title: "My Tech Stack",
  description:
    "Experience with wide range of technologies and commitment to staying updated to latest technologies",
  skills: [
    {
      type: "Stylesheet",
      name: "CSS",
    },
    {
      type: "Language",
      name: "Java",
    },
    {
      type: "Markup",
      name: "HTML",
    },
    {
      type: "Library",
      name: "React",
    },
    {
      type: "Language",
      name: "Javascript",
    },
    {
      type: "Framework",
      name: "Spring boot",
    },
    {
      type: "ORM",
      name: "Hibernate",
    },
    {
      type: "Cloud",
      name: "Azure",
    },
    {
      type: "Container",
      name: "Docker",
    },
    {
      type: "Orchestration",
      name: "Kubernetes",
    },
    {
      type: "Library",
      name: "GraphQl",
    },
    {
      type: "Library",
      name: "Apollo-link-state",
    },
  ],
};

const testimonials = {
  title: "Words From Fellow Teammates",
  description:
    "Discover what my team has to say about their experiences working with me",
  data: [
    {
      comment:
        "He is one of best software engineer I have ever worked with. His broad spectrum of knowledge in Java, React and cloud technologies is really recommendable. He is a true team player and has a very approachable attitude. His dedication and approach towards solving any complex problem is very good. If you have Alam by your side in your team , you can go on a war with him. I know wherever he will be wokring he will do wonders.",
      profilePic: "/images/people/souvik.jfif",
      name: "Souvik Mukherjee",
      role: "Lead Software Engineer",
      socialLink: "https://www.linkedin.com/in/souvik-mukherjee0591/",
      company: "Allegion",
      location: "Bengaluru, India",
    },
    {
      comment:
        "He is always open to learn and very dedicated to complete his task. He has very special ability in mentoring and guiding his junior in different tech stack. I found him a highly skilled and dedicated professional so I highly recommend him for company looking for great talent and dedication.",
      profilePic: "/images/people/krishna-gupta.jfif",
      name: "Krishna Gupta",
      role: "Senior Software Engineer",
      socialLink: "https://www.linkedin.com/in/krishnaguptag/",
      company: "EPAM Systems",
      location: "Bengaluru, India",
    },
    {
      comment:
        "Alam has been a prime example of talent, dedication, and the desire to study and take on difficult technical tasks. He has been a member of my team for about three years, and he served as our team's go-to resource for any new technical difficulty. He has consistently been one of my team's top contributors, and I would be happy to have him on board.",
      profilePic: "/images/people/mohit-johri.jfif",
      name: "Mohit Johri",
      role: "Senior Manager",
      company: "Siemens Healthineers",
      socialLink: "https://www.linkedin.com/in/mjohri/",
      location: "Bengaluru, India",
    },
    {
      comment:
        "He is a very quick learner, and he certainly has the ability to deliver under pressure. His commitments to the project and business growth is unwavering.",
      profilePic: "/images/people/nachiappan-k.jfif",
      name: "Nachiappan Kumarappan",
      role: "Senior Software Engineer",
      company: "Microsoft",
      socialLink: "https://www.linkedin.com/in/nachiappannk/",
      location: "Hyderabad, India",
    },
  ],
};

const GetProfileData = () => {
  return {
    intro,
    description,
    experiences,
    skillSet,
    testimonials,
  };
};

export default GetProfileData;
