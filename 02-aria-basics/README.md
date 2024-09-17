# Les bases des attributs ARIA

Cette section illustre les concepts de base des attributs ARIA à travers l'exemple d'un formulaire de recherche.

## Fichiers inclus

- `search-form.html` : Contient deux versions d'un formulaire de recherche (accessible et non accessible)
- `search-form.js` : Contient le JavaScript pour gérer l'interactivité des formulaires

## Concepts ARIA illustrés

1. **Rôles ARIA**
   - `role="search"` : Utilisé sur le formulaire accessible pour indiquer clairement sa fonction de recherche.

2. **États ARIA**
   - `aria-disabled` : Utilisé sur le bouton de recherche accessible pour indiquer son état de désactivation.

3. **Propriétés ARIA**
   - `aria-live="polite"` : Utilisé sur la zone de résultats pour annoncer les changements aux technologies d'assistance.

## Comparaison des versions

### Version accessible

- Utilise des éléments HTML sémantiques (`<form>`, `<label>`, `<button>`)
- Associe correctement les labels aux champs de saisie
- Gère dynamiquement l'état du bouton de recherche
- Utilise `aria-live` pour annoncer les résultats de recherche

### Version non accessible

- Utilise des éléments non sémantiques (`<div>` au lieu de `<form>` et `<button>`)
- N'a pas de label associé au champ de saisie
- Utilise un placeholder au lieu d'un label visible
- N'est pas naturellement accessible au clavier

## Points clés à retenir

1. Utilisez des éléments HTML sémantiques autant que possible.
2. Associez toujours des labels aux champs de formulaire.
3. Rendez les éléments interactifs accessibles au clavier.
4. Utilisez les attributs ARIA pour compléter la sémantique HTML, pas pour la remplacer.
5. Assurez-vous que les changements dynamiques sont annoncés aux technologies d'assistance.

## Exercice suggéré

Essayez de rendre la version non accessible du formulaire plus accessible en utilisant les techniques démontrées dans la version accessible. Utilisez les attributs ARIA appropriés là où les éléments HTML natifs ne suffisent pas.
