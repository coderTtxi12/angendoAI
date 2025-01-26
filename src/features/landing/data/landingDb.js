import benefit1 from "../../../assets/images/benefit1.jpg";
import benefit2 from "../../../assets/images/benefit2.jpg";

//Data used in the Landing Page

const benefitsDb = [

    {
        id: 1,
        title: "FORMS, QUIZZES, AND SURVEY",
        subtitle: "Get up to 3.5x more data about them",
        description: "What led customers to you. Their opinions. How they decide what to buy. Data can tell you a lot and our AI analysis can help you make sense of it all.",
        image: benefit1,
        alt: "Benefit 1",
    },

    {
        id: 2,
        title: "CUSTOMER INTELLIGENCE",
        subtitle: "Use that data to guide your next move",
        description: "What led customers to you. Their opinions. How they decide what to buy. Data can tell you a lot and our AI analysis can help you make sense of it all.",
        image: benefit2,
        alt: "Benefit 2",
    },
];


const socialProofDb = [
    {
        id: 1,
        name: "John Doe",
        title: "CEO at Company",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://randomuser.me/api/port  ",
    },
    {
        id: 2,
        name: "Jane Doe",
        title: "CEO at Company",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://randomuser.me/api/portraits ",
    },
];


export { benefitsDb, socialProofDb };
export default benefitsDb; 