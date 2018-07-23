var json = (function () {
  var init = function () {
    var links = [
      { source: "Walter Ríos", 
        target: "Nelson Aparicio", 
        type: "RENUNCIÓ. Presidente de la corte superior de justicia del Callao. Menciona que las gestiones con los consejeros Iván Noguera y Julio Gutiérrez para ratificar al juez Ricardo Chang los estaba haciendo Hinostroza.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ"
      },
      { source: "Nelson Aparicio", 
        target: "Walter Ríos", 
        type: "Asesor de Walter Ríos, junto a él elaboraron preguntas que no les correspondían para beneficiar a 'los amigos' en el examen de ascenso del CNM, convocado por Guido Aguila.", 
        image: "https://image.flaticon.com/icons/svg/34/34353.svg" 
      },
      { source: "José Luis Cavassa Roncalla", 
        target: "Walter Ríos", 
        type: "Fue denunciado en el 2000 por la masiva falsificación de firmas para la inscripción del partido fujimorista Perú 2000, mientras ocupó el cargo de gerente electoral de la ONPE. Ahora Cavassa trabaja como asesor informático en la universidad Telesup, de propiedad del excongresista y presidente del partido Podemos por el Progreso del Perú (PP), José Luna Gálvez.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ" 
      },
      { source: "Aldo Mayorga", 
        target: "Walter Ríos", 
        type: "Guido Aguila le cobró el favor a Walter Ríos. En una conversación telefónica, Ríos le propone a Aldo Mayorga, jefe de la unidad de Planeamiento y Desarrollo de la Corte, hacer cambios de personal para poder promover a Verónica Rojas Aguirre.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ" 
      },
      { source: "Aldo Mayorga", 
        target: "Verónica Rojas", 
        type: "Entonces encargada del Sistema de Gestión de Calidad ISO 9001 de la Corte del Callao.",
        image: "https://image.flaticon.com/icons/svg/34/34353.svg" 
      },
      { source: "José Luis Diaz Asto", 
        target: "Walter Ríos", 
        type: "Asesor de comunicaciones del presidente del Poder Judicial, Duberlí Rodríguez; llamó por teléfono a Walter Ríos, para invitarlo a un almuerzo al que asistirían, además de Duberlí Rodríguez, Salvador Heresi; el juez supremo Ángel Romero Díaz; el gerente general de IZA Motors, Antonio Camayo, y varios futbolistas de ese club deportivo.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ" 
      },
      { source: "Kodak", 
        target: "Apple", 
        type: "Kodak",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ" 
      },
      { source: "Apple", 
        target: "Kodak", 
        type: "Apple",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ" 
      },
      { source: "Microsoft", 
        target: "Barnes & Noble", 
        type: "Microsoft",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ" 
      },
      { source: "Foxconn", 
        target: "Microsoft", 
        type: "suit",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ" 
      },
      { source: "Foxconn", 
        target: "Microsoft", 
        type: "suit",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ" 
      }
    ];
    return links;
  }

  return {
    start: init
  };
})();

$(function () {
  // console.log(json.start());
});