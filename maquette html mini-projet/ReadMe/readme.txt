** ETAPE 1 : HTML/CSS :
**************************
**********************

On se r�f�rera aux fichiers maquette-etape1.html et style.css (ce deuxi�me fichier reste constant aux travers du tutoriel, du moins en principe).

Si vous comprennez le code derri�re ces fichiers (HTML5 et CSS3) vous pouvez passer � l'�tape suivante. Sinon, vous pourrez avoir besoin des tutoriels suivants :
- http://www.siteduzero.com/tutoriel-3-13666-apprenez-a-creer-votre-site-web-avec-html5-et-css3.html
- http://fr.html.net/tutorials/html/
- http://fr.html.net/tutorials/css/

Il n'y a rien de bien compliqu� mais je vais faire de mon mieux pour expliquer ce que j'ai fais.

maquette-etape1.html :
**********************

Le contenu de la page se trouve entre les deux balises <html></html>. Les balise <head></head> contiennent l'emplacement du fichier style.css qui permet de customiser l'apparence (on en reparlera plus tard mais vous pouvez d�placer ce fichier ou commenter la ligne qui s'y rapporte dans le .html pour voir ce que �a change lorsque vous ouvrirez � nouveau la page dans votre navigateur) ainsi qu'un titre entre les balises <title></title> qui s'affiche sur l'onglet lorsque vous ouvrez la page dans votre navigateur.

La partie int�ressante se trouve entre les balises <body></body>. C'est l� que l'on va mettre ce que va s'afficher. Entre les balises <header></header>, j'ai mis le mois et le jour qui servent de titre � la page.

Les balises <div></div> suivantes servent � d�limiter les deux r�servations qui servent d'exemples. La classe reservationSalle permet ensuite dans le fichier style.css de les encadrer entre autres. Ne vous pr�ocupez pas trop des balises <span></span> pour le moment, elles sont surtout l� pour l'�tape 2 bien que certaines (qui ont une class) soient d�j� utilis�es afin de souligner o� mettre en gras certaines partie du texte. Les balises </br> servent � faire un retour � la ligne, elles sont donc importantes pour la mise en page.

Les balises <ul></ul> indiquent une liste et les balises <li></li>, un �l�ment de cette liste.

style.css :
***********

Ce ficher sert � "d�corer" notre page html. On y retrouve des balises et des classes suivies de consignes.

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

le point indique que "mois" est une classe. On ne le met pas s'il s'agit d'une balise comme "ul". Ensuite, entre les accolades, on met les consignes attribu�es aux contenu des balises ou de la classe. "font-size: x-large;" pour dire que la taille de caract�res doit �tre extra-large, par exemple. L'�toile au d�but indique que ce qui suit dans les accolades sera attribu� � l'ensemble du contenu de la page, c'est-�-dire que l'ensemble de la page sera en police Arial (et non pas, juste les titre).


** ETAPE 2 : JSON cr�� pour l'occasion :
****************************************
*********************************

On utilisera maquette-etape2.html. Encore une fois, si tout est clair � l'ouverture du fichier, vous pouvvez passer � la suite. Sinon ces tutoriels seront utiles :
- http://www.w3schools.com/json/json_intro.asp
- http://www.skill-guru.com/blog/2010/01/27/json-javascript-tutorial/

Comme on peut le voir, la partie html n'a pas beaucoup chang�. Les informations susceptibles de changer ont �t� effac�es et une "id" � �t� rajout�e dans la balise <span> correspondante. On va tout de suite voir pourquoi.

Le grand changement c'est la partie rajout�e � la fin, entre les balises <script></script>. Il s'agit d'un objet JSON appel� "reservations" qui est un tableau � deux �l�ments (les deux r�servations) qui sont eux-m�mes des tableaux ("nomVariable":"valeurVariable") et d'une partie script qui va faire le lien entre la partie html et notre objet JSON. Les deux grandes parties du JSON sont les deux r�servations du m�me exemple que celui utilis� dans l'�tape 1.

* Exemple :
*
* HTML: on donne l'identit� "typeres0" � la balise <span> (avec un z�ro pour ne pas confondre les deux r�servations)
* <span class="res" id="typeres0"></span>
*
* JSON: on donne le nom "res" � la variable qui correspond au type de ressource r�serv�e  et on lui attribue la valeur "Salles de r�union"
* "res":"Salles de r�union",
*
* script: on lie "typeres0" et "reservation[0].res" pour que le navigateur sache qui doit mettre la valeur contenue dans "res" entre les balises <span id="typeres0"></span>
* document.getElementById("typeres0").innerHTML=reservations[0].res

Le z�ro entre crochets derri�re reservation est l� car l'objet JSON est un tableau (ici � deux �l�ments dont les indices sont 0 et 1).


** ETAPE 3 : JSON r�el :
**************************
**********************



** ETAPE 4 : JSON + jQuery:
*****************************
************************
___________________________________________________
Sources utiles :

http://stackoverflow.com/questions/3030321/jquery-each-loop-with-json-array
http://stackoverflow.com/questions/6298599/jquery-each-json-array-object-iteration


a regarder :
jsonp
gettoken
alert(token)
callback (json cross-domaine)