var json = (function () {
  var init = function () {
    var links = [
      { 
        source: "Walter Ríos", 
        target: "Nelson Aparicio", 
        type: "RENUNCIÓ. Presidente de la corte superior de justicia del Callao. Menciona que las gestiones con los consejeros Iván Noguera y Julio Gutiérrez para ratificar al juez Ricardo Chang los estaba haciendo Hinostroza.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:0,
        y:100
      },
      { 
        source: "Walter Ríos", 
        target: "Nelson Aparicio", 
        type: "Asesor de Walter Ríos, junto a él elaboraron preguntas que no les correspondían para beneficiar a 'los amigos' en el examen de ascenso del CNM, convocado por Guido Aguila.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:0,
        y:200 
      },
      { 
        source: "José Luis Cavassa Roncalla", 
        target: "Walter Ríos", 
        type: "Fue denunciado en el 2000 por la masiva falsificación de firmas para la inscripción del partido fujimorista Perú 2000, mientras ocupó el cargo de gerente electoral de la ONPE. Ahora Cavassa trabaja como asesor informático en la universidad Telesup, de propiedad del excongresista y presidente del partido Podemos por el Progreso del Perú (PP), José Luna Gálvez.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:0,
        y:300  
      },
      { 
        source: "Aldo Mayorga", 
        target: "Walter Ríos", 
        type: "Guido Aguila le cobró el favor a Walter Ríos. En una conversación telefónica, Ríos le propone a Aldo Mayorga, jefe de la unidad de Planeamiento y Desarrollo de la Corte, hacer cambios de personal para poder promover a Verónica Rojas Aguirre.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:0,
        y:400  
      },
      { 
        source: "Aldo Mayorga", 
        target: "Verónica Rojas", 
        type: "Entonces encargada del Sistema de Gestión de Calidad ISO 9001 de la Corte del Callao.",
        image: "https://image.flaticon.com/icons/svg/34/34353.svg",
        x:0,
        y:500  
      },
      { 
        source: "José Luis Diaz Asto", 
        target: "Walter Ríos", 
        type: "Asesor de comunicaciones del presidente del Poder Judicial, Duberlí Rodríguez; llamó por teléfono a Walter Ríos, para invitarlo a un almuerzo al que asistirían, además de Duberlí Rodríguez, Salvador Heresi; el juez supremo Ángel Romero Díaz; el gerente general de IZA Motors, Antonio Camayo, y varios futbolistas de ese club deportivo.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:0,
        y:600  
      },
      { 
        source: "Walter Ríos", 
        target: "Emperatriz Pérez Castillo", 
        type: "Walter Ríos la menciona como una persona clave en la que sería su designación como presidente de la Corte del Callao, preside actualmente la Sala Penal de Apelaciones Permanente de la Corte chalaca. Y es, además, la presidenta de la Sala que ve el caso de Manta y Vilca.",
        image: "https://image.flaticon.com/icons/svg/34/34353.svg",
        x:0,
        y:700 
      },
      { source: "Walter Ríos", 
        target: "Mario Mendoza", 
        type: "Walter Ríos, llama por teléfono al empresario para pedirle que lo apoye con el proceso de ratificación del juez Chang. Mendoza le pide a Hinostroza que le coordine una reunión con el alcalde de Carmen de la Legua-Reynoso, Raúl Odar. El juez supremo hace las gestiones, indicándole a la secretaria del alcalde que Mendoza es su amigo. Mario Mendoza le pide a Guido Aguila que vaya a la cena que acordaba con Mulder, este lo rechaza por viaje. Mendoza aprovecha para pedirle que le de “una empujadita a un amigo”, Juan Canahualpa que postulaba al cargo de fiscal adjunto provincial de familia para la Corte del Callao.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:0,
        y:800 
      },      
      { source: "Mario Mendoza", 
        target: "Victor Raúl Rodriguez Monteza", 
        type: "Se ha retirado del caso. Fiscal supremo a cargo de la investigación de Walter Ríos, que exigió a los periodistas de IDL-Reporteros y Panorama que delataran a sus fuentes. Cercano a Mario Mendoza.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:0,
        y:900 
      },
      { source: "Mario Mendoza", 
        target: "Ricardo  Chang", 
        type: "Declaró fundada, en 2014, la acción de amparo presentada por la Universidad Inca Garcilaso de la Vega, contra la comisión de Educación del Congreso, que investigó las irregularidades en su gestión. Chang fue cuestionado porque se graduó como magíster de Derecho Civil y Comercial en esa universidad poco tiempo antes.El cinco de junio, el pleno del CNM se reunió  y ratificó al juez Ricardo Chang. ",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:100,
        y:0 
      },
      { source: "Mario Mendoza", 
        target: "Salvador Castañeda Córdova", 
        type: "Amigo de Mario Mendoza y gerente de administración de la municipalidad del Callao durante la gestión de Félix Moreno, fue condenado por haberse apropiado de fondos provenientes de las multas por infracciones de tránsito en el Callao. Actualmente está profugo y su caso está en la Sala Suprema Penal Permanente. Conversa directamente con Walter Ríos quien le promete que hablará con la doctora encargada de su caso. ",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:200,
        y:0 
      },
      { source: "Mario Mendoza", 
        target: "Mauricio Mulder", 
        type: "En una conversación telefónica quedan con Mendoza para comer con sus esposas y Mario Mendoza le pregunta si conoce a la ministra de la Mujer, Ana María Mendietta. ",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:300,
        y:0 
      },      
      { source: "Duberlí Rodríguez", 
        target: "José Luis Diaz Asto", 
        type: "Presidente del Poder Judicial, se contacta con Walter Ríos a través de su asesor para invitarlo a un almuerzo.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:400,
        y:0 
      },      
      { source: "José Luis Cavassa Roncalla", 
        target: "Julio Gutiérrez", 
        type: "Consejero del CNM. Walter Ríos le pide, por intermedio de Cavassa, abogar por la candidatura del antropólogo Orlando Velásquez.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:500,
        y:0 
      },
      { source: "Héctor Becerril", 
        target: "Baltazar Morales", 
        type: "Congresista fujimorista",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:600,
        y:0 
      },
      { source: "Héctor Becerril", 
        target: "Baltazar Morales", 
        type: "Héctor Becerril persuade al consejero Baltazar Morales de votar por el candidato que Guido Aguila respaldaba para la presidencia del CNM: el consejero Julio Gutiérrez.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:700,
        y:0 
      },
      { source: "César Hinostroza", 
        target: "Mario Mendoza", 
        type: "Magistrado y presidente de la Segunda Sala Penal Transitoria de la Corte Suprema. Gestionó con los consejeros Iván Noguera y Julio Gutierrez un apoyo en el proceso de ratificación del juez Chang. César Hinostroza invitó a Ana Calderón y a su esposo Guido Aguila a escribir en la revista institucional de la Corte Superior de Justicia del Callao. Aprobó como jurado la tesis de Calderón y la invitó a conferencias como ponente.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:800,
        y:0 
      },
      { source: "José Luis Cavassa Roncalla", 
        target: "Guido Aguila", 
        type: "RENUNCIÓ. Fue presidente y ahora consejero del CNM. Walter Ríos le pide, por intermedio de Cavassa, abogar por la candidatura del antropólogo Orlando Velásquez para la presidencia del CNM.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:900,
        y:0
      },
      { source: "Guido Aguila", 
        target: "Orlando Velásquez", 
        type: "Tras una serie de pugnas internas en el Consejo Nacional de la Magistratura, el 21 de febrero pasado, fue elegido por unanimidad como su presidente.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:900,
        y:100 
      },
      { source: "César Hinostroza", 
        target: "No identificado (caso señora K)", 
        type: "Un personaje no identificado llama a César Hinostroza para que se reuna con la Fuerza n1.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:900,
        y:200 
      },
      { source: "César Hinostroza", 
        target: "Salvador Heresi", 
        type: "RENUNCIÓ. Ministro de Justicia, quien es amigo de Felix Moreno y Alex Kouri tuvo una conversación con Hinostroza sobre acuerdos internacionales de lavado de activos, cuya aplicación archivó el caso de Joaquín Ramirez quien era investigado por un desbalance patrimonial de US$ 7 millones.Walter Ríos lo busca para conversar con él un tema de 'mejora' para su mujer que trabaja en el mismo ministerio.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:900,
        y:300 
      },      
      { source: "Aurelio Quispe", 
        target: "César Hinostroza", 
        type: "Le propone a César Hinostroza un trato que, según él, vincula al presidente de la República, Martín Vizcarra. De concretarse el acuerdo, esto le aseguraría, según las palabras de Quispe, “poder para el futuro”.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:900,
        y:400 
      },
      { source: "César Hinostroza", 
        target: "No identificado (caso violación)", 
        type: "El juez César Hinostroza conversa sobre alternativas de reducción de condena o incluso absolución al presunto abusador sexual de una niña de entre diez y once años.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:900,
        y:500 
      },      
      { source: "Maritza Aragón Hermoza", 
        target: "Guido Aguila", 
        type: "Consejera del CNM, involucrada en la realización del balotario de los examenes de ascenso.",
        image: "https://image.flaticon.com/icons/svg/34/34353.svg",
        x:900,
        y:600
      },     
      { source: "Hebert Marcelo Cubas", 
        target: "Guido Aguila", 
        type: "Consejero del CNM, involucrado en la realización del balotario de los examenes de ascenso.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:900,
        y:700
      },      
      { source: "Daniel Salaverry", 
        target: "Pablo Morales Vásquez", 
        type: "Congresista fujimorista, presidente del congreso. Postuló con el Apra a la alcaldía de Trujillo, y Pablo Morales integró su lista de regidores. Cuatro años después Salaverry fundó su propio movimiento político, llamado 'Democracia, Seguridad y Valores'. En este proyecto, Pablo Morales se desempeñó como personero legal.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:900,
        y:800 
      },
      { source: "Orlando Velásquez", 
        target: "Pablo Morales Vásquez",
        type: "Asesor de Orlando Velasquez, presidente del CNM.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:900,
        y:900
      },
      { source: "Iván Noguera", 
        target: "Walter Ríos", 
        type: "Conocido como el 'Dr.Rock'. Consejero del CNM, llamó al teléfono móvil de Walter Ríos para pedirle que suscriba un convenio con Telesup. Él llegó al Consejo Nacional de la Magistratura como representante de las universidades privadas. Telesup fue la casa de estudios que lo propuso para el cargo ante la Asociación de Universidades del Perú (ASUP), la ex ANR.Iván Noguera también aprovechó su posición de consejero del CNM para pedirle al magistrado César Hinostroza que contrate en su despacho un abogado recomendado por él.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:100,
        y:900 
      },      
      { source: "César Hinostroza", 
        target: "Antonio Camayo Valverde (IZA Motors)", 
        type: "Gerente general de IZA Motors Perú, organizó una reunión en homenaje al nuevo puesto de presidente de Orlando Velásquez  en La Planicie. César Hinostroza lo llamó por teléfono para coordinar el viaje que quería hacer con su esposa a Rusia para ver jugar a la selección peruana. El gerente de Iza Motors le prometió que en una semana tendría los tickets. ",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",        
        x:200,
        y:900 
      },      
      { source: "Antonio Camayo Valverde (IZA Motors)", 
        target: "Enrique Vidal", 
        type: "Periodista montesinista, asesor audiovisual de Iza Motors, también asistió al almuerzo en homenaje al futbolista Héctor Chumpitaz. El asesor de comunicaciones de Duberlí Rodríguez, José Luis Diaz Asto lo menciona en una llamada como intermediario hacia el ex ministro de justicia. Trabajó para el ex presidente de la Región Callao, Alex Kouri Bumachar organizándole presentaciones de cargo. ",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:300,
        y:900 
      },
      { source: "Enrique Vidal", 
        target: "Alex Kouri", 
        type: "Aparece en vladivideos. Preso por haber montado un esquema de corrupción en el sistema de peaje del Callao. ",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:400,
        y:900 
      },
      { source: "Alex Kouri", 
        target: "Vladimiro Montesinos", 
        type: "Ex asesor del ex presidente Alberto Fujimori, preso desde el 2010 por autor meditato de asesinatos durante el gobierno de AF. ",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:500,
        y:900 
      },
      { source: "Antonio Camayo Valverde (IZA Motors)", 
        target: "Philip Butters", 
        type: "Locutor simpatizante al fujimorismo",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:600,
        y:900 
      },
      { source: "Jacques Rodrich (Farenet)", 
        target: "Philip Butters", 
        type: "Dueño de Farenet, marca auspiciadora de Phillip Butters.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDtn0hOx4nMLxmgQAU9ExOKydjxfH0XxcpyBY1hGWcC33ho-gQ",
        x:700,
        y:900 
      },
      { source: "Jacques Rodrich (Farenet)", 
        target: "Cecilia Chacón", 
        type: "Congresista fujimorista, casada con Jacques Rodrich. ",
        image: "https://image.flaticon.com/icons/svg/34/34353.svg",
        x:800,
        y:900
      },
      { source: "Duberlí Rodríguez", 
        target: "Enrique Vidal",
        x:150,
        y:900
      }, 
      { source: "Iván Noguera", 
        target: "César Hinostroza",
        x:200,
        y:900
      },
      { source: "César Hinostroza", 
        target: "Mario Mendoza",
        x:250,
        y:900 
      },
      { source: "Mario Mendoza", 
        target: "Guido Aguila",
        x:300,
        y:900 
      },
      { source: "Antonio Camayo Valverde (IZA Motors)", 
        target: "Orlando Velásquez",
        x:350,
        y:900
      },
      { source: "César Hinostroza", 
        target: "Guido Aguila",
        x:400,
        y:900       
      },
      { source: "Walter Ríos", 
        target: "Orlando Velásquez",
        x:500,
        y:900       
      },      
      { source: "Héctor Becerril", 
        target: "Guido Aguila",
        x:550,
        y:900       
      },
      { source: "Antonio Camayo Valverde (IZA Motors)", 
        target: "Jacques Rodrich (Farenet)"
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