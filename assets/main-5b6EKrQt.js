import{r as o,j as e,c as j,R as g}from"./client-CDnsVuio.js";function p({sectionsList:a,currentSection:h}){const[d,m]=o.useState(!1);function c(){m(!d)}return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"mobile-nav-toggle d-xl-none",onClick:c,children:e.jsx("i",{className:"bi bi-list"})}),e.jsx("header",{id:"header",className:d?"show":"",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsxs("div",{className:"profile",children:[e.jsx("img",{className:"img-fluid rounded-circle",src:"https://avatars.githubusercontent.com/agm-gr",alt:""}),e.jsx("p",{className:"name text-light",children:"Alejandro"}),e.jsx("p",{className:"name surname text-light",children:"Guerrero Martínez"}),e.jsxs("div",{className:"social-links mt-3 text-center",children:[e.jsx("a",{href:"https://github.com/AGM-GR",className:"github",target:"_blank",rel:"noopener noreferrer",children:e.jsx("i",{className:"bi bi-github"})}),e.jsx("a",{href:"https://www.linkedin.com/in/alejandro-guerrero-martinez/",className:"linkedin",target:"_blank",rel:"noopener noreferrer",children:e.jsx("i",{className:"bi bi-linkedin"})})]})]}),e.jsx("nav",{id:"navbar",className:"nav-menu navbar",children:e.jsx("ul",{children:a.map((n,r)=>e.jsx("li",{children:e.jsxs("a",{href:"#"+n.id,className:"nav-link scrollto "+(r==h?"active":""),children:[e.jsx("i",{className:n.icon}),e.jsx("span",{children:n.name})]})},r))})})]})})]})}const N="/assets/projects/hatventure_herocapsule.jpg",u=[{id:"home",name:"Inicio",icon:"bi-house"},{id:"about",name:"Sobre Mí",icon:"bi-person-badge"},{id:"resume",name:"Currículum",icon:"bi bi-file-earmark"},{id:"projects",name:"Proyectos",icon:"bi bi-columns-gap"}];function v(){const[a,h]=o.useState(u),[d,m]=o.useState(0),c=o.useRef(null);function n(){return c.current||(c.current=new Map),c.current}function r(s,i){const l=n();i?l.set(s,i):l.delete(s)}o.useEffect(()=>{const s=()=>{const i=n();a.map((l,t)=>{i.get(l.id).getBoundingClientRect().top<=200&&m(t)})};return window.removeEventListener("scroll",s),window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)},[]);function x(){var s=new Date,i=new Date("1995-06-26"),l=s.getFullYear()-i.getFullYear(),t=s.getMonth()-i.getMonth();return(t<0||t===0&&s.getDate()<i.getDate())&&l--,l}return e.jsxs(e.Fragment,{children:[e.jsx(p,{sectionsList:a,currentSection:d}),e.jsx("section",{ref:s=>r(a[0].id,s),id:a[0].id,className:"d-flex flex-column justify-content-center align-items-center",children:e.jsxs("div",{className:"hero-container mx-4",children:[e.jsxs("h1",{children:["Alejandro ",e.jsx("br",{})," Guerrero Martínez"]}),e.jsx("p",{children:e.jsx("span",{children:"Videogame Developer"})})]})}),e.jsxs("main",{id:"main",children:[e.jsx("section",{ref:s=>r(a[1].id,s),id:a[1].id,className:"",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-title",children:[e.jsx("h2",{children:"Sobre mí"}),e.jsxs("p",{children:[e.jsx("i",{children:"Ingeniero informático"}),". Entusiasta de la tecnología, la computación y los videojuegos desde siempre.",e.jsx("br",{}),"Llevo trabajando como ",e.jsx("i",{children:"Desarrollador de Videojuegos"})," indie desde 2019."]})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-3",children:e.jsx("img",{className:"img-fluid",src:"https://avatars.githubusercontent.com/agm-gr",alt:""})}),e.jsxs("div",{className:"col-lg-9 pt-4 pt-lg-0 content",children:[e.jsx("h3",{children:"Programmer - Senior Unity Developer"}),e.jsx("p",{className:"fst-italic"}),e.jsx("br",{}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("i",{className:"bi bi-chevron-right"})," ",e.jsx("strong",{children:"Fecha de nacimiento:"})," ",e.jsx("span",{children:"26/06/1995"})]}),e.jsxs("li",{children:[e.jsx("i",{className:"bi bi-chevron-right"})," ",e.jsx("strong",{children:"Ciudad:"})," ",e.jsx("span",{children:"Valencia, Valencia, Spain"})]}),e.jsxs("li",{children:[e.jsx("i",{className:"bi bi-chevron-right"})," ",e.jsx("strong",{children:"Actualmente:"})," ",e.jsxs("span",{children:["Desarrollador en ",e.jsx("a",{href:"https://www.bravezebra.com/",target:"_blank",rel:"noopener noreferrer",children:"BraveZebra"})]})]})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("i",{className:"bi bi-chevron-right"})," ",e.jsx("strong",{children:"Edad:"})," ",e.jsx("span",{children:x()})]}),e.jsxs("li",{children:[e.jsx("i",{className:"bi bi-chevron-right"})," ",e.jsx("strong",{children:"Estudios:"})," ",e.jsx("span",{children:"Master en Ingeniería Informática"})]}),e.jsxs("li",{children:[e.jsx("i",{className:"bi bi-chevron-right"})," ",e.jsx("strong",{children:"Idiomas:"})," ",e.jsx("span",{children:"Español / Inglés"})]})]})})]})]})]})]})}),e.jsx("section",{id:"skills",className:"section-bg",children:e.jsxs("div",{className:"container",children:[e.jsx("h3",{className:"mt-4 mb-4",children:"Conocimientos Avanzados:"}),e.jsxs("div",{className:"row skills-content",children:[e.jsx("div",{className:"col-lg-4 col-sm-6",children:e.jsx("div",{className:"progress",children:e.jsx("span",{className:"skill",children:"Unity 3D"})})}),e.jsx("div",{className:"col-lg-4 col-sm-6",children:e.jsx("div",{className:"progress",children:e.jsx("span",{className:"skill",children:"C#"})})}),e.jsx("div",{className:"col-lg-4 col-sm-6",children:e.jsx("div",{className:"progress",children:e.jsx("span",{className:"skill",children:"Porting"})})})]}),e.jsx("h3",{className:"mt-4 mb-4",children:"Conocimientos Altos:"}),e.jsxs("div",{className:"row skills-content",children:[e.jsx("div",{className:"col-lg-4 col-sm-6",children:e.jsx("div",{className:"progress",children:e.jsx("span",{className:"skill",children:"Git"})})}),e.jsx("div",{className:"col-lg-4 col-sm-6",children:e.jsx("div",{className:"progress",children:e.jsx("span",{className:"skill",children:"C++"})})}),e.jsx("div",{className:"col-lg-4 col-sm-6",children:e.jsx("div",{className:"progress",children:e.jsx("span",{className:"skill",children:"Java Script"})})}),e.jsx("div",{className:"col-lg-4 col-sm-6",children:e.jsx("div",{className:"progress",children:e.jsx("span",{className:"skill",children:"PHP"})})}),e.jsx("div",{className:"col-lg-4 col-sm-6",children:e.jsx("div",{className:"progress",children:e.jsx("span",{className:"skill",children:"MySQL"})})}),e.jsx("div",{className:"col-lg-4 col-sm-6",children:e.jsx("div",{className:"progress",children:e.jsx("span",{className:"skill",children:"HTML/CSS"})})})]}),e.jsx("h3",{className:"mt-4 mb-4",children:"Conocimientos Básicos:"}),e.jsxs("div",{className:"row skills-content",children:[e.jsx("div",{className:"col-lg-4 col-sm-6",children:e.jsx("div",{className:"progress",children:e.jsx("span",{className:"skill",children:"Unreal Engine"})})}),e.jsx("div",{className:"col-lg-4 col-sm-6",children:e.jsx("div",{className:"progress",children:e.jsx("span",{className:"skill",children:"Modelado (Blender/3ds max)"})})}),e.jsx("div",{className:"col-lg-4 col-sm-6",children:e.jsx("div",{className:"progress",children:e.jsx("span",{className:"skill",children:"Edición de imágenes (Gimp)"})})}),e.jsx("div",{className:"col-lg-4 col-sm-6",children:e.jsx("div",{className:"progress",children:e.jsx("span",{className:"skill",children:"Android Nativo"})})}),e.jsx("div",{className:"col-lg-4 col-sm-6",children:e.jsx("div",{className:"progress",children:e.jsx("span",{className:"skill",children:"Arduino"})})}),e.jsx("div",{className:"col-lg-4 col-sm-6",children:e.jsx("div",{className:"progress",children:e.jsx("span",{className:"skill",children:"Gestión servidores"})})})]})]})}),e.jsx("section",{ref:s=>r(a[2].id,s),id:a[2].id,className:"",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"section-title",children:e.jsx("h2",{children:"Currículum"})}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-6",children:[e.jsx("h3",{className:"resume-title",children:"Educación"}),e.jsxs("div",{className:"resume-item",children:[e.jsx("h4",{children:"Master en Ingeniería Informática"}),e.jsx("h5",{children:"2017 - 2018"}),e.jsx("p",{children:e.jsx("em",{children:"Universidad de Granada"})}),e.jsx("p",{children:"Master profesionalizante de la Ingeniería Informática, en el que se adquieren conocimientos de distintas ramas de la informática (Análisis de datos, Big Data, Sistemas en red, Creación y aprovisionamiento de servicios ...) así como diseño del software y metodologías de trabajo."})]}),e.jsxs("div",{className:"resume-item",children:[e.jsx("h4",{children:"Grado en Ingeniería Informática"}),e.jsx("h5",{children:"2013 - 2017"}),e.jsx("p",{children:e.jsx("em",{children:"Universidad de Granada"})}),e.jsx("p",{children:"Durante mis estudios de grado decidí enfocar mis optativas al desarrollo de videojuegos y aprendí de forma autodidáctica sobre Unity 3D."})]})]}),e.jsxs("div",{className:"col-lg-6",children:[e.jsx("h3",{className:"resume-title",children:"Professional Experience"}),e.jsxs("div",{className:"resume-item",children:[e.jsx("h4",{children:"Programador de Videojuegos"}),e.jsx("h5",{children:"2022 - actualidad"}),e.jsxs("p",{children:[e.jsx("a",{href:"https://www.bravezebra.com/",target:"_blank",rel:"noopener noreferrer",children:e.jsx("em",{children:"Brave Zebra"})})," - Valencia"]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Porting de videojuegos a Nintendo Switch, Xbox One, Xbox Series, PlayStation 4 y PlayStation 5."}),e.jsx("li",{children:"Desarrollo de prototipos y vertical slices del propio estudio."})]})]}),e.jsxs("div",{className:"resume-item",children:[e.jsx("h4",{children:"Programador de Videojuegos"}),e.jsx("h5",{children:"2019 - 2023"}),e.jsxs("p",{children:[e.jsx("a",{href:"https://gonemadstudios.github.io/",target:"_blank",rel:"noopener noreferrer",children:e.jsx("em",{children:"Gone Mad Studios"})})," - Valencia"]}),e.jsxs("p",{children:["Socio fundador de la empresa Gone Mad Studios, como cooperativa de trabajo asociado.",e.jsx("br",{}),"Gone Mad ofrecía trabajos de outsourcing y desarrollo a medida a la par que desarrollábamos videojuegos propios."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Desarrollo a medida de videjuegos para proyectos de gamificación."}),e.jsx("li",{children:"Desarrollo web PHP y node."}),e.jsx("li",{children:"Servicio de Porting de videjuegos a Nintendo Switch."}),e.jsx("li",{children:"Diseño y desarrollo de Hatventure y Hirilun."})]})]}),e.jsxs("div",{className:"resume-item",children:[e.jsx("h4",{children:"Programador de aplicaciones Web"}),e.jsx("h5",{children:"jun.2018 - sept.2018"}),e.jsxs("p",{children:[e.jsx("a",{href:"https://dba-acustica.es/",target:"_blank",rel:"noopener noreferrer",children:e.jsx("em",{children:"dBA Acústica"})})," - Granada"]}),e.jsx("p",{children:"Prácticas del Máster de Ingeniería Informática:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Programador full stack, desarrollando soluciones con Node, AngularJS y MySQL para su sistema web."}),e.jsx("li",{children:"Prototipo de aplicación web (React) y Android nativo para traquear datos de estaciones de sonido."})]})]})]})]})]})}),e.jsx("section",{ref:s=>r(a[3].id,s),id:a[3].id,className:"section-bg",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"section-title",children:e.jsx("h2",{children:"Proyectos"})}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-6 col-md-12 icon-box",children:[e.jsx("div",{className:"icon-hero me-3",children:e.jsx("img",{className:"img-fluid",loading:"lazy",src:N})}),e.jsx("h4",{className:"title",children:e.jsx("a",{href:"https://play.google.com/store/apps/details?id=com.GoneMadStudios.Hatventure",target:"_blank",rel:"noopener noreferrer",children:"Hatventure"})}),e.jsx("p",{className:"related",children:e.jsx("em",{children:"Gone Mad Studios"})}),e.jsxs("p",{className:"description",children:["Desarrollo y diseño del videojuego Hatventure para móviles Android.",e.jsx("br",{}),"Autopublicación en Google Play Store."]})]}),e.jsxs("div",{className:"col-lg-6 col-md-12 icon-box",children:[e.jsx("div",{className:"icon-hero me-3",children:e.jsx("img",{className:"img-fluid",loading:"lazy",src:"https://cdn.cloudflare.steamstatic.com/steam/apps/1407300/hero_capsule.jpg"})}),e.jsx("h4",{className:"title",children:e.jsx("a",{href:"https://store.steampowered.com/app/1407300/Hirilun/",target:"_blank",rel:"noopener noreferrer",children:"Hirilun"})}),e.jsx("p",{className:"related",children:e.jsx("em",{children:"Gone Mad Studios"})}),e.jsxs("p",{className:"description",children:["Desarrollo y diseño del videojuego Hirilun.",e.jsx("br",{}),"Programación de Gameplay, custom shaders, efecto de outline y mejora de las sombras basado en el paper: Revectorization-Based Shadow Mapping.",e.jsx("br",{})," Integración con las tiendas de Steam, Epic Games y GOG."]})]}),e.jsxs("div",{className:"col-lg-6 col-md-12 icon-box",children:[e.jsx("div",{className:"icon-hero me-3",children:e.jsx("img",{className:"img-fluid",loading:"lazy",src:"https://cdn.cloudflare.steamstatic.com/steam/apps/1592110/hero_capsule.jpg"})}),e.jsx("h4",{className:"title",children:e.jsx("a",{href:"https://store.steampowered.com/app/1592110/Spirit_of_the_Island/",target:"_blank",rel:"noopener noreferrer",children:"Spirit of the Island"})}),e.jsx("p",{className:"related",children:e.jsx("em",{children:"Brave Zebra"})}),e.jsxs("p",{className:"description",children:["Lead programmer de Porting: Nintendo Switch, Xbox One y Series, PlayStation 4 y 5. ",e.jsx("br",{})," Integración del control con Gamepad, optimización de rendimiento para consolas y plataformas móviles."]})]}),e.jsxs("div",{className:"col-lg-6 col-md-12 icon-box",children:[e.jsx("div",{className:"icon-hero me-3",children:e.jsx("img",{className:"img-fluid",loading:"lazy",src:"https://cdn.cloudflare.steamstatic.com/steam/apps/1333470/hero_capsule.jpg"})}),e.jsx("h4",{className:"title",children:e.jsx("a",{href:"https://store.steampowered.com/app/1333470/Alex_Kidd_in_Miracle_World_DX/",target:"_blank",rel:"noopener noreferrer",children:"Alex Kidd in Miracle World DX"})}),e.jsx("p",{className:"related",children:e.jsx("em",{children:"Gone Mad Studios"})}),e.jsx("p",{className:"description",children:"Desarrollador Auxiliar: Pulido del juego y bug-fixing en la parte final del desarrollo y en el port a Nintendo Switch."})]}),e.jsxs("div",{className:"col-lg-6 col-md-12 icon-box",children:[e.jsx("div",{className:"icon-hero me-3",children:e.jsx("img",{className:"img-fluid",loading:"lazy",src:"https://cdn.cloudflare.steamstatic.com/steam/apps/1051690/hero_capsule.jpg"})}),e.jsx("h4",{className:"title",children:e.jsx("a",{href:"https://store.steampowered.com/app/1051690/Nightmare_Reaper/",target:"_blank",rel:"noopener noreferrer",children:"Nightmare Reaper"})}),e.jsx("p",{className:"related",children:e.jsx("em",{children:"Brave Zebra"})}),e.jsx("p",{className:"description",children:"Desarrollador Auxiliar de Porting: Integración de requerimientos de Xbox(GDK)."})]})]}),e.jsx("h4",{className:"mt-4 mb-4",children:"Porting a Nintendo Switch:"}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-4 col-md-6 icon-box",children:[e.jsx("div",{className:"icon-small me-3",children:e.jsx("img",{className:"img-fluid",loading:"lazy",src:"https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_Laraan_image500w.jpg"})}),e.jsx("h4",{className:"title",children:e.jsx("a",{href:"https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/Laraan-1805508.html",target:"_blank",rel:"noopener noreferrer",children:"Laraan"})}),e.jsx("p",{className:"related",children:e.jsx("em",{children:"Gone Mad Studios"})})]}),e.jsxs("div",{className:"col-lg-4 col-md-6 icon-box",children:[e.jsx("div",{className:"icon-small me-3",children:e.jsx("img",{className:"img-fluid",loading:"lazy",src:"https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_LambsOnTheRoadTheBeginning_image500w.jpg"})}),e.jsx("h4",{className:"title",children:e.jsx("a",{href:"https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/Lambs-on-the-road-The-Beginning-1985764.html",target:"_blank",rel:"noopener noreferrer",children:"Lambs on the road: The Beginning"})}),e.jsx("p",{className:"related",children:e.jsx("em",{children:"Gone Mad Studios"})})]}),e.jsxs("div",{className:"col-lg-4 col-md-6 icon-box",children:[e.jsx("div",{className:"icon-small me-3",children:e.jsx("img",{className:"img-fluid",loading:"lazy",src:"https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_GunpigFirepowerForHire_image500w.jpg"})}),e.jsx("h4",{className:"title",children:e.jsx("a",{href:"https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/GUNPIG-Firepower-For-Hire-1880379.html",target:"_blank",rel:"noopener noreferrer",children:"GUNPIG: Firepower For Hire"})}),e.jsx("p",{className:"related",children:e.jsx("em",{children:"Gone Mad Studios"})})]}),e.jsxs("div",{className:"col-lg-4 col-md-6 icon-box",children:[e.jsx("div",{className:"icon-small me-3",children:e.jsx("img",{className:"img-fluid",loading:"lazy",src:"https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_Kolumno_image500w.jpg"})}),e.jsx("h4",{className:"title",children:e.jsx("a",{href:"https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/Kolumno-1880197.html",target:"_blank",rel:"noopener noreferrer",children:"Kolumno"})}),e.jsx("p",{className:"related",children:e.jsx("em",{children:"Gone Mad Studios"})})]}),e.jsxs("div",{className:"col-lg-4 col-md-6 icon-box",children:[e.jsx("div",{className:"icon-small me-3",children:e.jsx("img",{className:"img-fluid",loading:"lazy",src:"https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_WhatComesAfter_image500w.jpg"})}),e.jsx("h4",{className:"title",children:e.jsx("a",{href:"https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/What-Comes-After-1929180.html",target:"_blank",rel:"noopener noreferrer",children:"What Comes After"})}),e.jsx("p",{className:"related",children:e.jsx("em",{children:"Gone Mad Studios"})})]}),e.jsxs("div",{className:"col-lg-4 col-md-6 icon-box",children:[e.jsx("div",{className:"icon-small me-3",children:e.jsx("img",{className:"img-fluid",loading:"lazy",src:"https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_DexterStardustAdventuresInOuterSpace_image500w.jpg"})}),e.jsx("h4",{className:"title",children:e.jsx("a",{href:"https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/Dexter-Stardust-Adventures-in-Outer-Space-2101513.html",target:"_blank",rel:"noopener noreferrer",children:"Dexter Stardust : Adventures in Outer Space"})}),e.jsx("p",{className:"related",children:e.jsx("em",{children:"Gone Mad Studios"})})]}),e.jsxs("div",{className:"col-lg-4 col-md-6 icon-box",children:[e.jsx("div",{className:"icon-small me-3",children:e.jsx("img",{className:"img-fluid",loading:"lazy",src:"https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_LoneMcLoneganAWesternAdventure_image500w.jpg"})}),e.jsx("h4",{className:"title",children:e.jsx("a",{href:"https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/Lone-McLonegan-A-Western-Adventure-2032270.html",target:"_blank",rel:"noopener noreferrer",children:"Lone McLonegan : A Western Adventure"})}),e.jsx("p",{className:"related",children:e.jsx("em",{children:"Gone Mad Studios"})})]}),e.jsxs("div",{className:"col-lg-4 col-md-6 icon-box",children:[e.jsx("div",{className:"icon-small me-3",children:e.jsx("img",{className:"img-fluid",loading:"lazy",src:"https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/1x1_NSwitchDS_Galacticon_image500w.jpg"})}),e.jsx("h4",{className:"title",children:e.jsx("a",{href:"https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/Galacticon-2207059.html",target:"_blank",rel:"noopener noreferrer",children:"Galacticon"})}),e.jsx("p",{className:"related",children:e.jsx("em",{children:"Gone Mad Studios"})})]}),e.jsxs("div",{className:"col-lg-4 col-md-6 icon-box",children:[e.jsx("div",{className:"icon-small me-3",children:e.jsx("img",{className:"img-fluid",loading:"lazy",src:"https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/1x1_NSwitchDS_AWindingPath_image500w.jpg"})}),e.jsx("h4",{className:"title",children:e.jsx("a",{href:"https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/A-Winding-Path-2240845.html",target:"_blank",rel:"noopener noreferrer",children:"A Winding Path"})}),e.jsx("p",{className:"related",children:e.jsx("em",{children:"Gone Mad Studios"})})]}),e.jsxs("div",{className:"col-lg-4 col-md-6 icon-box",children:[e.jsx("div",{className:"icon-small me-3",children:e.jsx("img",{className:"img-fluid",loading:"lazy",src:"https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/1x1_NSwitchDS_TheLegendOfGwen_image500w.jpg"})}),e.jsx("h4",{className:"title",children:e.jsx("a",{href:"https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/The-Legend-of-Gwen-2319905.html",target:"_blank",rel:"noopener noreferrer",children:"The Legend of Gwen"})}),e.jsx("p",{className:"related",children:e.jsx("em",{children:"Brave Zebra"})})]}),e.jsxs("div",{className:"col-lg-4 col-md-6 icon-box",children:[e.jsx("div",{className:"icon-small me-3",children:e.jsx("img",{className:"img-fluid",loading:"lazy",src:"https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/1x1_NSwitchDS_Papertris_image500w.jpg"})}),e.jsx("h4",{className:"title",children:e.jsx("a",{href:"https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/Papertris-2330669.html",target:"_blank",rel:"noopener noreferrer",children:"Papertris"})}),e.jsx("p",{className:"related",children:e.jsx("em",{children:"Brave Zebra"})})]}),e.jsxs("div",{className:"col-lg-4 col-md-6 icon-box",children:[e.jsx("div",{className:"icon-small me-3",children:e.jsx("img",{className:"img-fluid",loading:"lazy",src:"https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/1x1_NSwitchDS_SentryCity_image500w.jpg"})}),e.jsx("h4",{className:"title",children:e.jsx("a",{href:"https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/Sentry-City-2397224.html",target:"_blank",rel:"noopener noreferrer",children:"Sentry City"})}),e.jsx("p",{className:"related",children:e.jsx("em",{children:"Brave Zebra"})})]})]}),e.jsx("h4",{className:"mt-4 mb-4",children:"Game Jams:"}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-6 col-md-12 icon-box",children:[e.jsx("div",{className:"icon-horizontal me-3",children:e.jsx("img",{className:"img-fluid",loading:"lazy",src:"https://img.itch.zone/aW1nLzI5NTUyMjcucG5n/315x250%23c/rRYiiS.png"})}),e.jsx("h4",{className:"title",children:e.jsx("a",{href:"https://gonemadstudios.itch.io/hammertime",target:"_blank",rel:"noopener noreferrer",children:"HammerTime!"})}),e.jsx("p",{className:"related",children:e.jsx("em",{children:"Global Game Jam 2020"})}),e.jsx("p",{className:"description",children:"Programación."})]}),e.jsxs("div",{className:"col-lg-6 col-md-12 icon-box",children:[e.jsx("div",{className:"icon-horizontal me-3",children:e.jsx("img",{className:"img-fluid",loading:"lazy",src:"https://img.itch.zone/aW1nLzExMjczMDE1LnBuZw==/315x250%23c/Ar%2B3Xt.png"})}),e.jsx("h4",{className:"title",children:e.jsx("a",{href:"https://kikoalfaro.itch.io/la-root-del-bakalao",target:"_blank",rel:"noopener noreferrer",children:"La Root del Bakalao"})}),e.jsx("p",{className:"related",children:e.jsx("em",{children:"Global Game Jam 2023"})}),e.jsx("p",{className:"description",children:"Programación."})]})]}),e.jsx("h4",{className:"mt-4 mb-4",children:"Proyectos Open Source:"}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-6 col-md-12 icon-box",children:[e.jsx("div",{className:"icon me-3",children:e.jsx("i",{className:"bi bi-github"})}),e.jsx("h4",{className:"title",children:e.jsx("a",{href:"https://github.com/AGM-GR/EdgeDetection",target:"_blank",rel:"noopener noreferrer",children:"Edge Detection"})}),e.jsx("p",{className:"description",children:'Adaptación del efecto de Unity: "Edge Detect Normals" a Post Processing Stack v2, añadiendo nuevas características y mejoras.'})]}),e.jsxs("div",{className:"col-lg-6 col-md-12 icon-box",children:[e.jsx("div",{className:"icon me-3",children:e.jsx("i",{className:"bi bi-github"})}),e.jsx("h4",{className:"title",children:e.jsx("a",{href:"https://github.com/AGM-GR/In-Game",target:"_blank",rel:"noopener noreferrer",children:"In-Game"})}),e.jsx("p",{className:"description",children:"Projecto fin de master. Videjuego escape room para VR (Microsoft Mixed Reality) creado en Unity."})]})]})]})})]})]})}j.createRoot(document.getElementById("root")).render(e.jsx(g.StrictMode,{children:e.jsx(v,{})}));
