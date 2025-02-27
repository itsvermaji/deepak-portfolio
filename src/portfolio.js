/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Deepak's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Deepak Verma Portfolio",
    type: "website",
    url: "#",
  },
};

//Home Page
const greeting = {
  title: "Deepak Verma",
  logo_name: "DeepakVerma",
  nickname: "itsvermaji",
  subTitle:
    "A passionate developer with a knack of chasing challenging problems in the field of Full Stack Development. My goal is to create impactful products, that are efficient and scalable.",
  resumeLink:
    "https://drive.google.com/file/d/1PEicg3MVOM39Ub_X2UqoyN1VHQlERZPm/view?usp=sharing",
  portfolio_repository: "#",
  githubProfile: "https://github.com/itsvermaji",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/itsvermaji",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/deepak-verma-6a5083189/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:deepakmail1@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Angular, React",
        "⚡ Creating application backend in Spring Boot, Node.js, Express",
      ],
      softwareSkills: [
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
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
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            backgroundColor: "#000000",
            color: "#0F0F11",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
      ],
    },
    {
      title: "Deployments & Infra",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience in deploying full-stack applications on cloud platforms eg. Heroku, Github Pages, Netlify",
        "⚡ Experience in automating deployment process by creating CI/CD pipelines using Jenkins",
        "⚡ Experience in developing containerized application using docker and docker-compose",
      ],
      softwareSkills: [
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#D24939",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#430098",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
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
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/itsvermaji/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/trevor_pb",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/verma_deepak",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/vermaji",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Malaviya National Institute of Technology, Jaipur (NIT Jaipur)",
      subtitle: "B.Tech. in Computer Science and Engineering",
      logo_path: "mnit_logo.png",
      alt_name: "NIT Jaipur",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, Operating Systems, Object Oriented Programming, Computer Networks, AI/ML etc.",
        "⚡ I learnt few few languages like C, C++, Java, Python, HTML, CSS, JavaScript/TypeScript",
      ],
      website_link: "https://mnit.ac.in",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Experienced Full Stack Developer with a track record of delivering end-to-end products for both startups and established companies. Proficient in designing Figma prototypes, building backend systems, and optimizing frontend performance using Angular and React. Skilled in database schema design (MySQL, MySQL), API development (Node.js, Spring Boot), and implementing CI/CD pipelines with Jenkins and containerized deployments using Docker.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Morgan Staney",
          company_url: "https://www.morganstanley.com",
          logo_path: "morgan_staney_logo.jpeg",
          duration: "Aug 2022 - Present",
          location: "Bengaluru, Karnataka, IND",
          description: [
            "Developed a scalable Stock Analyzer app, which reduces stock analysis time from 45 minutes to sub minute.",
            "Redesigned the frontend by implementing a state-based data management approach using NgRx in Angular, resulting significant reduction in code complexity and debugging efforts, 25% faster page load times.",
            "Leveraging KDB+ for real-time calculations and Spring Boot, enables the optimization of fast data retrieval and processing for microservices, taking response time within 200ms.",
            "Containerized applications, integrated SonarQube for 90% code coverage and 700+ automated unit and integration tests using Jasmine and Cypress, streamlining deployment through CI/CD pipelines on Jenkins.",
            "Reviewed code, mentored peer developers, and facilitated calls with business stakeholders to gather application requirements and assign tasks to team members.",
          ],
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Backend Developer Intern",
          company: "SpeEdLabs Teevra Edutech Pvt. Ltd",
          company_url:
            "https://www.linkedin.com/company/speedlabs/posts/?feedView=all",
          logo_path: "speedlabs_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "Remote",
          description: [
            "Spearheaded the development of an e-kart platform, enabling institute admins to upload 500+ courses through the admin portal, which students can purchase from student portal, resulting in a 30% increase in the revenue.",
            "Engineered the database schemas and 45+ APIs using MySQL and Node.js which facilitates both admins and students to buy and sell courses.",
            "The Admin Portal streamlines the registration of 1,000+ students, enables the upload of 20,000+ videos, automates the issuance of 1,000+ coupons with customizable limits and expiry dates, and processes a record of 50,000+ orders.",
            "Successfully integrated Razorpay APIs with the student portal, accelerating the course checkout process enabling 99.9% secure transactions, with a peak of 500+ concurrent checkouts per hour.",
            "Enabled students to apply coupons to courses, add reviews to purchased courses, and access order history on the portal",
          ],
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects utilize the latest tools and technologies used in the industry. I continuously create new projects and refine existing ones in my free time, then deploy them on the cloud.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "deepak_profile_photo.jpg",
    description:
      "I have hands-on experience with Node.js, Spring, React, Angular, and app deployments. If you think I can help you with my expertise, please use below links to contact me :)",
  },
  addressSection: {
    title: "Address",
    subtitle: "Bengaluru, Karnataka, IND",
    locality: "Janatha Colony, Carmelaram",
    country: "IND",
    region: "Karnataka",
    postalCode: "560035",
    streetAddress: "Ruby Residency",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/4nCq37KEsMChEQJC8",
  },
  phoneSection: {
    title: "",
    subtitle: "",
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
  // publicationsHeader,
  // publications,
  contactPageData,
};
