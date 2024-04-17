import type { Project } from "../../interfaces/Project";

export const projects: Project[] = [
    {
        name: "MoodList",
        description: "Web application that uses the Spotify API to show recommendations based on your musical tastes and various parameters such as its energy level, positivity, etc.",
        technologies: ["Svelte", "HTML", "CSS"],
        image: "/moodlist.webp",
        repoUrl: "https://github.com/MiguelHigueraDev/moodlist"
    },
    {
        name: "raccoonBot",
        description: "Multi-purpose and extensible Discord bot that increases interactions on your server, providing various utilities such as games, birthday reminders, polls, among others. Used in more than 10 servers.",
        technologies: ["TypeScript", "Node.js"],
        image: "/raccoonbot.webp",
        liveUrl:"https://raccoonbot.vercel.app",
        repoUrl: "https://github.com/MiguelHigueraDev/raccoonbot-ts"
    },
    {
        name: "Battleship JS",
        description: "Single-player battleship game where you play against a smart AI (attacking coordinates adjacent to its hits).",
        technologies: ["JavaScript", "HTML", "CSS"],
        image: "/battleship.webp",
        liveUrl: "https://battleship.miguelhiguera.dev",
        repoUrl: "https://github.com/MiguelHigueraDev/battleship-js"
    },
    {
        name: "IP Log Filter",
        description: "Lightweight application that allows you to filter a list of IPs obtained from a log to easily ban using the IPTables syntax.",
        technologies: ["React", "HTML", "CSS"],
        image: "/iplog.webp",
        liveUrl: "https://iplog-filter.vercel.app",
        repoUrl: "https://github.com/MiguelHigueraDev/ip-log-filter"
    }
]