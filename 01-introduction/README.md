# Introduction à ARIA et à l'accessibilité web

## Qu'est-ce que ARIA ?

ARIA (Accessible Rich Internet Applications) est une spécification du W3C conçue pour améliorer l'accessibilité des applications web, en particulier pour les utilisateurs qui dépendent de technologies d'assistance.

## Importance de l'accessibilité web

1. **Inclusion** : Permet à tous les utilisateurs, y compris ceux ayant des handicaps, d'accéder au contenu web.
2. **Aspects légaux** : De nombreux pays ont des lois exigeant que les sites web soient accessibles (ex : RGAA en France, ADA aux États-Unis).
3. **Avantages pour tous** : Une meilleure accessibilité améliore souvent l'expérience utilisateur pour tout le monde.

## Objectifs de l'utilisation d'ARIA

- Fournir des informations supplémentaires aux technologies d'assistance
- Améliorer la sémantique des éléments personnalisés
- Rendre les applications web dynamiques plus accessibles

## Principes de base d'ARIA

1. **Rôles** : Définissent le type d'élément d'interface utilisateur
2. **Propriétés** : Fournissent des informations supplémentaires sur l'élément
3. **États** : Décrivent la condition actuelle de l'élément

## Exemple simple
```html
<button aria-pressed="false" onclick="togglePlay()">
Lecture/Pause
</button>
```

Dans cet exemple, `aria-pressed` est un état qui indique si le bouton est actuellement pressé ou non.

## À retenir

- ARIA ne modifie pas le comportement ou l'apparence des éléments
- Il est préférable d'utiliser des éléments HTML natifs quand c'est possible
- ARIA doit être utilisé judicieusement et testé avec des technologies d'assistance

## Pour aller plus loin

Consultez le dossier `02-aria-basics/` pour des exemples pratiques d'utilisation des attributs ARIA de base.
