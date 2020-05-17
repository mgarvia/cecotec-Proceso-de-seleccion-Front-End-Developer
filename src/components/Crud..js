import React from 'react';
import FormTab from './FormTab';
import Button from './Button';
import Product from './Product';
import EditProduct from './EditProduct';
import PropTypes from 'prop-types';
import '../stylesheets/componentsStyles/Crud.scss'

const Crud = props => {
  const { counter, toggleEditProduct, setProductData, updateProductInfo, setId, showEditProduct, products, incrementCounter, resetInputs, removeProduct
  } = props;

  const newProduct = () => {
    resetInputs()
    incrementCounter()
    setTimeout(setId, 3000)
    toggleEditProduct('EditProduct__new')
  }

  const sendProductInfo = () => updateProductInfo();

  return (
    <div className="Crud">
      <EditProduct
        className={'hidden'}
        id={'EditProduct__new'}
        tabTitle={'Nuevo Producto'}
        tabClass={'bg__main'}
        counter={counter}
        submitBtnTitle={'Añadir Producto'}
        submitBtnIcon={'fas fa-plus-circle'}
        btnName={'Añadir Producto'}
        handleCloseBtnEvt={toggleEditProduct}
        setProductData={setProductData}
        handleSubmitBtnEvt={sendProductInfo}
        setId={setId}
      />

      <header className="Crud__header">
        <h1 className="Crud__header--title">Productos</h1>
        <Button
          className={''}
          type={'button'}
          icon={'fas fa-plus-circle'}
          title={'Añadir producto'}
          btnTitle={'Nuevo Producto'}
          onClick={newProduct}
        />
      </header>
      <main className="Crud__main">
        <FormTab title={'Listado de productos'} />
        <section className="Crud__main--results">
          <div>
            <ul className="results">
              <li className="results-code"><h2>Código</h2></li>
              <li className="results-name"><h2>Nombre</h2></li>
              <li className="results-description"><h2>Descripción</h2></li>
              <li className="results-price"><h2>Precio</h2></li>
              <li className="results-stock"><h2>Stock</h2></li>
              <li className="results-provider"><h2>Proveedor</h2></li>
              <li className="results-category"><h2>Categoría</h2></li>
              <li className="results-state"><h2>Estado</h2></li>
              <li className="results-actions"><h2>Acciones</h2></li>
            </ul>

          </div>
          <div>
            {products.map((product, index) =>
              <Product key={`Product-${index}`}
                id={product.id}
                name={product.name}
                description={product.description}
                price={parseInt(product.price)}
                stock={parseInt(product.stock)}
                provider={product.provider}
                category={product.category}
                state={product.state}
                showEditProduct={showEditProduct}
                removeProduct={removeProduct}
              />
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

Crud.propTypes = {
  counter: PropTypes.number,
  products: PropTypes.array,
}

export default Crud;