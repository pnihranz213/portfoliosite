/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Patrick Nihranz",
  title: "Hi, I'm Patrick!",
  subTitle: emoji(
    "A machine learning engineer having an experience of building successful models using tools like Sci-Kit Learn, Keras, Pytorch, and Tensorflow. I am passionate about mathematics and analytics"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1NKd-Kbll6hzuMj5XlhHlcGZKSqVxnRVn/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pnihranz213",
  linkedin: "https://www.linkedin.com/in/patrick-nihranz/",
  gmail: "pnihranz213@gmail.com",
  medium: "https://medium.com/@pnihranz213",
  kaggle: "https://www.kaggle.com/patricknihranz",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Machine Learning Engineer with a passion for mathematics and analytics",
  skills: [
    emoji(
      "⚡ Develop complex computer vision models using tools like OpenCV, Keras, and Tensorflow"
    ),
    emoji("⚡ Give data driven insights on business problems using Python"),
    emoji(
      "⚡ Find high quality predictive features using statistical analysis and machine learning"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Sci-Kit Learn",
      fontAwesomeClassname: "custom-scikit"
    },
    {
      skillName: "Tensorflow",
      fontAwesomeClassname: "custom-tensorflow"
    },
    {
      skillName: "OpenCV",
      fontAwesomeClassname: "custom-opencv"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "custom-pandas"
    },
    {
      skillName: "Pytorch",
      fontAwesomeClassname: "custom-pytorch"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fa fa-terminal"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/GeorgiaTech.png"),
      subHeader:
        "Master of Science in Computer Science / Master of Science in Analytics",
      duration: "August 2024 - December 2027",
      desc: "Participated in the research of advanced time-series forecasting models and computer vision algorithms.",
      descBullets: [
        "Bayesian Statistics",
        "Time-Series Analysis",
        "Simulation and Modeling",
        "Deep Learning",
        "Computer Vision",
        "Machine Learning",
        "Data Analytics"
      ]
    },
    {
      schoolName: "Kettering University",
      logo: require("./assets/images/Kettering.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2021 - December 2023",
      desc: "Rewarded with distinction for excellent undergraduate thesis in computer vision. Studied and concentrated in machine learning and data science.",
      descBullets: [
        "Intro to Data Science",
        "Machine Learning",
        "Operating Systems",
        "Cloud Computing",
        "Software Engineering",
        "UI/UX Design"
      ]
    },
    {
      schoolName: "Oakland University",
      logo: require("./assets/images/ouseal.jpg"),
      subHeader: "Actuarial Science",
      duration: "August 2019 - September 2021",
      desc: "Studied advanced mathematical concepts, finance, and accounting",
      descBullets: [
        "Calculus",
        "Probability",
        "Statistics",
        "Finance",
        "Accounting",
        "Economics"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Science",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Validaion Engineer / Data Scientist",
      company: "Magna International",
      companylogo: require("./assets/images/magna.png"),
      date: "January 2022 – Present",
      descBullets: [
        " Researched, developed, and monitored KPIs for various state-of-the-art computer vision models involving in-cabin driver safety.",
        "Independently created, trained, and validated computer vision models with over 95% accuracy.",
        "Led projects to train over 85% of onsite team in new technologies.",
        "Analyzed and developed presentations on KPIs and performance of various machine learning models.",
        "Created automation software leading to an increase in team productivity of 33%"
      ]
    },
    {
      role: "Software Engineer / Marketing Specialist",
      company: "United CNC Machining",
      companylogo: require("./assets/images/ucnc.png"),
      date: "June 2021 – Present",
      descBullets: [
        "Researched, developed and deployed automations and various models to increase efficiency of manufacturing process.",
        "Developed and deployed several automation models to assist office staff and quality departments in day to day activity.",
        "Led market research investigations and billboard design to increase customer leads by an estimated 12%.",
        "Deployed on-site FTTP servers serving tasks and prints directly to machinists PCs, causing an estimated 22% increase in productivity"
      ]
    },
    {
      role: "Co-Founder and CTO",
      company: "Dabba Eats",
      companylogo: require("./assets/images/dabba.png"),
      date: "August 2021 – Present",
      desc: "Lead the development of a mobile application that connects local chefs with customers in the area.",
      descBullets: [
        "Developed and deployed a mobile application that connects local chefs with customers in the area.",
        "Developed and deployed a website to increase customer reach and engagement.",
        "Led the development of a marketing campaign that increased customer base.",
        "Managed and organized launch and marketing events to increase customer engagement."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "",

  achievementsCards: [
    {
      title: "Codecademy Machine Learning Engineer Professional Certificate",
      subtitle:
        "Learned the basics of machine learning and deep learning using Python and machine learning libraries.",
      image: require("./assets/images/codecademy_logo.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: []
    },
    {
      title: "Google Cloud Skills Boost Data Analyst Path",
      subtitle:
        "Completed the Google Cloud Skills Boost Data Analyst Path to learn about the many applications of data analytics",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: []
    },

    {
      title: "IBM Data Science Professional Certificate",
      subtitle:
        "Learned the basics of data science and machine learning using Python and machine learning libraries.",
      image: require("./assets/images/ibm_logo.jpg"),
      imageAlt: "PWA Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Some Articles that I have written about Data Science, Machine Learning, and Artificial Intelligence.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (586) 212-8427",
  email_address: "pnihranz213@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
