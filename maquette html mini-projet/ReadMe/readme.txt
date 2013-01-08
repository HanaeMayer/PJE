** ETAPE 1 : HTML/CSS :
**************************
**********************

On se réfèrera aux fichiers maquette-etape1.html et style.css (ce deuxième fichier reste constant aux travers du tutoriel, du moins en principe).

Si vous comprennez le code derrière ces fichiers (HTML5 et CSS3) vous pouvez passer à l'étape suivante. Sinon, vous pourrez avoir besoin des tutoriels suivants :
- http://www.siteduzero.com/tutoriel-3-13666-apprenez-a-creer-votre-site-web-avec-html5-et-css3.html
- http://fr.html.net/tutorials/html/
- http://fr.html.net/tutorials/css/

Il n'y a rien de bien compliqué mais je vais faire de mon mieux pour expliquer ce que j'ai fais.

maquette-etape1.html :
**********************

Le contenu de la page se trouve entre les deux balises <html></html>. Les balise <head></head> contiennent l'emplacement du fichier style.css qui permet de customiser l'apparence (on en reparlera plus tard mais vous pouvez déplacer ce fichier ou commenter la ligne qui s'y rapporte dans le .html pour voir ce que ça change lorsque vous ouvrirez à nouveau la page dans votre navigateur) ainsi qu'un titre entre les balises <title></title> qui s'affiche sur l'onglet lorsque vous ouvrez la page dans votre navigateur.

La partie intéressante se trouve entre les balises <body></body>. C'est là que l'on va mettre ce que va s'afficher. Entre les balises <header></header>, j'ai mis le mois et le jour qui servent de titre à la page.

Les balises <div></div> suivantes servent à délimiter les deux réservations qui servent d'exemples. La classe reservationSalle permet ensuite dans le fichier style.css de les encadrer entre autres. Ne vous préocupez pas trop des balises <span></span> pour le moment, elles sont surtout là pour l'étape 2 bien que certaines (qui ont une class) soient déjà utilisées afin de souligner où mettre en gras certaines partie du texte. Les balises </br> servent à faire un retour à la ligne, elles sont donc importantes pour la mise en page.

Les balises <ul></ul> indiquent une liste et les balises <li></li>, un élément de cette liste.

style.css :
***********

Ce ficher sert à "décorer" notre page html. On y retrouve des balises et des classes suivies de consignes.

* Exemple:
* ul {
*     list-style-type: none;
*     margin-bottom: 1px;
*     margin-top: 1px;
*     padding-left: 1px;
* }
*
* .mois {
*     font-size: x-large;
*     text-align: center;
* }

le point indique que "mois" est une classe. On ne le met pas s'il s'agit d'une balise comme "ul". Ensuite, entre les accolades, on met les consignes attribuées aux contenu des balises ou de la classe. "font-size: x-large;" pour dire que la taille de caractères doit être extra-large, par exemple. L'étoile au début indique que ce qui suit dans les accolades sera attribué à l'ensemble du contenu de la page, c'est-à-dire que l'ensemble de la page sera en police Arial (et non pas, juste les titre).


** ETAPE 2 : JSON créé pour l'occasion :
****************************************
*********************************

On utilisera maquette-etape2.html. Encore une fois, si tout est clair à l'ouverture du fichier, vous pouvvez passer à la suite. Sinon ces tutoriels seront utiles :
- http://www.w3schools.com/json/json_intro.asp
- http://www.skill-guru.com/blog/2010/01/27/json-javascript-tutorial/

Comme on peut le voir, la partie html n'a pas beaucoup changé. Les informations susceptibles de changer ont été effacées et une "id" à été rajoutée dans la balise <span> correspondante. On va tout de suite voir pourquoi.

Le grand changement c'est la partie rajoutée à la fin, entre les balises <script></script>. Il s'agit d'un objet JSON appelé "reservations" qui est un tableau à deux éléments (les deux réservations) qui sont eux-mêmes des tableaux ("nomVariable":"valeurVariable") et d'une partie script qui va faire le lien entre la partie html et notre objet JSON. Les deux grandes parties du JSON sont les deux réservations du même exemple que celui utilisé dans l'étape 1.

* Exemple :
*
* HTML: on donne l'identité "typeres0" à la balise <span> (avec un zéro pour ne pas confondre les deux réservations)
* <span class="res" id="typeres0"></span>
*
* JSON: on donne le nom "res" à la variable qui correspond au type de ressource réservée  et on lui attribue la valeur "Salles de réunion"
* "res":"Salles de réunion",
*
* script: on lie "typeres0" et "reservation[0].res" pour que le navigateur sache qui doit mettre la valeur contenue dans "res" entre les balises <span id="typeres0"></span>
* document.getElementById("typeres0").innerHTML=reservations[0].res

Le zéro entre crochets derrière reservation est là car l'objet JSON est un tableau (ici à deux éléments dont les indices sont 0 et 1).


** ETAPE 3 : JSON réel :
**************************
**********************



** ETAPE 4 : JSON + jQuery:
*****************************
************************
___________________________________________________
Sources utiles :

http://stackoverflow.com/questions/3030321/jquery-each-loop-with-json-array
http://stackoverflow.com/questions/6298599/jquery-each-json-array-object-iteration