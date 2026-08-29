import HomePage from '../features/Home/pages/HomePage';

/**
 * Configuración centralizada de rutas
 * Mantén aquí todas las rutas de la aplicación
 */
export const ROUTES = [
  {
    path: '/',
    element: HomePage,
    name: 'Home'
  }
];

/**
 * Función auxiliar para obtener el nombre de una ruta por su path
 */
export const getRouteName = (path) => {
  return ROUTES.find(route => route.path === path)?.name || 'Unknown';
};
