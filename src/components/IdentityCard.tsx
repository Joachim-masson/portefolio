import "./IdentityCard.css"

function IdentityCard () {
  return(
    <>
      <section>
        <h2>Joachim Masson</h2>
        <article className="IdentityCard-article">
          <h3>Qui suis-je</h3>
          <p>"Fort d’un bagage technique initial en électronique et d’une expertise de plus de 15 ans dans la relation client et la formation, j'aborde le développement web avec une double vision unique. Cette expérience me permet de concevoir des applications web et mobiles (Front-end & Back-end) non seulement robustes techniquement, mais surtout alignées sur les besoins réels des utilisateurs. Mon parcours m'a doté d'une grande adaptabilité, d'un sens aigu de l'écoute et d'une rigueur que je mets aujourd'hui au profit de projets digitaux concrets et collaboratifs."</p>
        </article>
        <article className="IdentityCard-article">
          <h3>Mes aptitudes</h3>
          <p>"Je déploie des solutions webs et mobiles en plaçant l'ergonomie et la robustesse au centre de ma pratique. Mon approche est guidée par une culture du résultat et de la satisfaction utilisateur, héritée de mon expertise en relation client. Rigoureux par nature, je m'attache à produire un code structuré, documenté et facile à maintenir, tout en utilisant mes capacités pédagogiques pour faciliter la communication au sein des équipes de projet."</p>
        </article>
        <article className="IdentityCard-article">
          <h3>Mon objectif</h3>
          <p>"Mon ambition est d’intégrer une structure pérenne pour m’investir durablement dans des projets d’envergure. Mon exigence est celle du travail bien fait : je souhaite mettre ma rigueur au service d’un code propre et maintenable, tout en continuant à consolider mon expérience terrain. À terme, j’aspire à faire converger mon savoir-faire technique et mon expérience de formateur pour accompagner et soutenir les équipes de développement. Mon objectif est de m'engager sur le long terme au sein d'une entreprise où ma fiabilité et mon sens de l'entraide seront des atouts partagés."</p>
        </article>
      </section>
    </>
  )
}

export default IdentityCard