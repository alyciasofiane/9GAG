window.onload = main;
/* @callback: est la fonction CallBack qui 
 * gère toutes les fonctionnalités du site.
 * Elle ne prend rien comme paramètres.
 * Ne renvoie rien.
*/ 
function callback(){

		var file = this.files; // files est un tableau.
		var image_type = /^image\//;

		/* On vérifie si l'input chargé est bien 
		 * une image.
		*/ 
		if (!image_type.test(file[0].type)){
			console.log("Ceci n'est pas une image");
		}
		/* Si on est dans cette partie
		 * c'est qu'il s'agit bien d'une image.
		*/
		 
		else{ 
			/* C'est la partie qui gère le chargement
			 * d'une image.
			*/
			 
			var img = document.createElement("img");
			img.setAttribute("class","img");
			img.setAttribute("src",window.URL.createObjectURL(file[0]));
			var div = document.createElement("div"); //on crée un div
			
			/* On crée un élément de type image.
			 * On lui attribut la taille.
			 * On colle le symbole du like sur le bouton .
			*/ 			
			var like = document.createElement("img"); 
			like.setAttribute("width","30px");
			like.setAttribute("height","30px");
			like.setAttribute("src","like.png");
 			
 			/* On initialise un compteur à 0.
 			 * On incréménte après chaque Like.
 			 */
			var counterLike = 0;
			like.addEventListener("click", function(){
					counterLike = counterLike + 1; 
					console.log("le nombre de j'aime : " + counterLike);			
			});
			
			/* On crée un élément de type image.
			 * On lui attribut la taille.
			 * On colle le symbole du dislike sur le bouton .
			*/ 

			var dislike = document.createElement("img"); 
			dislike.setAttribute("width","30px");
			dislike.setAttribute("height","30px");
			dislike.setAttribute("src","dislike.jpg");

			/* On initialise un compteur à 0.
 			 * On incréménte après chaque Like.
 			 */

			var counterDislike = 0;
			dislike.addEventListener("click", function(){
					counterDislike = counterDislike + 1; 
					console.log("le nombre de j'aime pas: " + counterDislike);
 			
			});

			/* On crée un élément de type image.
			 * On lui attribut la taille.
			 * On colle le symbole du comment sur le bouton .
			*/ 

			var comment = document.createElement("img"); 
			comment.setAttribute("width","30px");
			comment.setAttribute("height","30px");
			comment.setAttribute("src","comment.jpg");

			/* On initialise un compteur à 0.
 			 * On incréménte après chaque commentaire validé.
 			 */

			var counterComment = 0;
			/* On fait un addEventListener sur le bouton comment
			 * Après chaque clic sur le bouton comment.
			 * on crée un div ensuite un input de type texte
			 * qui servira à créer un champs de texte pour 
			 * les commentaires/
			*/  
			comment.addEventListener("click", function(){
				
				var commentContainer = document.createElement('div');
				commentContainer.setAttribute("class", "commentContainer");
				var commentInput = document.createElement("input");
				commentInput.setAttribute("type","text");
				commentContainer.appendChild(commentInput);
				document.body.appendChild(commentContainer);
				/* On crée un input de type submit
				 * qui sert à poster le commentaire saisi.
				*/ 	
				var submit = document.createElement('input');
				submit.setAttribute("type", "submit");
				document.body.appendChild(submit);
				/* On incrémente le compteur des commentaires.*/
				counterComment = counterComment + 1;
				console.log("le nombre de commentaires :" + counterComment);
				
				/* On fait un addEventListener sur le bouton submit
				 * On affiche dans la console le commentaire saisi.
				 * on crée un élément de type textarea.
				 * on copie le contenu du commentaire dans ce 
				 * textarea pour qu'il soit stocké ici.
				*/ 
				var c = document.createElement('div');
				submit.addEventListener("click", function(){
					console.log(commentInput.value);
					var t = document.createElement("textarea"); 
					t.value = commentInput.value;
					c.appendChild(t);
					document.body.appendChild(c);
				});


			});
			

			/* On ajoute tous les éléments dans le div. */
			div.appendChild(img); 
			div.appendChild(like);
			div.appendChild(dislike);
			div.appendChild(comment);
		/* On ajoute tout le div dans la zone de publications
		 * qui a été déclaré dans le HTML.
		*/ 
		$('#pubs').append(div); 
		}		
}

 
function main(){
	
	var load = document.querySelector('#load'); // Un bouton de chargement d'images.
	load.addEventListener("change",callback, false);// Permet de charger toutes les fonctionnalités.
}
	
	
	
	
	
	
	
	

