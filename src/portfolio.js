/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Riya's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Riya Dev Varshney Portfolio",
    type: "website",
    url: "https://github.com/Riyadevvarshney11/portfoliowebsite",
  },
};

//Home Page
const greeting = {
  title: "Riya Dev Varshney",
  logo_name: "Riya Dev Varshney",
  nickname: "Riya",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1iO_xgbILO3w8BLfOd0D5XHpD6qpdiT0p/view?usp=sharing",
  portfolio_repository: "https://github.com/Riyadevvarshney11/portfoliowebsite",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Riyadevvarshney11",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/riya-dev-varshney-361304197/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCJufyaQsrC6kWyZVp1mE7gA",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:riyadevvarshney11@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/RiyaDevVarshne1",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/riyadev.varshney/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/riyadevvarshney11/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web  applications ",
        "⚡ Building resposive website front end using React",
        "⚡ Designing highly attractive user interface for web applications",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Hosting Websites on different platforms like Heroku, AWS etc",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "",
          fontAwesomeClassname: "",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "",
          fontAwesomeClassname: "",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "",
          fontAwesomeClassname: "",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "",
          fontAwesomeClassname: "",
          style: {
            color: "#FF9900",
          },
        },
      ],
    },
    {
      title: "Problem Solving",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Well Versed with all the data strutures like arrays, LinkedList, strings, Trees, Dynamic Programming, Graphs, Tries, Stck and Queues.",
        "⚡ Made projects using C++, Java, Python.",
        "⚡ I solve DSA problems on Leetcode, GeeksForGeeks, CodeChef and Codeforces",
      ],
      softwareSkills: [
        {
          skillName: "C/C++",

          fontAwesomeClassname: "file-icons:c",
          style: {
            color: "#306998",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#306998",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "",
          fontAwesomeClassname: "",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "",
          fontAwesomeClassname: "",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "",
          fontAwesomeClassname: "",
          style: {
            color: "#FF9900",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/riyadevvarshney1",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/riya110302",
    },

    {
      siteName: "GeeksforGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#323754",
      },
      profileLink:
        "https://auth.geeksforgeeks.org/user/riyadevvarshney11/profile",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Delhi Technological University",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, OOPS, SE etc.",
        "⚡ Apart from this, I have done courses on DSA, Data Science,  and Full Stack Development.",
        "⚡ I have participated in various Hackthons and won few of them. I badged 1st Runner Up position at HackNagpur Hackathon among 800+ students all over the country and, I was a Second Runner Up at Abhigyan Hackathon among 500+ students.",
      ],
      website_link: "http://dtu.ac.in/",
    },
    {
      title: "Universal Public School",
      subtitle: "High School",
      logo_path: "ups.png",
      alt_name: "IIITDM Kurnool",
      duration: "2007 - 2019",
      descriptions: [
        "⚡ I have studied subjects like Physics, Mathematics, Chemistry, Computer Science and English.",
        "⚡ I badged 1st position at CBSE 10th and 12th Board at my school.. I have received award from respected director for consistently best performance in academics.",
        "⚡ Apart from this, I was the Acdemic Head of my school. I have hosted various events and won 5+ debating competetions.",
      ],
      website_link: "https://universalpublicschool.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "1st Runner-Up",
      subtitle: "HackNagpur Hackathon",
      logo_path: "hacknagpur.png",
      certificate_link:
        "https://drive.google.com/file/d/1fCyRbu7Za784QmNYXr7zXFqy6hctdh6G/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#8C151599",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/",
        },
      ],
      display: true,
    },
    {
      title: "2nd Runner-Up",
      subtitle: "Abhigyan Hackathon",
      logo_path: "abhigyan.png",
      certificate_link:
        "https://drive.google.com/file/d/1VrfPFEa7pGDOJ1Mg-NVGoCQHt8pp2b6f/view?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Google Hashcode 2021",
      subtitle: "Google Competetion",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/15nJYnnaD327n0-k5g9fkrcb1Se5snoZ3/view?usp=sharing",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Microsoft Classroom AI Series",
      subtitle: "- Rohini Srivastava",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1xW-tQBIl987QOdZeMupZkbd3O3IC9upq/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Web Development Masterclass",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://drive.google.com/file/d/1Xk8tzJ_KH5CT0KoylBael3LkhD-G7LzF/view?usp=sharing",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Algo++ (Data Structures Course)",
      subtitle: "Coding Blocks",
      logo_path: "cb.png",
      certificate_link:
        "https://drive.google.com/file/d/1pUnG5jwo8TBgR15Jj20awQ4H4Hbi0VLN/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with Microsoft as a Mentee at Microsoft Engage Mentorship Program. I have also worked with some companies as a Web Developer. I have partcipated and mentored various hackathons as well. I love organising events and that is why I am also involved with many communities as a representative.",
  header_image_path: "expage.png",
  sections: [
    {
      title: "Internships and Work Experience",
      experiences: [
        {
          title: "Mentee",
          company: "Microsoft Engage Mentorship Program",
          company_url: "https://microsoft.acehacker.com/engage2021/",
          logo_path: "microsoft_logo.png",
          duration: "June 2021",
          location: "Online",
          description:
            "It was a month long program focused on building Microsoft Teams Clone with the provision of mentors, AMA sessions, workshops and assignments. I Created a responsive video calling platform under Microsoft Engage Mentorship Program that allows 2+ users to connect with each other via a video/audio call/ text message (during, before and after the video call). It supports screen sharing, screen recording, real time chat system, creation of group channels with enhanced UI.             Technology Stack: WebRTC | Peerjs | Socket.io | Node.js | Chatengine.io | MongoDB ",

          color: "#fc1f20",
        },
        {
          title: "Frontend Developer",
          company: "Eventers",
          company_url: "https://www.eventersapp.com/",
          logo_path: "eventers_logo.png",
          duration: "April 2021 - May 2021",
          location: "Work from Home",
          description:
            "Eventers aims at building an intuitive platform, for digitalizing event management work for organizers and vendors. I Designed and developed the e-commerce site of the company (front-end), currently having 2500+ visitors and 1000+ customers. I worked on the UI/ UX using HTML, CSS, Bootstrap and Figma.",
          color: "#0879bf",
        },
        {
          title: "Software Developer",
          company: "AccioJob",
          company_url: "https://acciojob.com/",
          logo_path: "accio_logo.jpeg",
          duration: "February 2021 - March 2021",
          location: "Work from Home",
          description:
            "AccioJob is a startup run by IIT Delhi Alumni and funded by Y Combinator that trains students for tech roles.I revamped the company's main website using HTML, CSS, Bootstrap and Figma. (front-end). \n I researched and designed 150+ questions based on Data Structures and Algorithms for the platform.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Senior Associate",
          company: "Seniors Se Mulaquaat",
          company_url: "https://www.linkedin.com/company/seniors-se-mulaquaat/",
          logo_path: "ssm.png",
          duration: "December 2021 - Present",
          location: "Delhi Technological Uniersity, Delhi",
          description:
            " Seniors Se Mulaaquaat is an alumni meet event for bringing 100+ DTU Alumni (pass out from 1996 batch onwards) together with 400+ DTU students for networking & fruitful interactions. I have conducted scceful meet-up sessions with alumni with DTU students where they get an opportunity to learn from the experience of the seniors. ",
          color: "#ee3c26",
        },
        {
          title: "Mentor",
          company: "Mission Qabil",
          company_url: "https://www.linkedin.com/company/75099782/",
          logo_path: "mq.png",
          duration: "Nov 2021- Present",
          location: "Work From Home",
          description:
            " Mission Qabil is an intiative for training and development of differently-abled students for internship and placement under Equal Opportunity Cell, DTU. I have mentored 100+ students till now. We conduct regular sessions with them and help them imporve their coding skills. I have helped them in building development projects. I also worked on their personality development by organizing varuious group discussions, debate sessions with them.",
          color: "#0071C5",
        },
        {
          title: "Event Co-ordinator",
          company: "TechQuest 2020",
          company_url: "https://www.linkedin.com/company/75099782/",
          logo_path: "dcoder.jpeg",
          duration: "August 2021",
          location: "Online Event",
          description:
            "TechQuest 2020 was a three-day Tech Fest full of exciting events, which was a perfect blend of fun and technical skills.  It was a three-day Tech Fest full of exciting events, which turned out to be the perfect blend of fun and technical skills. Around 3000+ students all over the country from various colleges registered for various events and brought the tech geek hidden inside them out.  ",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Communities",
      experiences: [
        {
          title: "President",
          company: "D_CODER",
          company_url: "https://www.teamdcoder.com/",
          logo_path: "dcoder.jpeg",
          duration: "May 2021 - Present",
          location: "Delhi Technological University (Formerly DCE), Delhi",
          description:
            "D_CODER is a Coding Society of DTU, dedicated to the advancement of software innovation and excellence for the benefit of the students. It aims to build a community of skilled people in the university coming together for the benefit of all. It provides our members a platform to learn new skills and brush up on their existing ones.",
          color: "#4285F4",
        },
        {
          title: "Administrator",
          company: "Cognitive Minds",
          company_url: "https://www.linkedin.com/company/cognitive-minds-dtu/",
          logo_path: "cm.jpeg",
          duration: "May 2021 - Present",
          location: "Delhi Technological University (Formerly DCE), Delhi",
          description:
            "Cognitive Minds” is a personality development society. Society aima at turning an individual into a person who is “socially likeable and personally confident”, who has a repute among his friends and family, who speaks clearly and expresses himself to the throng with panache, has a strong self-image and a good listening ability. To add a zing, this automatically paves your way to phenomenal interview and GD experiences.",
          color: "#D83B01",
        },
        {
          title: "Mentee",
          company: "Codess Cafe",
          company_url: "https://www.linkedin.com/company/codesscafe/",
          logo_path: "codesscafe.jpeg",
          duration: "February 2021 - Present",
          location: "",
          description:
            "Pro-bono mentorship initiative by Aarnav Jindal  for collegiate women in tech to help them unlock their true potential with personalized mentorship. resources and interview sessions. It is a community of 200+ girls form various colleges. It provides a platform to all the girls for developing all together.",
          color: "#000000",
        },
        {
          title: "Mentee",
          company: "Girlscrript Winter Of Contributing(GWOC)",
          company_url: "https://gwoc.girlscript.tech/",
          logo_path: "gwoc.png",
          duration: "September 2021 - Present",
          location: "Work From Home",
          description:
            "GirlScript is a non-profit organization that encourages diversity in technical education by providing reservations for women and underrepresented groups in society.It started as a project but eventually gained enormous momentum to become India's First and Biggest Technical Community.",
          color: "#0C9D58",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   title: "Publications",
//   description:
//     "I have worked on and published a few research papers and publications of my own.",
//   avatar_image_path: "projects_image.svg",
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "gp.png",
    description:
      "I am available on almost every social media. You can message me, I can help you with problem solving and Web Development.",
  },
  blogSection: {
    title: "",
    subtitle:
      "I am an enthusiastic coder and loves to connect with different coding communities. I am open for any tech related opportunity.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7678582314",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  //publicationsHeader,
  contactPageData,
};
