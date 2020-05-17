import React from 'react';
import PropTypes from 'prop-types';
import FormTab from './FormTab';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import '../stylesheets/componentsStyles/EditProduct.scss';

const EditProduct = props => {
  const { id, className, tabTitle, tabClass, formClass, handleCloseBtnEvt, counter, nameValue, descriptionValue, priceValue, stockValue, providerValue, categoryValue, stateValue, setProductData, submitBtnClass, submitBtnTitle, submitBtnIcon,
    handleSubmitBtnEvt, btnName} = props;

  const getCloseBtnEvt = () => handleCloseBtnEvt(id)
  const getInputEvt = e => setProductData(e);
  const getSubmitBtnEvt = e => handleSubmitBtnEvt(e)

  return (
    <div id={id} className={`EditProduct  ${className}`}>
      <div className="EditProduct__wrapper">
        <div className="EditProduct__container">
          <FormTab className={tabClass} title={tabTitle} />
          <Button
            className={'actions remove'}
            title={'Cerrar'}
            icon={'fas fa-times-circle'}
            btnTitle={''}
            onClick={getCloseBtnEvt}
          />
          <form className={`EditProduct__form ${formClass}`} method="post">
            <div className="Input">
              <p>Código</p>
              <p className="Input__input">{counter}</p>
            </div>
            <Input
              id={'product-name'}
              labelName={'Nombre'}
              classInput={'NP-input'}
              name={'name'}
              placeholder={'Nombre del producto'}
              value={nameValue}
              onKeyUp={getInputEvt}
            />
            <div className="Input">
              <label htmlFor="description">Descripción</label>
              <textarea id={'Descripción'} className="Input__input NP-input" placeholder={'Descripción del producto'} defaultValue={descriptionValue} name='description'
                onKeyUp={getInputEvt} />
            </div>

            <Input
              id={'product-price'}
              labelName={'Precio'}
              classInput={'NP-input'}
              type={'number'}
              name={'price'}
              placeholder={'Precio del producto'}
              value={priceValue}
              onKeyUp={getInputEvt}
            />
            <Input
              id={'product-stock'}
              labelName={'Stock'}
              classInput={'NP-input'}
              type={'number'}
              name={'stock'}
              placeholder={'Stock disponible del producto'}
              value={stockValue}
              onKeyUp={getInputEvt}
            />
            <Select
              id={'provider'}
              labelName={'Proveedor'}
              classInput={'NP-input'}
              name={'provider'}
              onChange={getInputEvt}
              value={providerValue}
            >
              <option value="" defaultValue>Selecciona un proveedor</option>
              <option value="Proveedor 1">Proveedor 1</option>
              <option value="Proveedor 2">Proveedor 2</option>
              <option value="Proveedor 3">Proveedor 3</option>
              <option value="Proveedor 4">Proveedor 4</option>
              <option value="Proveedor 5">Proveedor 5</option>
            </Select>
            <Select
              id={'category'}
              labelName={'Categoría'}
              classInput={'NP-input'}
              name={'category'}
              onChange={getInputEvt}
              value={categoryValue}
            >
              <option value="" defaultValue>Selecciona una categoría</option>
              <option value="Categoría 1">Categoría 1</option>
              <option value="Categoría 2">Categoría 2</option>
              <option value="Categoría 3">Categoría 3</option>
              <option value="Categoría 4">Categoría 4</option>
              <option value="Categoría 5">Categoría 5</option>
            </Select>
            <Select
              id={'state'}
              labelName={'Categoría'}
              classInput={'NP-input'}
              name={'state'}
              onChange={getInputEvt}
              value={stateValue}
            >
              <option value="" defaultValue>Estado del producto</option>
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </Select>
          </form>
          <p className="formErrMsg errorMsg hidden">Rellena todos los campos por favor</p>
          <div className="EditProduct__btn">
            <Button
              className={submitBtnClass} 
              title={submitBtnTitle}            
              icon={submitBtnIcon}
              btnTitle={btnName}
              onClick={getSubmitBtnEvt}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

EditProduct.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  tabTitle: PropTypes.string,
  tabClass: PropTypes.string,
  formClass: PropTypes.string,
  counter: PropTypes.number.isRequired,
  submitBtnClass: PropTypes.string,
  submitBtnTitle: PropTypes.string,
  submitBtnIcon: PropTypes.string,
  btnName: PropTypes.string
}

EditProduct.defaultProps = {
  className: '',
  tabClass: '',
  formClass: '',
  submitBtnClass: '',
  submitBtnTitle: 'Enviar',
  submitBtnIcon: '',
  btnName: ''
}

export default EditProduct;