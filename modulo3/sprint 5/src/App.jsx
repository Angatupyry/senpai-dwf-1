import { useState } from "react";
import "./App.css";
import items from "./data";

function App() {
  const allCategories = ["all", ...new Set(items.map((item) => item.category))];

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our menu</h2>
          <div className='underline'></div>
        </div>
        <div className='btn-container'>
          <button type='button' className='filter-btn'>
            All
          </button>
          <button type='button' className='filter-btn'>
            Breakfast
          </button>
          <button type='button' className='filter-btn'>
            Lunch
          </button>
        </div>
        <div className='section-center'>
          <article className='menu-item'>
            <img src={items[0].img} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{items[0].title}</h4>
                <h4 className='price'>{items[0].price}</h4>
              </header>
              <p className='item-text'>{items[0].desc}</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default App;
