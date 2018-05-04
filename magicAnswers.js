// ********** IMPORTANT **********
// Paste the following into the source code <head>
// <script type="text/javascript" src="magicAnswers.js"></script>


// identifiers in Canvas DOM
// name = question_text => question text



// **************
var questionCount = 20;
// **************


var Qbank = [];


window.onload=function() {
	getQuestions();
}

function getQuestions() {
	for (var i = 0; i < questionCount; i++) {
		// bank[document.getElementsByName("question_text")[i].value] = document.getElementsByClassName("answer_text")[i].innerHTML;
		Qbank[i] = document.getElementsByName("question_text")[i].value;
	}

	console.log(Qbank);
	getAnswers();
}

var answerBank = {"A mis padres __________ mi cumpleaños.  (olvidarse)":"se les olvidó","A mí __________ la dirección de Guillermo.  (perderse)":"se me perdió","A Miguel __________ una buena idea para el proyecto.  (ocurrirse)":"se le ocurrió","A los candidatos __________ el tiempo para conseguir más votos.  (acabarse)":"se les acabó","A ti __________ las sillas.  (romperse)":"se te rompieron","A ti __________ el carro cuando ibas a votar, ¿verdad?  (estropearse)":"se te estropeó","A Estela __________ una pierna.  (romperse)":"se le rompió","A muchos ciudadanos __________ votar.  (olvidarse)":"se les olvidó","¿A ti __________ el número de teléfono?  (olvidarse)":"se te olvidó","A Lucía __________ una idea.  (ocurrirse)":"se le ocurrió","¿A ti __________ el disco?  (olvidarse)":"se te olvidó","A Cecilia __________ ir autobús.  (irse)":"se le fue","A Eduardo __________ la hora del concierto.  (olvidarse)":"se le olvidó","A mi amigo y a mí __________ las papeletas al piso cuando fuimos a entregarlas.  (caerse)":"se nos cayeron","A mí __________ reservar los micrófonos.  (olvidarse)":"se me olvidó","A Claudia __________ el dinero.  (acabarse)":"se le acabó","A mí no __________ ir a la Florida para las vacaciones.  (ocurrir)":"se me ocurrió","A Clara __________ el café.  (terminarse)":"se le terminó","A Rodríguez y a Martín __________ el apoyo del pueblo.  (acabarse)":"se les acabó", "A Rodríguez y a Martín __________ el apoyo del pueblo.  (acabarse)":"se les acabó","¿A ti __________ las llaves por el balcón?  (caerse)":"se te cayeron","A nosotros __________ la máquina fotocopiadora.  (romperse)":"se nos rompió","A ti __________ el carro cuando ibas a votar, ¿verdad?  (estropearse)":"se te estropeó","A Claudia __________ el dinero.  (acabarse)":"se le acabó","A los muchachos __________ los aperitivos al calentarlos.  (quemarse)":"se les quemaron","A mí __________ el libro de español.  (perderse)":"se me perdió","A Clara __________ el café.  (terminarse)":"se le terminó","A nosotros __________ el dinero en casa.  (quedarse)":"se nos quedó","A nosotros __________ los discursos en casa.  (quedarse)":"se nos quedaron","¿A ti __________ el florero (vase) favorito de tu madre?  (romperse)":"se te rompió","A ti __________ las computadoras.  (romperse)":"se te rompieron","A Roberto __________ la cámara digital.  (romperse)":"se le rompió","A mi madre __________ las gafas.  (perderse)":"se le perdieron","A mí __________ el lema de la campaña.  (olvidarse)":"se me olvidó","A mis amigos __________ la comida.  (acabarse)":"se les acabó","A mí no __________ ir a la Florida para las vacaciones.  (ocurrir)":"se me ocurrió","A Pepe __________ las fotos del candidato.  (mojarse)":"se le mojaron", "A nosotros __________ los discursos en casa.  (quedarse)":"se nos quedaron","A mí no __________ ir a la Florida para las vacaciones.  (ocurrir)":"se me ocurrió","A mí __________ el lema de la campaña.  (olvidarse)":"se me olvidó","A nosotros __________ la máquina fotocopiadora.  (romperse)":"se nos rompió","A la asesora __________ varios papeles importantes.  (perderse)":"se le perdieron","¿A ti __________ el florero (vase) favorito de tu madre?  (romperse)":"se te rompió","A mí __________ reservar los micrófonos.  (olvidarse)":"se me olvidó","A nosotros __________ el dinero en casa.  (quedarse)":"se nos quedó","A Miguel __________ una buena idea para el proyecto.  (ocurrirse)":"se le ocurrió","A Linda __________ traer el vino tinto.  (olvidarse)":"se le olvidó","A ti __________ las sillas.  (romperse)":"se te rompieron","¿A ti __________ los resultados de la encuesta en la oficina?  (quedarse)":"se te quedaron","A mi amigo y a mí __________ las papeletas al piso cuando fuimos a entregarlas.  (caerse)":"se nos cayeron","A Estela __________ una pierna.  (romperse)":"se le rompió","A mí __________ el libro de español.  (perderse)":"se me perdió","A muchos ciudadanos __________ votar.  (olvidarse)":"se les olvidó","Al señor __________ el tobillo cuando entraba a votar.  (torcerse)":"se le torció","A Cecilia __________ ir autobús.  (irse)":"se le fue","A Rodríguez y a Martín __________ el apoyo del pueblo.  (acabarse)":"se les acabó","A los oficiales __________ algunas de las máquinas de votación.  (romper)":"se les rompieron", "A los candidatos __________ el tiempo para conseguir más votos.  (acabarse)":"se les acabó","A mí no __________ ir a la Florida para las vacaciones.  (ocurrir)":"se me ocurrió","A Pepe __________ las fotos del candidato.  (mojarse)":"se le mojaron","A ti __________ las sillas.  (romperse)":"se te rompieron","A ti __________ el carro cuando ibas a votar, ¿verdad?  (estropearse)":"se te estropeó","A Jorge __________ la rodilla.  (torcerse)":"se le torció","¿A ti __________ los resultados de la encuesta en la oficina?  (quedarse)":"se te quedaron","A Alberto __________ las llaves.  (perderse)":"se le perdieron","A nosotros __________ los discursos en casa.  (quedarse)":"se nos quedaron","A Eduardo __________ la hora del concierto.  (olvidarse)":"se le olvidó","¿A ti __________ el disco?  (olvidarse)":"se te olvidó","¿A ti __________ las llaves por el balcón?  (caerse)":"se te cayeron","A mí __________ el cuaderno en casa.  (quedarse)":"se me quedó","A Miguel __________ una buena idea para el proyecto.  (ocurrirse)":"se le ocurrió","A la asesora __________ varios papeles importantes.  (perderse)":"se le perdieron","¿A ti __________ el florero (vase) favorito de tu madre?  (romperse)":"se te rompió","A mi amigo y a mí __________ las papeletas al piso cuando fuimos a entregarlas.  (caerse)":"se nos cayeron", "A Clara __________ el café.  (terminarse)":"se le terminó","A Estela __________ una pierna.  (romperse)":"se le rompió","A Miguel __________ una buena idea para el proyecto.  (ocurrirse)":"se le ocurrió","A la asesora __________ varios papeles importantes.  (perderse)":"se le perdieron","A Alberto __________ las llaves.  (perderse)":"se le perdieron","A mí __________ el lema de la campaña.  (olvidarse)":"se me olvidó","A Claudia __________ el dinero.  (acabarse)":"se le acabó","A ti __________ el carro cuando ibas a votar, ¿verdad?  (estropearse)":"se te estropeó","A Rodríguez y a Martín __________ el apoyo del pueblo.  (acabarse)":"se les acabó","A Eduardo __________ la hora del concierto.  (olvidarse)":"se le olvidó","A Pepe __________ las fotos del candidato.  (mojarse)":"se le mojaron","A los candidatos __________ el tiempo para conseguir más votos.  (acabarse)":"se les acabó","A mí __________ el cuaderno en casa.  (quedarse)":"se me quedó","A nosotros __________ los discursos en casa.  (quedarse)":"se nos quedaron","A Linda __________ traer el vino tinto.  (olvidarse)":"se le olvidó","A mi madre __________ las gafas.  (perderse)":"se le perdieron"};

function getAnswers() {
	for (var i = 0; i < questionCount; i++) {
		var question = Qbank[i];
		var answer = answerBank[question];
		var Qnumber = i + 1;

		if (answer) {
			console.log("Answer #" + Qnumber + " - " + answer);
		} 
	}
}
