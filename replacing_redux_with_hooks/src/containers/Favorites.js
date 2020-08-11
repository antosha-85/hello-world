import React from 'react';
// import { useSelector } from 'react-redux';
// import {ProductsContext} from '../context/products_context'
import FavoriteItem from '../components/Favorites/FavoriteItem';
import {useStore} from '../hooks_store/store'
import './Products.css';

const Favorites = props => {
  console.log('[Favorites] rendering')
  const state = useStore()[0]
  const products = state.products.filter(
    p => p.isFavorite
  )
  // const favoriteProducts = useSelector(state =>
  //   state.shop.products.filter(p => p.isFavorite)
  // );
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (products.length > 0) {
    content = (
      <ul className="products-list">
        {products.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
