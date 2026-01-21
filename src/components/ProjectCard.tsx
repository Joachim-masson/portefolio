import { useState, useRef} from "react";
import { createPortal } from "react-dom";
import type { ProjetType } from './Projet';
import "./ProjectCard.css"

interface ProjectCardProps {
  data: ProjetType;
}

function ProjectCard ({ data }: ProjectCardProps) {
  
  const { title, subTitle, imagePreview, images, stack, github, commentProjet,  commentContrainte, commentLearn, video } = data;

  // État pour stocker l'image actuellement agrandie
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  // État pour la fenêtre modale de détails (vidéo + commentaires)
  const [showDetails, setShowDetails] = useState<boolean>(false);

// États pour le tooltip
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [tooltipText, setTooltipText] = useState<string>('');

  // Fonction pour gérer le déplacement de la souris
  const handleMouseMove = (e: React.MouseEvent, text: string) => {
    setTooltipPosition({ x: e.clientX + 15, y: e.clientY + 15 }); // +15 pour décaler le tooltip
    setTooltipText(text);
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (<div className="ProjectCard">
      {/* Clic sur l'image preview pour ouvrir les détails */}
      <img 
        src={imagePreview} 
        alt={title} 
        onClick={() => setShowDetails(true)} 
        style={{ cursor: 'pointer' }}
        onMouseEnter={(e) => handleMouseMove(e, "Voir plus de détails")}
        onMouseMove={(e) => handleMouseMove(e, "Voir plus de détails")}
        onMouseLeave={handleMouseLeave}
      />
      <h3 onClick={() => setShowDetails(true)} style={{ cursor: 'pointer' }}
        onMouseEnter={(e) => handleMouseMove(e, "Voir plus de détails")}
        onMouseMove={(e) => handleMouseMove(e, "Voir plus de détails")}
        onMouseLeave={handleMouseLeave}
        >
        {title}</h3>
      <p>{subTitle}</p>
      <span>{stack}</span>
      
      {/* Exemple pour afficher la liste des images secondaires */}
      <div className="gallery">
        {images.map((img, i) => (
          <img key={i} src={img} alt={`Slide ${i}`}
          onClick={() => setSelectedImg(img)} // Au clic, on définit l'image sélectionnée
          className="gallery-thumb" />
        ))}
      </div>

      <a href={github} target="_blank" rel="noreferrer">Voir sur GitHub</a>
     {/* On utilise createPortal pour envoyer l'overlay hors de la carte */}
      {selectedImg && createPortal(
        <div className="lightbox-overlay" onClick={() => setSelectedImg(null)}>
          <button className="close-btn" onClick={() => setSelectedImg(null)}>&times;</button>
          <img src={selectedImg} alt="Enlarged" onClick={(e) => e.stopPropagation()} />
        </div>,
        document.body // On l'attache directement au body du site
      )}
      {/* 2. Modale de détails (Vidéo + Commentaires) */}
      {showDetails && createPortal(
        <div className="details-overlay" onClick={() => setShowDetails(false)}>
          <div className="details-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowDetails(false)}>&times;</button>
            
            <div className="video-container">
              <video controls autoPlay src={video}>
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>

            <div className="details-content">
              <h2>{title}</h2>
              <div className="comment-section">
                <h4>Le Projet</h4>
                <p>{commentProjet}</p>
              </div>
              <div className="comment-section">
                <h4>Contraintes</h4>
                <p>{commentContrainte}</p>
              </div>
              <div className="comment-section">
                <h4>Ce que j'ai appris</h4>
                <p>{commentLearn}</p>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Tooltip qui suit le curseur */}
      {showTooltip && createPortal(
        <div 
          className="cursor-tooltip" 
          style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
        >
          {tooltipText}
        </div>,
        document.body
      )}
    </div>
    )
}

export default ProjectCard