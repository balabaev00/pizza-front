import Categories from './components/Categories';
import Header from './components/Header';
import logo from './logo.svg';
import './scss/app.scss'
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';


function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock title="Мексиканская" price="500" />
            <PizzaBlock title="Папперони" price="395" />
            <PizzaBlock title="Баварская" price="495" />
            <PizzaBlock title="Гавайская" price="600" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
