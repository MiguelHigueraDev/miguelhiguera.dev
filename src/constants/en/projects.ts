import type { Project } from "../../interfaces/Project";

export const projects: Project[] = [
    {
        name: "Ferretería Cerro Colorado",
        description: "Single-page application made for a local hardware store. It allows the store to keep track of inventory and to sell products, generating Chilean SII DTEs (Documento Tributario Electrónico). It also allows the store to view sales reports, to see statistics, and more.",
        technologies: ["PHP", "Laravel", "MySQL", "Vue", "HTML", "CSS"],
        image: "/ferreteria.webp",
    },
    {
        name: "URL Shortener",
        description: "Simple URL shortener. Uses Spring Boot and Angular, providing a separation between backend and frontend. Links are stored in a Postgres database. Hosted in a Docker container.",
        technologies: ["Spring Boot", "Java", "Angular", "TypeScript", "Docker"],
        image: "/shortener.webp",
        liveUrl: "https://create.misft.me",
        repoUrl: "https://github.com/MiguelHigueraDev/url-shortener"
    },
    {
        name: "dorg",
        description: "Experimental CLI tool that allows you to quickly organize files in a folder, creating folders and moving files so they are sorted by their creation date.",
        technologies: ["Rust"],
        image: "/dorg.webp",
        repoUrl: "https://github.com/MiguelHigueraDev/dorg"
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
        name: "MoodList",
        description: "Web application that uses the Spotify API to show recommendations based on your musical tastes and various parameters such as its energy level, positivity, etc.",
        technologies: ["Svelte", "HTML", "CSS"],
        image: "/moodlist.webp",
        repoUrl: "https://github.com/MiguelHigueraDev/moodlist"
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