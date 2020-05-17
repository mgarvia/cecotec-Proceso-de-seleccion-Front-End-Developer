import React from 'react';
import FormTab from './FormTab';
import Button from './Button';
import '../stylesheets/componentsStyles/Remove.scss';

const Remove = props => {

  const {backToProducts, product, confirmRemoveProduct} = props;

  return (
    <div className="EditProduct removeBtn">
    <div className="EditProduct__wrapper">
      <div className="EditProduct__container remove-box">
      <FormTab className="" title={'Eliminar producto'} />
        <Button
          className={'actions remove'}
          title={'Cerrar'}
          icon={'fas fa-times-circle'}
          btnTitle={''}
          onClick={backToProducts}
        />
        <p>¿Seguro que quieres borrar <span className="productToRemove"> {product} </span>?</p>
        <Button
          className={'bg__red'}
          title={'Borrar'}
          icon={'fas fa-trash'}
          btnTitle={'Eliminar'}
          onClick={confirmRemoveProduct}
        />
      </div>
    </div>
  </div>
  )
}

export default Remove;