import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../stylesheets/componentsStyles/Product.scss';

const Product = props => {
  const { id, name, description, price, stock, provider, category, state, showEditProduct } = props;

  return (
    <ul className="results">
      <li className="results-code">{id}</li>
      <li className="results-name">{name}</li>
      <li className="results-description">{description}</li>
      <li className="results-price">{price}</li>
      <li className="results-stock">{stock}</li>
      <li className="results-provider">{provider}</li>
      <li className="results-category">{category}</li>
      <li className="results-state">{state}</li>
      <li className="results-actions">
        <Link to={`/editar-producto/${id}`}>
          <Button
            className={'actions bg__blue'}
            type={'button'}
            icon={'fas fa-pen'}
            title={'Editar producto'}
            btnTitle={''}
            onClick={showEditProduct}
          />
        </Link>
        <Link to={`/ver-producto/${id}`}>
          <Button
            className={'actions bg__green'}
            type={'button'}
            icon={'fas fa-eye'}
            title={'ver producto'}
            btnTitle={''}
            onClick={showEditProduct}
          />
        </Link>
        <Link to={`/eliminar-producto/${id}`}>
          <Button
            className={'actions bg__red'}
            type={'button'}
            icon={'fas fa-trash'}
            title={'Eliminar producto'}
            btnTitle={''}
            onClick={showEditProduct}
          />
          </Link>
      </li>
    </ul >
  )
}

Product.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.number,
  provider: PropTypes.string,
  category: PropTypes.string,
  state: PropTypes.string,
}

Product.defaultProps = {
  name: '',
  description: '',
  price: 0,
  stock: 0,
}

export default Product;