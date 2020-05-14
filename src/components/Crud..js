import React from 'react';
import Button from './Button';
import Input from './Input';
import '../stylesheets/componentsStyles/Crud.scss'

const Crud = () => {
  return (
    <div className="Crud">
      <header className="Crud__header">
        <h1 className="Crud__header--title">Listado de Productos</h1>
        <Button
          class={''}
          type={'button'}
          icon={'fas fa-plus-circle'}
          name={'Nuevo Producto'}
        />
      </header>
      <main className="Crud__main">
        <section className="Crud__main--search">
          <Input
            inputName={'Código'}
            placeholder={'Código'}
            type={'text'}
          />
          <Input
            inputName={'Nombre'}
            placeholder={'Nombre'}
            type={'text'}
          />
          <Button
            type={'button'}
            name={'Buscar'}
            icon={'fas fa-search'}
            className={''}
          />
        </section>
        <table className="Crud__main--results">
          <tr>
            <ul className="results">
              <li><h2>Código</h2></li>
              <li><h2>Nombre</h2></li>
              <li><h2 className="hidden">Descripción</h2></li>
              <li><h2 className="hidden">Precio</h2></li>
              <li><h2 className="hidden">Stock</h2></li>
              <li><h2 className="hidden">Proveedor</h2></li>
              <li><h2 className="hidden">Categoría</h2></li>
              <li><h2 className="hidden">Estado</h2></li>
              <li><h2>Acciones</h2></li>
            </ul>
          </tr>
          <tr>
            <ul className="results">
              <li>1</li>
              <li>Aspiradora</li>
              <li className="hidden">Descripción</li>
              <li className="hidden">15</li>
              <li className="hidden">100</li>
              <li className="hidden">Proveedor 1</li>
              <li className="hidden">Categoría 2</li>
              <li className="hidden">Activo</li>
              <div className="results__actions">
                <Button
                  className={'actions actions__blue'}
                  type={'button'}
                  icon={'fas fa-pen'}
                  name={''}
                />
                <Button
                  className={'actions actions__green'}
                  type={'button'}
                  icon={'fas fa-eye'}
                  name={''}
                />
                <Button
                  className={'actions actions__red'}
                  type={'button'}
                  icon={'fas fa-tdash'}
                  name={''}
                />
              </div>
            </ul>
          </tr>
        </table>
      </main>
    </div>
  )
}

export default Crud;