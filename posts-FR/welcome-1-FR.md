---
title: 'Bienvenue sur Mon blog!'
date: '2022-05-18'
---

Bienvenue sur mon premier article de blog !

Cela fait un moment que je n'ai pas revisité ce site Web, mais j'y reviens pour pouvoir apporter les modifications nécessaires. J'ai une liste de choses que j'aimerais ajouter, mais cela sera fait dans un autre article.

Les premiers changements initiaux que j'ai apportés sont que j'ai ajouté le support pour chaque article traduit ! Fondamentalement, chaque fois que je crée un article, il y aura une traduction française incluse (j'ai une connaissance très basique de la langue française). Celui-ci sera accessible via la liste principale des publications, avec un lien à droite intitulé "**FR**". Cela peut être fait facilement en ajoutant la condition "**-FR**" à la fin de chaque message traduit. Cela peut être fait comme ceci en utilisant le **composant Lien** :

```javascript
<Link href={`/posts/${id}-FR`}> 
    <a> FR </a>
</Link>
```

Chaque publication a un ID corrélé lors de sa création. Les messages traduits partagent le même ID que leurs homologues, mais avec une légère modification. Petit changement, mais simple et amusant. À terme, j'aimerais ajouter la prise en charge d'un bouton de traduction sur chaque publication. Cela éliminerait efficacement le besoin soit de :

- Un lien distinct pour les articles traduits.

- Deux fichiers de publication distincts.

Mais rendrait également la traduction plus rapide en raison de la génération de site statique (getStaticProps). Next.js effectuera un pré-rendu de la traduction française dans le cadre du temps de construction initial à l'aide des accessoires renvoyés. Sinon, nous pourrions utiliser getServerSideProps() pour rendre la traduction lorsque la demande est faite. Cela pourrait être utile si le site Web semble ralentir à cause du pré-rendu, bien qu'il ne s'agisse que de fichiers de démarquage analysés en HTML et lus, il ne devrait donc pas y avoir beaucoup de problèmes.

---

Sinon, je dois modifier le menu de navigation pour qu'il soit plus réactif et compatible avec les appareils mobiles. Cela se fera probablement en modifiant le menu de navigation dans son propre composant et en utilisant une requête multimédia pour s'adapter aux autres appareils. Une fois cela fait, je le retransmettrai dans la mise en page en tant que composant afin qu'il n'interfère pas beaucoup. Bien que sur ce sujet, j'ai remarqué que j'écris plus de JavaScript que de HTML. Utiliser des composants et d'autres méthodes pour obtenir les mises en page et l'apparence correcte des pages dont j'ai besoin. C'est intéressant et certainement un changement d'où j'ai commencé.

---

Je pense que c'est un bon début pour un premier article de blog. Peut-être que je devrai ajouter une section de commentaires pour que je puisse recevoir des commentaires, mais qui sait ! J'ai beaucoup de mises à jour que je dois faire avec ce projet, mais ça va! J'ai hâte de travailler plus dessus et de le rendre un peu meilleur.

        **- Aiden Smith**
