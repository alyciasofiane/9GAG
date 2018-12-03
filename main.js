function callback(){
		var file = this.files; // files c un tableau
		var image_type = /^image\//;
		if (!image_type.test(file[0].type)){
			console.log("Ceci n'est pas une image");}
		else{
			var img = document.createElement("img");
			img.setAttribute("class","img");
			img.setAttribute("src",window.URL.createObjectURL(file[0]));

			var div = document.createElement("div"); //on crée un div

			var like = document.createElement("input"); //on créer un input
			like.setAttribute("type","button"); // on définit que le type de l'input est un bouton
			
			var unlike = document.createElement("input"); 
			unlike.setAttribute("type","button"); //pareil qu'avant et après
			
			var comment = document.createElement("input"); 
			comment.setAttribute("type","button");
			
			div.appendChild(img); // on met l'image et les boutons dans le div
			div.appendChild(like);
			div.appendChild(unlike);
			div.appendChild(comment);
		$('#pubs').append(div); // et on met le div dans la zone de publications
		}
}

var load = document.querySelector('#load'); //un bouton de chargement d'images

load.addEventListener("change",callback, false);// permet de charger l'image

class CommentBox{




commented(){
	
}
}
	
	
	
	
	
	
	
	
	
	

