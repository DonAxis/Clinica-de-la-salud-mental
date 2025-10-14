//  Preguntas 
const questions = [
  "Desearía dejar de enojarme tan fácilmente.",
  "Desearía perder el miedo a ciertas cosas o situaciones.",
  "Desearía dejar de preocuparme porque algo malo pudiera llegar a ocurrir.",
  "Desearía dejar de sentirme triste tan fácilmente.",
  "Desearía dejar de restringir mi dieta, pero sabiendo que estaré en mi peso ideal.",
  "Desearía aprender a reconocer cuando me siento satisfecho para no tener atracones o comer en exceso.",
  "Desearía poder dormir mejor.",
  "Desearía sentirme como me siento cuando consumo una sustancia, pero sin consumirla.",
  "Desearía dejar de ser una persona tan impulsiva.",
  "Desearía nunca volver a intentar quitarme la vida.",
  "Desearía dejar de lastimarme para sentir alivio de otra manera.",
  "Desearía sentir más motivación para hacer las cosas.",
  "Desearía dejar de hacerle daño a las personas, aunque haya tenido razón para hacerlo.",
  "Desearía ser más participativo o más abierto cuando estoy con otras personas.",
  "Desearía dejar distraerme tan fácilmente.",
  "Desearía dejar de sentir que me salgo de mi cuerpo.",
  "Desearía dejar de suponer que mi cuerpo es extraño o que no se ve como quisiera que se viera.",
  "Desearía sentir que valgo más de lo que creo o que soy capaz de ser mucho más de lo que soy.",
  "Desearía dejar de sentirme confundido de quién soy o qué quiero en la vida.",
  "Desearía dejar de pensar que la realidad es extraña.",
  "Desearía dejar de escuchar o mirar cosas que los demás dicen que no existen.",
  "Desearía que se me olvidaran menos las cosas.",
  "Desearía comprender mejor lo que la gente me dice o intenta decirme.",
  "Desearía sentir que me expreso y me comunico mejor.",
  "Desearía dejar de tener pensamientos repetitivos y persistentes que no puedo sacar de mi cabeza.",
  "Desearía dejar de tener pensamientos catastróficos que sólo me generan angustia.",
  "Desearía dejar de pensar en quitarme la vida y sentir que puede haber otra salida.",
  "Desearía tener una mejor capacidad para tomar decisiones.",
  "Desearía controlar mis emociones de una mejor manera.",
  "Desearía dejar de aguantar, tragar o callar lo que siento."
];


// Recomendaciones (si dice 2)
const recomendaciones = [
  "El Semáforo de la Rabia: Antes de reaccionar, pon una pausa de emergencia. Respira profundamente y busca el 'pensamiento culpable' detrás de tu ira. Al hacer esto, tomas el control del momento y evitas que el impulso te domine.",
  "Enfrenta tu Miedo a Dosis Pequeñas: No te tires de golpe a lo más difícil. Empieza por el miedo nivel 1. Practica superarlo en tu imaginación usando la relajación. Cuando te sientas seguro/a, hazlo de verdad. Esto entrena a tu cerebro a entender que el peligro es mucho menor de lo que creía.",
  "Cuando la preocupación aparezca, intenta decir en voz baja o mentalmente '¡Basta!' y cambiar el foco inmediatamente a una actividad que requiera concentración (ej. describir 5 objetos en la habitación).",
  "Intenta con planificar a diario una 'actividad agradable' (ej. escuchar música) y una 'actividad de dominio' (ej. terminar una pequeña tarea). Es una forma de darle un empujón a la motivación, ya que estas acciones reemplazan la inactividad de la tristeza por logros y momentos agradables.",
  "Cambia el chip: no busques un número, busca bienestar. Concéntrate en hábitos saludables que te hagan sentir bien (como comer cuando tu cuerpo pide y parar al sentirse lleno). Aprecia y honra tu cuerpo por todo lo que te permite hacer cada día.",
  "Practica Comer con Atención Plena: Come sin televisión ni celular. Concéntrate en el sabor, la textura y en las señales de tu cuerpo que indican hambre o saciedad. Un truco fácil es dejar los cubiertos en la mesa después de cada bocado para obligarte a ir más lento.",
  "Rutina para el Descanso: Crea una rutina tranquila 30 minutos antes de acostarte (cero pantallas). Si no duermes en 20 minutos, levántate y haz algo aburrido hasta que te dé sueño.",
  "Busca el Reemplazo: Identifica qué emoción te da la sustancia (ej. relajo, diversión). Luego, encuentra y practica alternativas seguras para lograr esa misma sensación (ej. ejercicio, meditación, hablar con un amigo).",
  "Identifica la Señal de Alto: Aprende a reconocer las primeras señales físicas de que viene un impulso (ej. corazón acelerado, tensión). Cuando las sientas, detén lo que ibas a hacer y usa una técnica de calma (como contar al revés).",
  "Pacto de Seguridad: Diseña un plan claro para los momentos difíciles: 1. Ten tus contactos de ayuda a mano. 2. Identifica 3-5 estrategias para calmarte (cosas que puedes hacer de inmediato). 3. Nunca te aísles y comprométete a contactar a una persona antes de ceder a cualquier impulso.",
  "Habilidades de Crisis: Aprende a usar alternativas seguras y rápidas para manejar el dolor emocional. Por ejemplo, usa un cubo de hielo en la piel, haz ejercicio intenso o distráete con una actividad que requiera mucha concentración.",
  "Micro-Metas: La motivación viene después de la acción. Empieza con tareas muy pequeñas (ej. 5 minutos de algo). El logro de esa pequeña tarea te dará el impulso para la siguiente.",
  "Comunicación sin Daño: Practica decir lo que necesitas sin atacar. Expresa tu límite o molestia usando la fórmula 'Yo siento/pienso X...' para comunicarte sin lastimar.",
  "Exposición en Pequeño: Empieza por interacciones cortas y seguras (ej. preguntar la hora, comentar el clima). Practica mantener el contacto visual y respirar profundamente para liberar la tensión social.",
  "Entrenamiento de Enfoque: Fortalece tu atención practicando la concentración en una sola cosa por 5 minutos al día, como la respiración o los sonidos que te rodean.",
  "Volver a la Tierra (Técnica 5-4-3-2-1): Si sientes que te desconectas, nombra: 5 cosas que ves, 4 que tocas, 3 que oyes, 2 que hueles, y 1 que saboreas. Esto te devuelve al presente.",
  "Gracias Cuerpo: Cuestiona la autocrítica. En lugar de criticar, agradece o valora tu cuerpo por todo lo que te permite hacer (caminar, abrazar, reír), en vez de juzgarlo por su apariencia.",
  "El Diario del Éxito: Lleva un registro de tus logros (incluso los más pequeños, como levantarte). Usa esa evidencia para desafiar y reemplazar los pensamientos de que 'no vales' o 'no puedes'.",
  "Define tus Valores: Identifica 3 o 4 valores clave (ej. honestidad, aventura, familia). Revisa si tus decisiones diarias están alineadas con esos valores, no con tus miedos.",
  "Anclaje en la Rutina: Crea una rutina diaria predecible y síguela (horas fijas para comer, dormir, trabajar). La estabilidad en tus hábitos te da una sensación de control sobre la realidad.",
  "Registro para Ayuda Profesional: Anota qué y cuándo ves o escuchas estas cosas, y qué estabas haciendo antes. Busca inmediatamente la opinión de un especialista (psiquiatra/psicólogo clínico).",
  "Ayudas Externas: Usa agendas, notas y alarmas para compensar. Asegúrate de tener un sueño reparador, ya que es clave para la memoria.",
  "Verificación de Escucha: Practica resumir lo que te dicen y preguntar para confirmar: 'Si te entendí bien, ¿quieres decir X?'. Esto aclara y reduce la ansiedad por malinterpretar.",
  "Practica el 'No': Empieza a decir 'no' o a dar tu opinión en situaciones de bajo riesgo (ej. al ordenar comida o hablar de una película). No esperes a que explote la emoción; habla en el momento.",
  "Etiqueta y Pospon: Cuando el pensamiento obsesivo aparezca, etiquétalo como 'solo una falsa alarma mental'. Luego, aplázalo diciéndote: 'Pensaré en esto a las 5 p.m.' (y no antes).",
  "Cuestiona el Desastre: Identifica el pensamiento más temido y hazte tres preguntas: 1. ¿Cuál es la prueba de que esto pasará? 2. ¿Cuál es la probabilidad real? 3. ¿Cuál es el resultado más probable (no el peor)?",
  "Enfócate en Hoy: Concéntrate en mini-metas a muy corto plazo (solo 'llegar al final de hoy' o 'terminar esta hora'). Aférrate a la parte de ti que aún busca una salida y usa tu lista de recursos de apoyo.",
  "Matriz y Tolerancia: Para decisiones importantes, escribe los pros y contras y revisa qué opción se alinea con tus valores. Para las decisiones pequeñas (ej. qué comer), practica elegir rápido para aceptar que no siempre hay una 'opción perfecta'.",
  "Nombra la Emoción: Detente y pregúntate: '¿Qué estoy sintiendo exactamente?'. El simple hecho de ponerle nombre (ej. 'frustración' en lugar de 'enojo') reduce la intensidad y te permite elegir cómo reaccionar.",
  "Pequeñas Afirmaciones: Practica expresar tu opinión o sentimiento en el momento en el que sucede. No esperes a que la emoción se acumule. Empieza con algo breve: 'No, gracias' o 'Prefiero hacer X'."
];

// Preguntas especiales
const valueMap = {
  9: [0, 15, 28],  // “nunca volver a intentar quitarme la vida”
  12: [0, 14, 27], // “dejar de hacerle daño a las personas”
  26: [0, 14, 27]  // “dejar de pensar en quitarme la vida y sentir que puede haber otra salida”
};

// Mezclar preguntas aleatoriamente 
let questionIndices = questions.map((_, i) => i)
  .sort(() => Math.random() - 0.5);

let currentQuestion = 0;
const answers = Array(questions.length).fill(null);

const container = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');

function renderQuestion(index) {
  const questionIndex = questionIndices[index];
  const question = questions[questionIndex];
  const values = valueMap[questionIndex] || [0, 1, 2];

  container.innerHTML = `
    <div class="question">${index + 1}. ${question}</div>
    <div class="options">
      <button onclick="selectAnswer(${values[0]})" class="${answers[questionIndex] === values[0] ? 'selected' : ''}">0</button>
      <button onclick="selectAnswer(${values[1]})" class="${answers[questionIndex] === values[1] ? 'selected' : ''}">1</button>
      <button onclick="selectAnswer(${values[2]})" class="${answers[questionIndex] === values[2] ? 'selected' : ''}">2</button>
    </div>
  `;
  updateNavigation();
}

function selectAnswer(value) {
  const questionIndex = questionIndices[currentQuestion];
  answers[questionIndex] = value;
  renderQuestion(currentQuestion);
}

function updateNavigation() {
  document.getElementById('prevBtn').disabled = currentQuestion === 0;
  const nextBtn = document.getElementById('nextBtn');
  nextBtn.textContent = currentQuestion === questions.length - 1 ? "Finalizar" : "Siguiente";
}

//  Botón “Anterior”
document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion(currentQuestion);
  }
});

//  Botón “Siguiente”
document.getElementById('nextBtn').addEventListener('click', () => {
  const questionIndex = questionIndices[currentQuestion];

  if (answers[questionIndex] === null) {
    alert("Por favor selecciona una opción antes de continuar.");
    return;
  }

  const values = valueMap[questionIndex] || [0, 1, 2];
  if (answers[questionIndex] === values[2] && recomendaciones[questionIndex]) {
    alert(`💡 Recomendación:\n${recomendaciones[questionIndex]}`);
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion(currentQuestion);
  } else {
    showResults();
  }
});

//  Mostrar resultados
function showResults() {
  container.classList.add('hidden');
  document.getElementById('navigation').classList.add('hidden');
  resultContainer.classList.remove('hidden');

  const total = answers.reduce((sum, val) => sum + (val ?? 0), 0);
  let interpretacion = "";

  if (total <= 30) {
    interpretacion = "Al parecer todo va bien, pero si lo cres necesario, podrías recibir orientación por un especialista en salud mental";
  } else if (total <= 80) {
    interpretacion = "No sería una mala idea que consultes a un especialista en salud mental para que evalúe qué tan necesario es recibir un tratamiento clínico";
  } else {
    interpretacion = "Es momento de acudir con un especialista en salud mental para que te oriente sobre el mejor tratamiento para ti porque nunca es tarde para sentirte bien";
  }

  resultContainer.innerHTML = `
    <h2>Resultado final</h2>
    <p><strong>Suma total:</strong> ${total}</p>
    <p><strong>Interpretación:</strong> ${interpretacion}</p>
    <button onclick="restart()">Reiniciar</button>
  `;
}

//  Reiniciar test
function restart() {
  currentQuestion = 0;
  answers.fill(null);
  questionIndices = questions.map((_, i) => i).sort(() => Math.random() - 0.5); // nuevo orden aleatorio
  container.classList.remove('hidden');
  document.getElementById('navigation').classList.remove('hidden');
  resultContainer.classList.add('hidden');
  renderQuestion(currentQuestion);
}

//  Iniciar
renderQuestion(currentQuestion);
