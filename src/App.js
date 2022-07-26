import Categories from './components/Categories'
import Header from './components/Header'
import './scss/app.scss'
import Sort from './components/Sort'
import PizzaBlock from './components/PizzaBlock'
import pizzas from './assets/pizzas'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((pizza) => (
              <PizzaBlock
                key={pizza.id}
                title={pizza.name}
                price={pizza.price}
                image={pizza.image}
                types={pizza.types}
                sizes={pizza.sizes}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
