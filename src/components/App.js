import React from 'react';
import fetchData from '../services/fetchData';
import Login from './Login';
import Crud from './Crud.';
import EditProduct from './EditProduct';
import Remove from './Remove';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      products: [],
      login: '',
      counter: '',
      userDetails: {
        email: '',
        password: '',
      },
      newProduct: {
        id: '',
        name: '',
        description: '',
        price: '',
        stock: '',
        provider: '',
        category: '',
        state: ''
      }
    }
  }

  componentDidMount() {
    fetchData()
      .then(data => {
        this.setState({
          users: data.users,
          products: data.products,
          login: false,
          counter: data.products.length,
        })
      })
  }

  validateForm = () => document.querySelectorAll('.NP-input').forEach(input => input.value === '' ? input.classList.add('emptyInput') : input.classList.add('filledInput'));


  //Login
  setData = e => {
    console.log('ok')
    this.validateForm()
    this.setState({
      userDetails: {
        ...this.state.userDetails,
        [e.currentTarget.name]: e.currentTarget.value
      }
    })
  }

  checkUser = () => {
    const { email, password } = this.state.userDetails;

    for (let user of this.state.users) {
      if (user.email === email && user.password === password) {
        return true
      }
    }
  }

  submit = e => {
    if (this.checkUser() !== true) {
      e.preventDefault();
      document.querySelector('.login__err').classList.remove('hidden')
    } else {
      this.setState({
        login: true
      })
    }
  }


  //Crud
  conditionalAccess = () => {
    const { products, login } = this.state;
    if (products.length === 0) {
      return <p>Cargando...</p>
    } else if (login === true) {
      return this.renderCrud()
    } else {
      return <p>Por favor accede a tu cuenta antes de continuar</p>
    }
  }

  renderCrud = () => {
    const { products, counter } = this.state;
    const { incrementCounter, setProductData, updateProductInfo, toggleEditProduct, setId, resetInputs, removeProduct } = this;

    return (
      <div>
        <Crud
          counter={counter}
          toggleEditProduct={toggleEditProduct}
          setProductData={setProductData}
          updateProductInfo={updateProductInfo}
          setId={setId}
          showEditProduct={this.setProductInfo}
          products={products}
          incrementCounter={incrementCounter}   
          resetInputs={resetInputs}        
          removeProduct={removeProduct}          
        />
      </div>
    )
  }

  //Edit product
  toggleEditProduct = elem => document.getElementById(elem).classList.toggle('hidden');

  incrementCounter = () => this.setState({ counter: this.state.products.length + 1 });

  setId = () => {
    this.setState({
      newProduct: {
        ...this.state.newProduct,
        id: this.state.counter.toString()
      }
    });
  }

  setProductData = e => {
    this.validateForm()
    this.setState({
      newProduct: {
        ...this.state.newProduct,
        [e.currentTarget.name]: e.currentTarget.value
      }
    })
  }

  resetInputs = () => {
    const inputs = document.querySelectorAll('.Input__input');
    inputs.forEach(input => input.value = '');
    inputs.forEach(input => input.classList.remove('emptyInput', 'filledInput'));
    document.querySelector('.formErrMsg').classList.add('hidden')
  }

  checkProductData = () => {
    const { id, name, description, price, stock, provider, category, state } = this.state.newProduct;

    if (id !== '' && name !== '' && description !== '' && price !== '' && stock !== '' && provider !== '' && category !== '' && state !== '') {
      return true
    } else {
      return false
    }
  }

  resetEditProduct = elem => {
    const { validateForm, resetInputs, toggleEditProduct } = this;
    validateForm();
    resetInputs();
    toggleEditProduct(elem);
  }

  setNewProduct = (obj) => { this.setState({ products: [...this.state.products, obj] }) };

  updateProductInfo = () => {
    const { validateForm, setNewProduct, checkProductData, resetEditProduct } = this;

    if (checkProductData() === true) {
      resetEditProduct('EditProduct__new')
      setNewProduct(this.state.newProduct);
    } else {
      document.querySelector('.formErrMsg').classList.remove('hidden')
      validateForm();
    }
  }

  //Edit product
  backToProducts = () => {
    window.history.back();
  }

  setProductInfo = e => {
    const product = e.currentTarget.closest('.results');

    this.setState({
      newProduct: {
        id: product.querySelector('.results-code').innerHTML,
        name: product.querySelector('.results-name').innerHTML,
        description: product.querySelector('.results-description').innerHTML,
        price: product.querySelector('.results-price').innerHTML,
        stock: product.querySelector('.results-stock').innerHTML,
        provider: product.querySelector('.results-provider').innerHTML,
        category: product.querySelector('.results-category').innerHTML,
        state: product.querySelector('.results-state').innerHTML
      }
    })
  }

  saveToArray = () => {
    const productIndex = this.state.products.findIndex(product => product.id === this.state.newProduct.id)

    this.state.products.splice(productIndex, 1, this.state.newProduct)
    this.backToProducts()
    this.forceUpdate();
  }

  renderEditProduct = (props) => {
    const { backToProducts, setProductData, saveToArray } = this;
    const urlId = props.match.params.id;
    const products = this.state.products;

    for (let product of products) {
      if (urlId === product.id) {
        const { id, name, description, price, stock, provider, category, state } = this.state.newProduct;

        return (
          <div>
            < EditProduct
              id={`Producto-${product.id}`}
              tabTitle={'Editar Producto'}
              tabClass={'bg__blue'}
              handleCloseBtnEvt={backToProducts}
              counter={parseInt(id)}
              nameValue={name}
              descriptionValue={description}
              priceValue={price}
              stockValue={stock}
              providerValue={provider}
              categoryValue={category}
              stateValue={state}
              setProductData={setProductData}
              submitBtnTitle={'Guardar Cambios'}
              submitBtnIcon={'fas fa-pen'}
              btnName={'Guardar Cambios'}
              handleSubmitBtnEvt={saveToArray}
              handleBtnEvt={this.sendProductInfo}
              setId={this.setId}
            />
          </div>
        )
      }
    }
  }

  renderCurrentProduct = (props) => {
    const { backToProducts, setProductData } = this;
    const urlId = props.match.params.id;
    const products = this.state.products;

    for (let product of products) {
      if (urlId === product.id) {
        const inputs = document.querySelectorAll('.NP-input')
        inputs.forEach(input => input.classList.add('readonly'))
        console.log(inputs)
        const { id, name, description, price, stock, provider, category, state } = this.state.newProduct;

        return (
          < EditProduct
            id={`Producto-${product.id}`}
            tabTitle={name}
            tabClass={'bg__green'}
            formClass={'readonly'}
            handleCloseBtnEvt={backToProducts}
            counter={parseInt(id)}
            nameValue={name}
            descriptionValue={description}
            priceValue={price}
            stockValue={stock}
            providerValue={provider}
            categoryValue={category}
            stateValue={state}
            setProductData={setProductData}
            submitBtnClass={'hidden'}
            setId={this.setId}
          />
        )
      }
    }
  }

  renderRemoveProduct = props => {
    const { backToProducts } = this;
    const urlId = props.match.params.id;

    if (urlId === this.state.newProduct.id) {
      return (
        <Remove
          backToProducts={backToProducts}
          product={this.state.newProduct.name}
          confirmRemoveProduct={this.confirmRemoveProduct}
        />
      )
    } else {
      return <div>Cargando...</div>
    }
  }

  confirmRemoveProduct = e => {
    const productId = this.state.newProduct.id

    const productIndex = this.state.products.findIndex(product => product.id === productId)

    this.state.products.splice(productIndex, 1)
    this.backToProducts()
  }

  render() {
    const { users } = this.state;
    const { renderCrud, setLogin, setData, submit, conditionalAccess, renderCurrentProduct, renderEditProduct, renderRemoveProduct } = this;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login
              users={users}
              setData={setData}
              submit={submit}
              renderCrud={renderCrud}
              setLogin={setLogin}
            />
          </Route>
          <Route path={"/productos"} render={conditionalAccess} />
          <Route path={"/editar-producto/:id"} render={renderEditProduct} />
          <Route path={"/ver-producto/:id"} render={renderCurrentProduct} />
          <Route path={"/eliminar-producto/:id"} render={renderRemoveProduct} />
        </Switch>
      </div>
    );
  }
}

export default App;
