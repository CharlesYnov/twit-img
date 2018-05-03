Ce script permet de récuperer les images de tweets selon un mot ou des mots entrées par l'utilisateur.
Il n'y a pas de paramètres spéciaux, il faut juste entrer du texte et le nombre d'images souhaitées. Le script va créer un dossier au nom de la recherche et mettra les images dedans.
Le principal bug du script et que le nombre d'images téléchargées n'est pas respécté, suite à un bug de l'API twitter certains tweets contenant des images possèdent des url qui ne sont pas accessibles, ainsi certains tweets contenant des images ne pourront pas êtres téléchargés.
