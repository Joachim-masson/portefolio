import cssIcon from '../assets/HardSkills/css.svg';
import cubaseIcon from '../assets/HardSkills/Cubase_logo.svg';
import dockerIcon from '../assets/HardSkills/docker.svg';
import expressIcon from '../assets/HardSkills/express-js.svg';
import figmaIcon from '../assets/HardSkills/figma.svg';
import gitIcon from '../assets/HardSkills/git.svg';
import githubIcon from '../assets/HardSkills/github-2.svg';
import guitarProIcon from '../assets/HardSkills/Guitar_Pro_8_icon.png';
import htmlIcon from '../assets/HardSkills/html.svg';
import jiraIcon from '../assets/HardSkills/jira.svg';
import jsIcon from '../assets/HardSkills/js.svg';
import miroIcon from '../assets/HardSkills/miro.svg';
import mysqlIcon from '../assets/HardSkills/mysql.svg';
import nodejsIcon from '../assets/HardSkills/node-js.svg';
import npmIcon from '../assets/HardSkills/npm.svg';
import officeIcon from '../assets/HardSkills/office.svg';
import powershellIcon from '../assets/HardSkills/powershell.svg';
import reactIcon from '../assets/HardSkills/react.svg';
import sql from'../assets/HardSkills/sql.png';
import trelloIcon from '../assets/HardSkills/trello.svg';
import tsIcon from '../assets/HardSkills/ts.svg';
import vscodeIcon from '../assets/HardSkills/vscode.svg';
import workbenchIcon from '../assets/HardSkills/WorkBench.png';

import "./HardSkills.css"

type Category = 'Front-end' | 'Back-end' | 'BDD' | 'Outils' | 'Divers';

interface HardSkillI {
  nom: string;
  image: string;
  categorie: Category;
}

const categories: Category[] = ['Front-end', 'Back-end', 'BDD', 'Outils', 'Divers'];

const hardSkillsData: HardSkillI[] = [
  // Front-end
  { nom: "HTML", image: htmlIcon, categorie: 'Front-end' },
  { nom: "CSS", image: cssIcon, categorie: 'Front-end' },
  { nom: "JavaScript", image: jsIcon, categorie: 'Front-end' },
  { nom: "TypeScript", image: tsIcon, categorie: 'Front-end' },
  { nom: "React", image: reactIcon, categorie: 'Front-end' },
  { nom: "Figma", image: figmaIcon, categorie: 'Front-end' },

  // Back-end
  { nom: "Node.js", image: nodejsIcon, categorie: 'Back-end' },
  { nom: "Docker", image: dockerIcon, categorie: 'Back-end' },
  { nom: "Express.js", image: expressIcon, categorie: 'Back-end' },

  // BDD
  { nom: "MySQL", image: mysqlIcon, categorie: 'BDD' },
  { nom: "WorkBench", image: workbenchIcon, categorie: 'BDD' },
  { nom: "SQL", image: sql, categorie: 'BDD' },

  // Outils
  { nom: "Git", image: gitIcon, categorie: 'Outils' },
  { nom: "GitHub", image: githubIcon, categorie: 'Outils' },
  { nom: "NPM", image: npmIcon, categorie: 'Outils' },
  { nom: "VS Code", image: vscodeIcon, categorie: 'Outils' },
  { nom: "Jira", image: jiraIcon, categorie: 'Outils' },
  { nom: "Trello", image: trelloIcon, categorie: 'Outils' },
  { nom: "Miro", image: miroIcon, categorie: 'Outils' },
  { nom: "PowerShell", image: powershellIcon, categorie: 'Outils' },

  // Divers
  { nom: "Office", image: officeIcon, categorie: 'Divers' },
  { nom: "Cubase", image: cubaseIcon, categorie: 'Divers' },
  { nom: "Guitar Pro 8", image: guitarProIcon, categorie: 'Divers' },
];

function HardSkills () {
  return (
    <section id="hardskills">
      <h2>HardSkills</h2>
      <div className="hardskills-container">
      {categories.map(cat => (
        <article key={cat} className="hardskills-category-article">
          <h3 className="hardskills-category-title">{cat}</h3>
          <div className="hardskills-skills-grid">
            {hardSkillsData.filter(s => s.categorie === cat).map(skill => (
              <div key={skill.nom} className="hardskills-skill-card">
                <img src={skill.image} alt={skill.nom} className="hardskills-skill-icon"/>
                <span className="hardskills-skill-name">{skill.nom}</span>
              </div>
            ))}
          </div>
        </article>
      ))}
      </div>
    </section>
  )
}

export default HardSkills