var introText = {
	header:  'To jest sekcja intro',
	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dicta dolorum debitis, iste, autem maxime asperiores similique pariatur nihil sit ipsa doloremque blanditiis laudantium perferendis tenetur obcaecati iure explicabo tempore.'
}

var introTextOutput = Mustache.render("<h2>{{header}}</h2><p>{{text}}</p>",introText);

window.onload = function(){
	getElementById('intro-text').innerHTML = introTextOutput;
}