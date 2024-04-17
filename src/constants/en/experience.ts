import type { Experience } from "../../interfaces/Experience";

export const experiences: Experience[] = [
    {
        date: "May 2023 - Present",
        title: "ERP Application Developer",
        company: "Ferretería Cerro Colorado",
        description: "Design and creation of a SPA inventory and sales management application with integrated electronic billing with the Chilean SII. Deployed using nginx on a Linux server.",
        technologies: ["PHP", "Laravel", "Vue", "Splade", "MySQL"]
    },
    {
        date: "November 2022 - May 2023",
        title: "Full Stack Laravel Developer",
        company: "Municipalidad de Los Ángeles",
        description: "Development of a survey application, aimed at the city's population. The application handles both the creation and distribution of surveys, and the visualization of statistics. Application integrated with ClaveÚnica and uses geolocation for registration and login, to validate identities.",
        technologies: ["PHP", "Laravel", "jQuery", "MySQL"]
    },
    {
        date: "Febrero 2022 - Marzo 2022",
        title: "Laravel Full Stack Internship",
        company: "Municipalidad de Los Ángeles",
        description: "Porting of a legacy supplier management system to PHP using Laravel and jQuery.",
        technologies: ["PHP", "Laravel", "jQuery", "MySQL"]
    }
]