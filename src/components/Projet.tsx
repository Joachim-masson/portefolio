import ProjectCard from "./ProjectCard";

import "./Projet.css";

export interface ProjetType {
  title: string;
  subTitle: string;
  imagePreview: string;
  images: string[]; // Un tableau de chaînes de caractères
  stack: string;
  github: string;
  site: string;
  commentProjet: string;
  commentContrainte: string;
  commentLearn: string;
  video: string;
}

const projets: ProjetType[] = [{
  title: "Tatooine Interim",
  subTitle: "Hackathon - 24 heures",
  imagePreview:"../assets/Projets/TatooineInterim.PNG",
  images: [
    "../assets/Projets/TatooineInterim-2.PNG",
    "../assets/Projets/TatooineInterim-3.PNG", 
    "../assets/Projets/TatooineInterim-4.PNG",
  ],
  stack: "React - JS - CSS" ,
  github: "https://github.com/Joachim-masson/Tatooine_Interim",
  site:"Soon",
  commentProjet:"Site web créé en 24h lors d'un Hackathon dans le cadre de ma formation DWWM. Un projet pour le fun, pour consulter les profils de différents personnages de l'univers Star Wars.",
  commentContrainte:"Limite de temps de 24 heures, travail en équipe, utilisation d'une API.",
  commentLearn: "travail en équipe sur un projet court, utilisation de git, la répartition des tâches et des priorités et l'appel à une API existante.",
  video:"../assets/Projets/Tatooine-Interim-Prez.mp4",
},
{
  title: "Move Up",
  subTitle: "Projet 2 - Formation DWWM",
  imagePreview:"../assets/Projets/MoveUp-1.PNG" ,
  images: [
    "../assets/Projets/MoveUp-2.PNG",
    "../assets/Projets/MoveUp-3.PNG", 
    "../assets/Projets/MoveUp-4.PNG",
    "../assets/Projets/MoveUp-5.PNG",
  ],
  stack: "React - JS - CSS - ExpressJS - API JSON" ,
  github: "https://github.com/Joachim-masson/Js-Crew809-TeamRocket-P2-G2-moveup",
  site:"Soon",
  commentProjet:"Application de fitness, avec une partie vitrine et une client pour laquelle l'utilisateur doit s'identifier pour accéder à un contenu réservé aux membres.",
  commentContrainte:"Travail en équipe, utilisation d'une API, méthodologie agile via l'outil JIRA.",
  commentLearn: "Utilisation du context pour masquer/afficher des informations (favoris) en fonction de l'état d'identification du client, utilisation d'une API.",
  video:"../assets/Projets/MoveUp-Prez.mp4",
},
{
  title: "The Simpsons",
  subTitle: "Projet 4 - Formation DWWM",
  imagePreview:"../assets/Projets/Simpsons-1.PNG" ,
  images: [
    "../assets/Projets/Simpsons-2.PNG",
    "../assets/Projets/Simpsons-3.PNG", 
    "../assets/Projets/Simpsons-4.PNG",
  ],
  stack: "React - JS - CSS - ExpressJS - Node.js - MySQL" ,
  github: "https://github.com/Joachim-masson/Projet4-Front",
  site:"Soon",
  commentProjet:"Création d'un site internet répertoriant les personnages et les lieux de la série animée the simpsons avec gestion sécurisée du contenu.",
  commentContrainte:"Travail solo, CRUD complet, DB, 5 jours maximum.",
  commentLearn: "Création d'une app minimaliste mais compléte du début à la fin, avec les phases de conception, développement et test. Création d'un back-end en Structure MVC",
  video:"../assets/Projets/Simpsons-Prez.mp4",
},
{
  title: "Portfolio",
  subTitle: "Mon portfolio",
  imagePreview:"../assets/Projets/PorteFolio.PNG" ,
  images: [
    "../assets/Projets/PorteFolio-1.PNG",
    "../assets/Projets/PorteFolio-2.PNG",
    "../assets/Projets/PorteFolio-3.PNG",
  ],
  stack: "React - JS - CSS" ,
  github: "https://github.com/Joachim-masson/portefolio",
  site:"",
  commentProjet:"Conception et développement de mon portfolio professionnel. Il s'agit d'une plateforme personnelle servant de vitrine pour mes projets, mes compétences techniques et mon parcours de développeur.",
  commentContrainte:"Déploiement continu, design responsive (adapté à tous les supports) et gestion de l'hébergement.",
  commentLearn: "Structuration d'une application de manière évolutive, mise en valeur de mon identité visuelle, rédaction de documentation technique et déploiement via une plateforme de cloud (Vercel/Netlify).",
  video:"../assets/Projets/PortFolio.mp4",
}]

function Projet () {
  return (
  <section>
    <h2 id="projets"> Projets</h2>
    <div className="projects-container">
      {projets.map((projet, index) => (
        <ProjectCard 
          key={index} // Toujours ajouter une clé unique lors d'un .map
          data={projet} 
        />
      ))}
    </div>
  </section>
  )
}

export default Projet