import ProductListPage from './ProductListPage.js';
import ProductDetailPage from './ProductDetailPage.js';
import CartPage from './CartPage.js';

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;
    $target.innerHTML = '';
    if (pathname === '/web/') {
      new ProductListPage({ $target }).render();
    } else if (pathname.indexOf('/products') === 4) {
      const [, , productId] = pathname.split('/');
      new ProductDetailPage({ $target, productId }).render();
    } else if (pathname === '/web/cart') {
      new CartPage({ $target }).render();
    }
  };

  this.route();
}
