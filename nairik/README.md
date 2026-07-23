# Naïrik — site vitrine statique

Site vitrine monopage réalisé uniquement en HTML5, CSS3 et JavaScript ES6.

## Structure

- `index.html` : contenu et structure sémantique
- `css/variables.css` : couleurs, typographies et dimensions globales
- `css/style.css` : styles principaux
- `css/responsive.css` : adaptations tablette et mobile
- `js/main.js` : navigation, menu mobile et en-tête
- `js/animations.js` : apparitions au scroll et parallaxe légère
- `assets/images/` : images du site
- `assets/icons/` : favicon et futures icônes
- `assets/textures/` : textures optionnelles
- `fonts/` : polices locales éventuelles

## Lancer le site localement

Ouvrir directement `index.html` dans un navigateur ou lancer un petit serveur local :

```bash
python -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Personnalisation rapide

1. Remplacer les images de démonstration dans `assets/images/` en conservant les mêmes noms.
2. Modifier les couleurs et polices dans `css/variables.css`.
3. Remplacer les noms, biographies, œuvres et dates directement dans `index.html`.
4. Mettre à jour l’adresse e-mail et les liens sociaux.
5. Remplacer les URL d’exemple dans les balises SEO et le JSON-LD.

## Formulaire

Le formulaire utilise actuellement `mailto:` et ouvre le logiciel de messagerie du visiteur. Pour un formulaire réellement autonome, connecter un service tel que Netlify Forms, Formspree ou un backend propriétaire.

## Déploiement

Le dossier peut être envoyé tel quel sur :

- GitHub Pages
- Netlify
- OVH
- Apache
- Nginx
- tout hébergement statique

Aucune compilation ni dépendance n’est nécessaire.

## Optimisation avant production

- Convertir les images en WebP ou AVIF.
- Générer plusieurs tailles d’image et utiliser `srcset`.
- Renseigner les vraies métadonnées Open Graph.
- Ajouter les pages finales de mentions légales et de confidentialité.
- Tester avec Lighthouse, WAVE et plusieurs navigateurs.
