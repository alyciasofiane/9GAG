# 9GAG
1) Introduction :

Cette UE a été très utile pour nous et enrichissante. Elle nous a appris à coder proprement et rigoureusement, de découvrir un nouveau langage et de nouvelles méthodes de programmation, ne pas se contenter juste de la solution de l’enseignant mais de chercher dans des documentations ce qu’on veut effectuer. Notamment, exploiter les solutions des sites de développeurs et savoir les utiliser.
C’est une très bonne initiation au monde professionnel.

2) Description du projet :
Notre projet est une imitation du site 9GAG, il consister à :
• Charger des images.
• Pouvoir scroller ces images à l’infini.
• On peut aimer , ne pas aimer et commenter une image.
Notre problème est que rien n’est sauvegardé une fois la page est rafraîchie, on aurait aimé créer une base de données qui stockerait toutes ces images (avec des IDs) et notamment stocker les commentaires (en reliant l’ID du commentaire à l’ID de l’image).
3) Architecture du code :
Notre code contient 3 fichiers :
• main.js : c’est là qu’on contrôle toutes les fonctionnalités du site.
• style.css : c’est le fichier qui gère tout ce qui est style ; tailles d’images ...
• index.html : c’est le fichier qui gère la mise en forme du site.
4) Détails du code :
Dans le fichier main.js :
Comme on devait appliquer les fonctionnalités sur toutes les images qui seraient chargées,on a choisi de tout coder dans le CallBack, même si ce n’est pas la meilleure solution.
De la ligne 15à 17, on renvoie une erreur s’il s’agit pas d’une image qui a été chargée.
A partir de la ligne 17, on effectue toutes les fonctionnalités qu’on souhaite car il s’agit bien d’une image.
De la ligne 22 à 30 , c’est la partie qui gère le chargement d’une image.
De la ligne 36à 39, on crée l’objet Like qui est de type image, pour qu’on puisse afficher le symbole Like sur le bouton du j’aime. Plus bas :
De la ligne 44 à 48, on crée un compteur qui affiche sur la console le nombre de j’aime sur l’image. Ensuite, c’est le même raisonnement pour le reste des réactions.
En revanche, dans la partie commentaire :
De la ligne 92 à 99, on crée un champs de texte pour les commentaires.
Plus bas dans le code, on crée un input de type submit pour qu’on puisse poster les commentaires une fois saisis.
Ensuite, on fait un addEventListener sur le bouton submit, dès qu’un utilisateur clique sur ce dernier, un champs de texte sera créé pour qu’on puisse enregistrer ce commentaire.
On a utilisé un main, qui sert à créer un bouton de chargement d’images et appeler le CallBack.
