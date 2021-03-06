import React from 'react'
import Carousel from '../components/carousel/Carousel'

const PROJECTS = [
    {   title: "TETRIACT",
        description: "TETRIACT is an web-based tetris arcade simualtor. Users can play to have their scores in the top 10.",
        details: [
            "Constructed an interactive Tetris board allowing a player to move the tetrominos using arrow keys","Employed React Hooks for state management and created a variety of custom hooks",
            "Applied  Styled Components to design the user interface"
        ],
        url: 'https://tetriact.netlify.app/',
        demo: 'to be added',
        screenshot: '../assets/tetriact.png'
    },
    {
        title: "Total Recall",
        description: "Total Recall is an arcade style memory game. Users can compete to have their score in the top 10 ten.",
        details:[
            "Implemented an algorithm through JavaScript to calculate scores based on the moves, time, and consecutive pairs.",
            "Utilized SQL to arrange the scores table in descending order to create a top 10 list.",
            "Created an interactive user interface using Responsive Css to fit common screen sizes."
        ],
        url: 'https://total-recall-game.netlify.app/',
        demo: 'demo',
        screenshot: '../assets/totalrecall.png'
       },
    {
        title: "League of Loadouts",
        description: "A League of Legends champion loadout builder for players to design a build around their playstyle.",
        details:[
            "Cached static information about in game Champions and Items using RestClient to make API calls.",
            "Created an interactive user interface applying React, Redux, React-Router, React-Hover, and custom CSS.",
            "Employed custom routes and seraizlers in a Rails API to create dynamic end-points for front end use."
        ],
        url: 'https://league-of-loadouts.netlify.app/',
        demo: 'demo',
        screenshot: '../assets/leagueofloadouts.png'
    },
    {
        title: "The Doctor Regens",
        description: "A Doctor Who fan forum for Whovians who want to discuss their favorite Doctors from the BBC series.",
        details:[
            "Developed a Rails API with endpoints for users, comments, and iterations of the Doctor.",
            "Implemented authorization and authentication using Bcrypt, JWT, and local storage.",
            "Designed a user interface utilizing React and CSS."
        ],
        url: 'https://the-doctor-regens.netlify.app/',
        demo: 'demo',
        screenshot: '../assets/thedoctorregens.png'
    },
    {
        title: "Virtual Board",
        description: "A productivity application, by providing users a virtual white board space to brainstorm, list out ideas, and draw out concepts.",
        details: [
            "Developed a Rails API with endpoints for users, whiteboards, thoughts, a to-do list, quotes, and doodles.",
            "Created a user interface utilizing object orientated JavaScript and CSS to design features and functionality."
        ],
        url: 'https://virtual-board-fa036.firebaseapp.com/',
        demo: 'demo',
        screenshot: '../assets/virtualboard.png'
    }
]

function Portfolio() {
    return (
        <div id='my-work'>
            <Carousel data={PROJECTS}/>
        </div>
    )
}

export default Portfolio
