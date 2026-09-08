/**
 * Resolves files in /public for both local development and GitHub Pages,
 * where the app is served from the /mauji-cafe/ repository subpath.
 */
export const publicAsset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
