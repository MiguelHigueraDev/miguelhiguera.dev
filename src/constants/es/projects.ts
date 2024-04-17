import type { Project } from "../../interfaces/Project";

export const projects: Project[] = [
    {
        name: "MoodList",
        description: "Aplicación web que utiliza la API de Spotify para mostrar recomendaciones basadas en tus gustos musicales y en diversos parámetros como su nivel de energía, positividad, etc.",
        technologies: ["Svelte", "HTML", "CSS"],
        image: "/moodlist.webp",
        repoUrl: "https://github.com/MiguelHigueraDev/moodlist"
    },
    {
        name: "raccoonBot",
        description: "Bot de Discord multifunción y extensible que aumenta las interacciones en tu servidor, proporcionando varias utilidades como juegos, recordatorio de cumpleaños, encuestas, entre otras. Utilizado en más de 10 servidores.",
        technologies: ["TypeScript", "Node.js"],
        image: "/raccoonbot.webp",
        liveUrl:"https://raccoonbot.vercel.app",
        repoUrl: "https://github.com/MiguelHigueraDev/raccoonbot-ts"
    },
    {
        name: "Battleship JS",
        description: "Juego de combate naval de un jugador en el que se puede jugar contra una IA que ataca de manera inteligente (atacando coordenadas adyacentes a sus impactos).",
        technologies: ["JavaScript", "HTML", "CSS"],
        image: "/battleship.webp",
        liveUrl: "https://battleship.miguelhiguera.dev",
        repoUrl: "https://github.com/MiguelHigueraDev/battleship-js"
    },
    {
        name: "IP Log Filter",
        description: "Aplicación ligera que permite filtrar una lista de IPs obtenida de un log, para poder fácilmente banear utilizando la sintaxis de IPTables.",
        technologies: ["React", "HTML", "CSS"],
        image: "/iplog.webp",
        liveUrl: "https://iplog-filter.vercel.app",
        repoUrl: "https://github.com/MiguelHigueraDev/ip-log-filter"
    }
]