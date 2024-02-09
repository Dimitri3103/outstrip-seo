import React from 'react'
import I1 from "@/assets/images/tools/1.svg"
import I2 from "@/assets/images/tools/2.svg"
import I3 from "@/assets/images/tools/3.svg"
import I4 from "@/assets/images/tools/4.svg"
import I5 from "@/assets/images/tools/5.svg"
import I6 from "@/assets/images/tools/6.svg"
import I7 from "@/assets/images/tools/7.svg"
import I8 from "@/assets/images/tools/8.svg"
import I9 from "@/assets/images/tools/9.svg"
import I10 from "@/assets/images/tools/10.svg"
import I11 from "@/assets/images/tools/11.svg"
import I12 from "@/assets/images/tools/12.svg"
import I13 from "@/assets/images/tools/13.svg"
import I14 from "@/assets/images/tools/14.svg"
import I15 from "@/assets/images/tools/15.svg"
import I16 from "@/assets/images/tools/16.svg"
import I17 from "@/assets/images/tools/17.svg"
import I18 from "@/assets/images/tools/18.svg"
import { FeatureBox, StyledGrid, StyledGrid2 } from '../Home/Features'
import { Grid } from '@mui/material'
import { motion } from 'framer-motion';

const toolsList = [
  {
    id: 1,
    image: I1,
    title: "Test de méta-titre",
    f1: "Le méta-titre de votre page Web est une balise HTML qui définit le titre de votre page. Cette balise affiche le titre de votre page dans les résultats des moteurs de recherche, en haut du navigateur d'un utilisateur, et également lorsque votre page est ajoutée à vos favoris dans une liste de favoris. .",
  },
  {
    id: 2,
    image: I2,
    title: "Test de méta-description",
    f1: "La méta description de votre page Web est une balise HTML destinée à fournir un résumé court et précis de votre page.",
  },
  {
    id: 3,
    image: I3,
    title: "Test des balises de titre",
    f1: "Vérifiez si votre page Web utilise des balises d'en-tête HTML H1 et H2. Les balises d'en-tête ne sont pas visibles pour les utilisateurs, mais aident à clarifier et à soutenir le thème général ou l'objectif de votre page pour les moteurs de recherche.",
  },
  {
    id: 4,
    image: I4,
    title: "Test Robots.txt",
    f1: "Vérifiez si votre site Web utilise un fichier robots.txt. Lorsque les robots des moteurs de recherche explorent un site Web, ils accèdent généralement d'abord au fichier robots.txt d'un site.",
  },
  {
    id: 5,
    image: I5,
    title: "Test du plan du site",
    f1: "Vérifiez si le site Web dispose d'un plan du site. Un plan du site est important car il répertorie toutes les pages Web du site et permet aux robots des moteurs de recherche d'explorer le site Web de manière plus intelligente.",
  },
  {
    id: 6,
    image: I6,
    title: "Test Alt d'image",
    f1: "Vérifiez si les images de votre page Web utilisent des attributs alt. Si une image ne peut pas être affichée (par exemple, en raison d'une source d'image cassée, d'une connexion Internet lente, etc.), l'attribut alt fournit des informations alternatives.",
  },
  {
    id: 7,
    image: I7,
    title: "Test d'image responsive",
    f1: "Ce test vérifiera si toutes les images de votre page sont de taille appropriée pour la fenêtre d'affichage de votre utilisateur. Idéalement, votre page ne devrait pas diffuser d'images plus grandes que la version affichée sur l'écran de l'utilisateur."
  },
  {
    id: 8,
    image: I9,
    title: "Tester Google Analytics",
    f1: "Vérifiez si votre site Web est connecté à Google Analytics. Google Analytics est un outil d'analyse de site Web gratuit et populaire qui permet de fournir des informations sur le trafic et les données démographiques de votre site."
  },
  {
    id: 9,
    image: I10,
    title: "Test de favicon",
    f1: "Vérifiez si votre site utilise et implémente correctement une favicon. Les favicons sont de petites icônes qui apparaissent dans la barre de navigation d'URL de votre navigateur. Elles sont également enregistrées à côté du titre de votre URL lorsque votre page est mise en signet."
  },
  {
    id: 10,
    image: I11,
    title: "Test de vitesse de chargement du site",
    f1: "Vérifiez la vitesse de chargement de votre site Web. La vitesse des pages est un facteur important dans le classement des moteurs de recherche et le succès global du site. Les pages qui mettent plus de 5 secondes à se charger peuvent perdre jusqu'à 50 % d'utilisateurs."
  },
  {
    id: 11,
    image: I12,
    title: "Test de minification JavaScript",
    f1: "Vérifie si les fichiers javascript externes utilisés dans votre page sont réduits. Les fichiers réduits réduisent la taille de la page et le temps de chargement global."
  },
  {
    id: 12,
    image: I13,
    title: "Test de minification CSS",
    f1: "Vérifie si les fichiers CSS utilisés dans votre page sont réduits. Les fichiers réduits réduisent la taille de la page et le temps de chargement global."
  },
  {
    id: 13,
    image: I14,
    title: "Test de canonisation d'URL",
    f1: "Testez votre site pour détecter d'éventuels problèmes de canonisation d'URL. La canonisation décrit comment un site peut utiliser des URL légèrement différentes pour la même page. Si cela se produit, les moteurs de recherche peuvent ne pas savoir quelle URL est la bonne à indexer."
  },
  {
    id: 14,
    image: I15,
    title: "Vérificateur SSL et test HTTPS",
    f1: "Vérifiez si votre site Web utilise HTTPS, un protocole sécurisé pour l'envoi/la réception de données sur Internet. L'utilisation de HTTPS indique qu'une couche de cryptage/d'authentification supplémentaire a été ajoutée entre le client et le serveur."
  },
  {
    id: 15,
    image: I16,
    title: "Test de page d'erreur 404 personnalisé",
    f1: "Ce test SEO vérifiera si votre site Web utilise une page d'erreur 404 personnalisée. En créant une page d'erreur 404 personnalisée, vous pouvez améliorer l'expérience utilisateur de votre site Web en faisant savoir aux utilisateurs que seule une page spécifique est manquante/cassé."
  },
  {
    id: 16,
    image: I17,
    title: "Test de balise canonique",
    f1: "Vérifiez si votre page Web utilise la balise de lien canonique. La balise de lien canonique est utilisée pour désigner une page principale lorsque vous avez plusieurs pages avec un contenu en double ou très similaire."
  },
  {
    id: 17,
    image: I18,
    title: "Test d'utilisation du CDN",
    f1: "Vérifiez si les ressources de votre page Web (images, fichiers javascript et css) sont servies via des CDN."
  },
  {
    id: 18,
    image: I8,
    title: "Test de balises HTML obsolètes",
    f1: "Vérifiez si votre page Web utilise d'anciennes balises HTML obsolètes. Ces balises finiront par perdre la prise en charge du navigateur et vos pages Web risquent de ne pas s'afficher correctement lorsque les navigateurs abandonnent la prise en charge de ces balises."
  },
]

export default function ToolsList() {
  return (
    <StyledGrid container justifyContent="center" alignItems="center">
      <StyledGrid2 item xs={9} container justifyContent="center" alignItems="center" spacing={6}>
        {toolsList.map((tool) => (
          <Grid item xs={12} sm={6} md={4} key={tool.id}>
            <motion.div
              whileHover={
                {
                  position: "relative",
                  zIndex: 1,
                  scale: 1.1,
                  transition: {
                    durantion: .2
                  }
                }
              }
            >
              <FeatureBox
                image={tool.image}
                title={tool.title}
                f1={tool.f1}
              />
            </motion.div>

          </Grid>
        ))}

      </StyledGrid2>
    </StyledGrid>
  )
}
