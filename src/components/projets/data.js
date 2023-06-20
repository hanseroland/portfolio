import Img1 from "../../images/ecommerce2.png";
import Img2 from "../../images/pizza2.png";
import Img3 from "../../images/weather2.png";
import Img4 from "../../images/pharm2.png";
import Img5 from "../../images/gestock2.png";
import Img6 from "../../images/semi2.png";
import Img7 from "../../images/ccarre2.png";
import Img8 from "../../images/bravo2.png";
import Img9 from "../../images/cliniquepasteur2.png";
import Img10 from "../../images/dashboard2.png";
import Img11 from "../../images/firebase2.png";
import Img12 from "../../images/fonq2.png";
import SystemeSolaire from "../../images/systemsolaire.png";
import FOnqAgenda from "../../images/fonqAgenda.jpeg";





export const data = [
    {
        _id:12,
        name:"Fonq Médi+",
        image:Img12,
        description:"Application web Dévéloppée pour le compte du cabinet carrée. FONQ MEDI + est un CRM de gestion hospitalière. Il a pour but d'aider les structures hospitalières à manager leur structure en passant par la digitalisation des tâche quotidienne comme : La prise de rendevez-vous, la gestion de la pharmacie, la facturation.",
        technologies:[
            {id:1,name:"React"},
            {id:2,name:"Redux"},
            {id:3,name:"PHP"},
            {id:4,name:"MySql"},
            {id:5,name:"REST API"},
            {id:6,name:"Material UI"},
            {id:7,name:"Styled-components"}
       ],
        github:"",
        demo:"https://www.fonqsolutions.com/"
    },
    {
        _id:15,
        name:"Fonq Agenda",
        image:FOnqAgenda,
        description:"Application web Dévéloppée pour le compte du cabinet carrée. FONQ Agenda est un CRM pour gérer la relation client. Il a différentes fonctionnalités dont les plus importantes sont: la gestion des rendez-vous clients et le rappel des rendez-vous par mail et par SMS.",
        technologies:[
            {id:1,name:"React"},
            {id:2,name:"Redux"},
            {id:3,name:"PHP"},
            {id:4,name:"MySql"},
            {id:5,name:"REST API"},
            {id:6,name:"Material UI"},
            {id:7,name:"Styled-components"}
       ],
        github:"",
        demo:"https://www.fonqsolutions.com/"
    },
   
    {
        _id:3,
        name:"Weather",
        image:Img3,
        description:"Il s'agit d'une application  de Météo utilisant l'API de OpenWeatherMap pour afficher les données",
        technologies:[
            {id:1,name:"React Native"},
            {id:2,name:"API"}
        ],
        github:"https://github.com/hanseroland/weather-app",
        demo:""
    },
    {
        _id:4,
        name:"Géopharm",
        image:Img4,
        description:"Géopharm est une application mobile que j'ai développée pour mon projet de Licence en Génie Logiciel et Administration Réseau. "+
        "elle permet de geolocaliser la pharmacie de garde la plus proche qui possède le médicament recherché",
        technologies:[
             {id:1,name:"React Native"},
             {id:2,name:"PHP"},
             {id:3,name:"MySql"},
             {id:4,name:"API REST"},
             {id:5,name:"Google Map"}
        ],
        github:"https://github.com/hanseroland/geo-pharmacie",
        demo:""
    },

    {
        _id:11,
        name:"Inscription Connexion",
        image:Img11,
        description:"Une simple application mobile de connexion et inscrition via Firebase",
        technologies:[
            {id:1,name:"React Native"},
            {id:2,name:"Firebase"}
       ],
        github:"https://github.com/hanseroland/firebase-auth",
        demo:""

    },
    {
        _id:5,
        name:"Application de Gestion de Stock",
        image:Img5,
        description:"Application web de Gestion de Stock comportant différentes fonctionnalités comme "+
        "l'impression de facture au format pdf,Facturation, Gestion des entrées et sorties, Gestion des clients, Gestion des produits et catégories ... ",
        technologies:[
            {id:1,name:"HTML"},
            {id:2,name:"CSS"},
            {id:3,name:"PHP"},
            {id:4,name:"MySql"},
            {id:5,name:"Jquery"}
       ],
        github:"https://github.com/hanseroland/gestion-de-stock",
        demo:""
    },
    {
        _id:1,
        name:"e-commerce",
        image:Img1,
        description:"Ceci est un projet personnel de site web de ecommerce avec l'intégration de stripe pour les paiement.",
        technologies:[
            {id:1,name:"MongoDB"},
            {id:2,name:"Express"},
            {id:3,name:"React Js"},
            {id:4,name:"Node JS"},
            {id:5,name:"Redux"},
            {id:6,name:"REST API"},
            {id:7,name:"Styled-components"}
       ],
        github:"https://github.com/hanseroland/ecommerce-v2",
        demo:""
    },

   
    {
        _id:2,
        name:"Shopping Cart",
        image:Img2,
        description:"Site web de ecommerce pour la vente de pizza et friandise, utilisant redux pour la gestion du panier",
        technologies:[
            {id:1,name:"React"},
            {id:2,name:"Redux"},
            {id:3,name:"Styled-components"}
       ],
        github:"https://github.com/e-pizzaria/",
        demo:"https://hanseroland.github.io/e-pizzaria/",
       
    },
    {
        _id:10,
        name:"Dashboard",
        image:Img10,
        description:"Tableau de bord pour site de e-commerce avec intégration de Chart Js pour la visualisation des données.",
        technologies:[
            {id:1,name:"React Js"},
            {id:2,name:"Chart Js"},
            {id:3,name:"Styled-components"}
       ],
        github:"https://github.com/dashboard-v1/",
        demo:"https://hanseroland.github.io/dashboard-v1/"
    },
     
    {
        _id:6,
        name:"SEMI SARL",
        image:Img6,
        technologies:[
            {id:1,name:"HTML"},
            {id:2,name:"CSS"},
            {id:3,name:"Jquery"},
            {id:4,name:"PHP"},
            {id:5,name:"MySql"}
       ],
       description:"Site web dévéloppé pour le compte du cabinet carrée. SEMI est une société qui volue dans le secteur tertiaire (Import/Export), plus précisément dans la fourniture d’équipements de pêche, d’ouvrages nautiques, dans la confection d’instruments navals, la fourniture électronique, l’installation et l’aménagement, la réparation et l’entretien, les prestations de services",
        github:"",
        demo:"https://www.semisenegal.sn"
    },
 
    {
        _id:7,
        name:"Cabinet Carree",
        image:Img7,
        description:"Site web dévéloppé pour le compte du cabinet carrée. Le Cabinet Carree est un cabinet de conseil spécialisé dans l'accompagnement des TPEs/PMEs avec pour vision de formaliser le secteur informel.",
        technologies:[
            {id:1,name:"Wordpress"},
        ],
        github:"",
        demo:"https://www.ccarree.com"
    },
    
    {
        _id:8,
        name:"Bravo Sénégal",
        image:Img8,
        technologies:[
            {id:1,name:"Wordpress"},
        ],
        description:"Site web dévéloppé pour le compte du cabinet carrée. Bravo Sénégal, comme étant la première plateforme de distribution des équipements de marque Apple à des entreprises en paiement écheloné",
        github:"",
        demo:"https://www.bravosenegal.com"
    },
    {
        _id:9,
        name:"Clinique pasteur",
        image:Img9,
        technologies:[
            {id:1,name:"Wordpress"},
        ],
        description:"Site web dévéloppé pour le compte du cabinet carrée. La clinique Pasteur est l’une des premières clinique privée de haut niveau au Sénégal et était sise sur l’avenue Pasteur non loin de l’Assemblée Nationale",
        github:"",
        demo:"https://www.pasteurclinique.sn"
    },
    {
        _id:14,
        name:"Système Solaire en 3D",
        image:SystemeSolaire,
        technologies:[
            {id:1,name:"React"},
            {id:1,name:"Three.JS"},
        ],
        description:"Dans ce projet découvrez une simulation interactive du système solaire en 3D, que j’ai réalisé avec React et Three.js, une bibliothèque JavaScript populaire et puissante pour la création d'applications et de rendus 3D interactifs dans un navigateur web",
        github:"https://github.com/hanseroland/systemeSolaire",
        demo:"https://hanseroland.github.io/systemeSolaire/",
    }
]