# Bonnes pratiques et pièges à éviter avec ARIA

Ce guide présente les meilleures pratiques pour l'utilisation des attributs ARIA et met en lumière les erreurs courantes à éviter.

## Bonnes pratiques

1. **Utiliser les éléments HTML natifs quand c'est possible**
   - Les éléments HTML natifs ont une sémantique et un comportement intégrés.
   - Exemple : Utiliser `<button>` plutôt que `<div role="button">`.

2. **Ne pas dupliquer la sémantique native**
   - N'ajoutez pas de rôles ARIA qui répètent la sémantique déjà fournie par l'élément HTML.
   - Exemple à éviter : `<button role="button">`.

3. **Maintenir la cohérence entre les attributs ARIA et l'état visuel**
   - Assurez-vous que les attributs ARIA reflètent toujours l'état actuel de l'interface utilisateur.
   - Exemple : Mettre à jour `aria-expanded` lors de l'ouverture/fermeture d'un menu déroulant.

4. **Utiliser des labels clairs et descriptifs**
   - Fournissez des labels explicites pour les éléments interactifs.
   - Exemple : Utiliser `aria-label` ou `aria-labelledby` pour des boutons avec seulement des icônes.

5. **Tester avec des technologies d'assistance**
   - Vérifiez régulièrement votre site avec des lecteurs d'écran et d'autres technologies d'assistance.

## Pièges à éviter

1. **Surutilisation d'ARIA**
   - N'utilisez ARIA que lorsque c'est nécessaire. Trop d'attributs ARIA peuvent rendre l'interface confuse.

2. **Utilisation incorrecte des rôles**
   - Assurez-vous de comprendre la signification et l'utilisation correcte de chaque rôle ARIA.
   - Exemple à éviter : Utiliser `role="button"` sur un lien qui navigue vers une autre page.

3. **Oublier de gérer le focus**
   - Assurez-vous que le focus du clavier est géré correctement, en particulier dans les composants dynamiques.

4. **Ignorer le contexte**
   - Les attributs ARIA doivent être utilisés en tenant compte du contexte global de l'application.

5. **Ne pas mettre à jour les attributs dynamiquement**
   - Les attributs ARIA doivent être mis à jour en temps réel lorsque l'état de l'interface change.

## Exemple de refactorisation

Consultez le fichier `refactoring-example.html` dans ce dossier pour voir un exemple de code avant et après refactorisation, illustrant ces bonnes pratiques.
