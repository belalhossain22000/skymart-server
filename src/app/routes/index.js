import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route.js';
import { ProductRoutes } from '../modules/products/product.route.js';
import { CartRoutes } from '../modules/cart/cart.route.js';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/carts',
    route: CartRoutes,
  },
  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
