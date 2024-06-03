import type { Project } from "../../interfaces/Project";

export const projects: Project[] = [
    {
        name: "Ferretería Cerro Colorado",
        description: "Aplicación web SPA hecha para una ferretería local. Permite a la ferretería llevar un control de inventario y vender productos, generando DTEs (Documento Tributario Electrónico) chilenos. También permite a la ferretería ver reportes de ventas, estadísticas, y más.",
        technologies: ["PHP", "Laravel", "MySQL", "Vue", "HTML", "CSS"],
        image: "/ferreteria.webp",
    },
    {
        name: "Acortador de URL",
        description: "Acortador de URLs. Utiliza Spring Boot y Angular, separando el backend del frontend. Los enlaces se almacenan en una base de datos Postgres. Alojado en un contenedor Docker.",
        technologies: ["Spring Boot", "Java", "Angular", "TypeScript", "Docker"],
        image: "/shortener.webp",
        repoUrl: "https://github.com/MiguelHigueraDev/url-shortener"
    },
    {
        name: "dorg",
        description: "Herramienta CLI que permite organizar rápidamente archivos en una carpeta, creando carpetas y moviendo archivos para que estén ordenados por su fecha de creación. Aprendí Rust solo para hacer esto.",
        technologies: ["Rust"],
        image: "/dorg.webp",
        repoUrl: "https://github.com/MiguelHigueraDev/dorg"
    },
    {
        name: "Discord Card React",
        description: "Componente React que renderiza una tarjeta de perfil de Discord. Puede sincronizarse con tu estado real de Discord, mostrando los juegos que juegas o la música que estás escuchando. Modular y personalizable.",
        technologies: ["React", "TypeScript", "CSS", "HTML"],
        image: "/discord-card.webp",
        liveUrl: "https://discord.miguelhiguera.dev/",
        repoUrl: "https://github.com/MiguelHigueraDev/discord-card-react"
    },
    {
        name: "MoodList",
        description: "Aplicación web que utiliza la API de Spotify para mostrar recomendaciones basadas en tus gustos musicales y en diversos parámetros como su nivel de energía, positividad, etc.",
        technologies: ["Svelte", "HTML", "CSS"],
        image: "/moodlist.webp",
        repoUrl: "https://github.com/MiguelHigueraDev/moodlist"
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