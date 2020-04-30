window.onload = function(){
	var top = document.getElementById('top');
	top.innerHTML = '<h2>To jest nowa zawartość top</h2>';

	var paragraphs = document.getElementsByTagName('p');
	console.log('na stronie znajdują się '+paragraphs.length+' akapity');

}