export const educationData: EducationDataItem[] = [
    {
        id: 1,
        date: "2008-2013",
        school: "Polotsk State University",
        education: "Construction Engineer",
        socialLink: "https://www.psu.by/en/",
        description: [
            "specialty -industrial and civil engineering",
            "department - building structures"
        ]
    },
    {
        id: 2,
        date: "04-08.2021",
        school: "Self-education",
        education: "JavaScript, HTML",
        socialLink: "https://www.codewars.com/users/Snezhana%20Korsak",
        description: [
            "self-study of html & css by books, video tutorials",
            "learning javascript from the book \"learn.javascript\" and video tutorials",
            "solving problems on codewars, js.checkio websites"
        ]
    },
    {
        id: 3,
        date: "08-12.2021",
        school: "IT-INCUBATOR",
        education: "Frontend Developer/React",
        socialLink: "https://it-incubator.by",
        description: [
            "learning React, React-Redux, TypeScript, Redux-Thunk, Axios, Redux Form, " +
            "material UI library",
            "learning javascript (advanced level)",
            "2 graduation projects:",
            "the first project is \"Todolist\". This project implements work with the server " +
            "(CRUD operations with a list of tasks). The material UI library is used to style the project",
            "the second project is the \"Social Network\". The project is developed on class components. The " +
            "project implements the possibility of organizing via a server and verifying form data. The list of " +
            "users also comes from the server",
        ]
    },
    {
        id: 4,
        date: "11-12.2021",
        school: "REDEV EDUCATION",
        education: " JavaScript React/React ",
        socialLink: "https://www.instagram.com/redev_courses/?hl=ru",
        description: [
            "checking and consolidating knowledge",
            "preparing for interviews"
        ]
    },
    {
        id: 5,
        date: "01-03.2022",
        school: "iTechArt/Students Lab",
        education: "Internship",
        socialLink: "https://www.itechart.by/students-lab/",
        description: [
            "creating a website with a weather forecast",
            "this project has implemented:",
            "weather display for the current location, as well as weather search by city name, coordinates, " +
            "ZIP code",
            "displaying the weather for the entered city in the form\n" +
            "of a table, a weather graph map and a weather graph with the ability\n" +
            "to compare the temperature forecast for several cities on one graph",
            "ability to save and restore favorite cities with the ability to view a list of favorite cities in " +
            "a separate panel",
            "selection of units of measurement, theme, language"
        ]
    },
]

export const worksData: WorkDataItem[] = [
    {
        id: 1,
        date: "2013-2021",
        company: "construction sphere",
        specialization: "Construction Engineer",
        socialLink: "https://kjproject.by",
        description: [
            "Worked for 5 different companies in construction field and took part in the development of\n" +
            "industrial and civil construction projects.",
            "Main responsibilities were:",
            "development of design documentation;",
            "understanding and reading of design documentation;",
            "knowledge of specialized software;",
            "ability to use regulatory documentation"
        ]
    },
    {
        id: 2,
        date: "2021- Present",
        company: "Freelance",
        specialization: "Frontend Developer",
        socialLink: "https://www.linkedin.com/in/snezhana-korsak/",
        description: [
            "creating apps using React and TypeScript, Redux state management and using REST API",
            "refactoring, bug fixing, registration and loginform creation",
            "work with Hooks",
            "reusable components development"
        ]
    },
    {
        id: 3,
        date: "January- March 2022",
        company: "iTechArt",
        specialization: "Internship",
        socialLink: "https://www.itechart.by/",
        description: [
            "creating a website with a weather forecast",
            "this project has implemented:",
            "weather display for the current location, as well as weather search by city name, coordinates, " +
            "ZIP code",
            "displaying the weather for the entered city in the form\n" +
            "of a table, a weather graph map and a weather graph with the ability\n" +
            "to compare the temperature forecast for several cities on one graph",
            "ability to save and restore favorite cities with the ability to view a list of favorite cities in " +
            "a separate panel",
            "selection of units of measurement, theme, language"
        ]
    },

]

export const projectsData: ProjectDataItem[] = [
    {
        id: 1,
        projectName: "Forecast",
        techList: ["React", "Redux", "Axios", "Leaflet", "Recharts", "Weather API", "SASS"],
        socialLinks: ["https://github.com/SnezhanaKorsak/forecast", "https://snezhanakorsak.github.io/forecast"],
        description: "A web application that shows the weather forecast for the week for the selected location. " +
            "It is possible to provide information in the form of a table, graph or map. Save locations in your " +
            "favorites list for quick search. The application supports English and Russian languages, and it is also" +
            " possible to choose a dark or light theme."
    },
    {
        id: 2,
        projectName: "Todo list",
        techList: ["React", "Redux", "Axios", "TypeScript", "Material UI", "REST API"],
        socialLinks: ["https://github.com/SnezhanaKorsak/todolist", "https://snezhanakorsak.github.io/todolist"],
        description: "It is a list of tasks. You can combine tasks into groups, delete/add new ones, as well as " +
            "change their names. There is a filter for sorting tasks by the degree of their completion"
    },
    {
        id: 3,
        projectName: "Survey Website",
        techList: ["React", "Redux", "Axios", "TypeScript"],
        socialLinks: ["https://github.com/SnezhanaKorsak/survey-application",
            "https://snezhanakorsak.github.io/survey-application/"],
        description: "A simple survey website. All answers are saved and displayed at the end of the test in a separate tab."
    },
    {
        id: 4,
        projectName: "Social Network",
        techList: ["React", "Redux", "Axios", "Class Components", "TypeScript"],
        socialLinks: ["https://github.com/SnezhanaKorsak/network", "https://snezhanakorsak.github.io/network/#/profile/"],
        description: "This website project is a possible representation of a social network like VKONTAKTE or Facebook." +
            " The project is in a development project"
    },
]

export const contactsData: ContactDataItem[] = [
    {
        id: 1,
        iconName: "faMarker",
        contactType: "Name",
        contactValue: "Snezhana Korsak"
    },
    {
        id: 2,
        iconName: "faMapMarkedAlt",
        contactType: "Location",
        contactValue: "Minsk/Belarus"
    },
    {
        id: 3,
        iconName: "faPhone",
        contactType: "Call Me",
        contactValue: "+375(33)6454044"
    },
    {
        id: 4,
        iconName: "faLocationArrow",
        contactType: "Email Me",
        contactValue: "snezhana.korsak@gmail.com"
    },
]

//types

export type EducationDataItem = {
    id: number;
    date: string;
    school: string;
    education: string;
    socialLink: string;
    description: string[]
}

export type WorkDataItem = {
    id: number;
    date: string;
    company: string;
    specialization: string
    socialLink: string;
    description: string[]
}

export type ProjectDataItem = {
    id: number;
    projectName: string;
    socialLinks: string[];
    techList: string[];
    description: string
}

export type ContactDataItem = {
    id: number;
    iconName: string;
    contactType: string;
    contactValue: string
}