const express = require('express');
const app = express()
  const obras = {
    "1": {
      "name": "Esperando a Godot",
      "description": "Una obra teatral absurda que sigue a dos personajes, Vladimir y Estragon, mientras esperan en un lugar desolado a alguien llamado Godot, explorando temas de la existencia, la alienación y la esperanza.",
      "authors": ["Samuel Beckett"],
      "duration": "2 horas",
      "actors": ["Alexander Montgomery", "Isabella Ramirez", "Benjamin Worthington", "Olivia Hawthorne", "Nathaniel Harrington"],
      "images": ["https://s4.aconvert.com/convert/p3r68-cdx67/ahn0z-36oi2.png",
                 "https://s4.aconvert.com/convert/p3r68-cdx67/a9njl-gqntb.png",
                 "https://s4.aconvert.com/convert/p3r68-cdx67/ay9q2-889ig.png",
                 "https://s4.aconvert.com/convert/p3r68-cdx67/aeuns-g4sm9.png"
                ]
    },
    "2":
    {
      "name": "El Fantasma de la Ópera",
      "description": "Una icónica obra de teatro musical que narra la historia de un misterioso y desfigurado hombre conocido como el Fantasma, que vive en los pasadizos de la Ópera de París y se obsesiona con una joven y talentosa soprano, Christine.",
      "authors": ["Andrew Lloyd Webber"],
      "duration": "2 horas y 30 minutos",
      "actors": ["Sophia Anderson", "Daniel Blackwood", "Elena Rodriguez", "Nicholas Smith", "Isabella Johnson"],
      "images": [
                 "https://s4.aconvert.com/convert/p3r68-cdx67/aq167-ko5q9.png",
                 "https://s4.aconvert.com/convert/p3r68-cdx67/aza29-6xse4.png",
                 "https://s4.aconvert.com/convert/p3r68-cdx67/at5s9-uqtwr.png"
                ]
    },
    "3": {
      "name": "Esto No Es Un Show",
      "description": "Un audaz espectáculo que desafía las convenciones, combinando elementos de teatro, danza y performance art. La trama sigue a un grupo ecléctico de artistas mientras exploran temas de identidad, realidad y percepción a través de actuaciones vanguardistas.",
      "authors": ["Valentina Moreno", "Carlos Ruiz"],
      "duration": "1 hora y 45 minutos",
      "actors": ["Miguel Ángel Jiménez", "Laura González", "José Martín", "Carmen Sánchez", "Diego Torres"],
      "images": [
                 "https://s4.aconvert.com/convert/p3r68-cdx67/aiakq-tc1zh.png",
                 "https://s4.aconvert.com/convert/p3r68-cdx67/a2odf-i9txh.png",
                 "https://s4.aconvert.com/convert/p3r68-cdx67/a5lnm-ff8xt.png"
                ]
    },
    "4": {
      "name": "Hamlet",
      "description": "Una de las tragedias más emblemáticas de William Shakespeare, centrada en la historia del príncipe Hamlet de Dinamarca, quien busca vengar la muerte de su padre. La obra explora temas complejos como la locura, la traición, la venganza y la moralidad.",
      "authors": ["William Shakespeare"],
      "duration": "3 horas",
      "actors": ["Alexander Knight", "Sarah Miller", "David Johnson", "Emily White", "Richard Brown"],
      "images": [
                 "https://s4.aconvert.com/convert/p3r68-cdx67/aejwr-70tdc.png",
                 "https://s4.aconvert.com/convert/p3r68-cdx67/ae79a-x71sv.png",
                 "https://s4.aconvert.com/convert/p3r68-cdx67/alufd-mqbmm.png"
                ]
    },
    "5": {
      "name": "El Rey León",
      "description": "Un musical espectacular basado en la famosa película animada de Disney. La historia sigue las aventuras de Simba, un joven león que debe enfrentar numerosos desafíos para reclamar su lugar como el legítimo rey de la sabana. El musical es conocido por su impresionante uso de disfraces, marionetas y efectos visuales para recrear el ambiente de África.",
      "authors": ["Irene Mecchi", "Jonathan Roberts", "Linda Woolverton"],
      "duration": "2 horas y 30 minutos",
      "actors": ["Michael James", "Elizabeth Green", "Thomas Hill", "Rachel Adams", "William Parker"],
      "images": [
                 "https://s4.aconvert.com/convert/p3r68-cdx67/anv7r-w2uzh.png",
                 "https://s4.aconvert.com/convert/p3r68-cdx67/a5dvw-coayv.png",
                 "https://s4.aconvert.com/convert/p3r68-cdx67/aj8kc-dgot7.png"
                ]
    },
    "6": {
      "name": "Bodas de sangre",
      "description": "Una comedia romántica contemporánea que sigue la historia de varias parejas que se preparan para sus respectivas bodas. La obra teje una trama llena de enredos amorosos, malentendidos cómicos y momentos de reflexión sobre las relaciones y el matrimonio.",
      "authors": ["Ana García", "Luis Hernández"],
      "duration": "2 horas",
      "actors": ["Elena Sánchez", "Carlos Pérez", "María López", "José Torres", "Laura Jiménez"],
      "images": [
                 "https://s4.aconvert.com/convert/p3r68-cdx67/askir-nu400.pngg",
                 "https://s4.aconvert.com/convert/p3r68-cdx67/askir-nu400.png",
                 "https://s4.aconvert.com/convert/p3r68-cdx67/a0rec-51g9v.png"
                ]
    },
    "7": {
      "name": "B-Vocal",
      "description": "Un aclamado grupo vocal que destaca por su habilidad para fusionar a cappella y comedia en sus actuaciones. B-Vocal cautiva al público con su mezcla única de música, humor y la sorprendente habilidad de crear sonidos instrumentales con sus voces, explorando diversos géneros musicales desde el pop hasta el clásico.",
      "authors": ["Alberto Marco", "Carlos Marco", "Augusto González", "Fernando Ardévol", "Juan Luis García"],
      "duration": "1 hora y 30 minutos",
      "images": [
                 "https://s4.aconvert.com/convert/p3r68-cdx67/awu44-k65cs.png",
                 "https://s4.aconvert.com/convert/p3r68-cdx67/aao38-ta2q8.png",
                 "https://s4.aconvert.com/convert/p3r68-cdx67/ay8vx-6iwku.png"
                ]
    }
  };

  

app.get('/info-obras/:id', (req, res) => {
  const obraId = req.params.id;

  if (obras.hasOwnProperty(obraId)) {
    const obra = obras[obraId];
    res.json(obra);
  } else {
    res.status(404).json({ error: 'Obra no encontrada' });
  }
});
app.listen(3001, ()=>{
  console.log("Server en línea")
});
