import type { Experience } from "../../interfaces/Experience";

export const experiences: Experience[] = [
    {
        date: "Mayo 2023 - Actualidad",
        title: "Desarrollador Aplicación Facturación",
        company: "Ferretería Cerro Colorado",
        description: "Diseño y creación de aplicación SPA de manejo de inventario y ventas con facturación electrónica integrada con el SII, con sistema de roles y permisos. Desplegada utilizando nginx en un servidor Linux.",
        technologies: ["PHP", "Laravel", "Vue", "Splade", "MySQL"]
    },
    {
        date: "Noviembre 2022 - Mayo 2023",
        title: "Desarrollador Laravel Full Stack",
        company: "Municipalidad de Los Ángeles",
        description: "Desarrollo de una aplicación de encuestas, orientada a la población de la ciudad. Aplicación maneja tanto la creación como distribución de las encuestas, y la visualización de las estadísticas. Aplicación integrada con ClaveÚnica para registro e inicio de sesión, además de geolocalización.",
        technologies: ["PHP", "Laravel", "jQuery", "MySQL"]
    },
    {
        date: "Febrero 2022 - Marzo 2022",
        title: "Práctica laboral Laravel Full Stack",
        company: "Municipalidad de Los Ángeles",
        description: "Porte de sistema de manejo de proveedores antiguo (legacy) a PHP utilizando Laravel y jQuery.",
        technologies: ["PHP", "Laravel", "jQuery", "MySQL"]
    }
]