import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'From Pixels to Skyline: Urban Growth Modeling and Simulation',
        description: "",
        tools: ['Python', 'Computer Simulation',],
        role: 'Data Engineer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Gemstone Price Predition',
        description: '',
        tools: ['R', 'Python(sk-learn)', "Regression Analysis", "Data Cleaning", "Data Visualization"],
        role: 'Data Scientist',
        code: 'https://drunken-boat.github.io/pdf/RegressionforJewelPrice.pdf',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Aggressive or polite?: Social Media Analysis on Metal Music',
        description: '',
        tools: ['NLP', 'Docker', 'Verification and Validation ',],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    // {
    //     id: 4,
    //     name: 'Newsroom Management',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Full Stack Developer',
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },