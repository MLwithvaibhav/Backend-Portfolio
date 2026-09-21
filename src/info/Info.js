import self from "../img/self.png"
// import mock1 from "../img/mock1.png"
// import mock2 from "../img/mock2.png"
// import mock3 from "../img/mock3.png"
// import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"

import hltcrImg from "../img/HLTCR_portfolio.jpeg";
import ecomImg from "../img/Ecom_portfolio.jpeg";
import vcScoutImg from "../img/vc_scout_portfolio.jpeg";
import webServerImg from "../img/Web_server_portfolio.jpeg";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0, 210, 255)", "rgb(58, 71, 213)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Vaibhav",
    lastName: "Sisodia",
    initials: "VS", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Java Backend Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🧠',
            text: 'converting ideas into APIs'
        },
        {
            emoji: '📍',
            text: 'based in India'
        },
        {
            emoji: '⚙️',
            text: 'Backend & Java Developer'
        },
        {
            emoji: "📧",
            text: "thevaibhavsisodia17@gmail.com"
        }
    ],
    socials: [
        
        {
            link: "https://instagram.com/isthatvaibhavv",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/MLwithvaibhav",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/vaibhav-sharma-705280320",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Vaibhav. I'm a Computer Science student with a strong focus on backend engineering. I specialize in building robust RESTful APIs and backend services using Java and Spring Boot, and I'm actively expanding my knowledge into Cloud Infrastructure and DevOps practices.",
    skills: {
    proficientWith: [
        'java', 
        'spring boot', 
        'rest apis', 
        'git', 
        'github', 
        'sql', 
        'postman',
        'python',
        'flask'
    ],
    exposedTo: [
        'docker', 
        'linux',  
        'javascript', 
        'react',
        'ML'
    ]
}
    ,
    hobbies: [
    {
        label: 'football',
        emoji: '⚽'
    },
    {
        label: 'music',
        emoji: '🎧'
    },
    {
        label: 'gaming', 
        emoji: '🎮'
    },
    {
        label: 'tech blogs',
        emoji: '📖'
    }

        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Healthcare AI",
            live: "https://heatlhcare-ai.onrender.com/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/MLwithvaibhav/Heatlhcare-AI.git", // this should be a link to the **repository** of the project, where the code is hosted.
            image: hltcrImg
        },
        {
        title: "E-Commerce Platform (Spring Boot)",
        source: "https://github.com/MLwithvaibhav/Ecom-project.git",
        image: ecomImg
    },
    {
        title: "VC Scout",
        source: "https://github.com/MLwithvaibhav/VC-scout.git",
        image: vcScoutImg
    },
    {
        title: "Custom Multi-threaded Web Server",
        source: "https://github.com/MLwithvaibhav/WEB-SERVER-JAVA-.git",
        image: webServerImg
    }
    ]
}