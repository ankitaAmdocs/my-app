import React from 'react';
import '../../App.css';
const categoryData = require('../../data/category.json');

const HomePage = () => (

  <div className="grid">
    <div className="col-1-12">&nbsp;</div>
    <div className="col-10-12">
      <div className="docs-content">
        <h1 className="docs-title">Welcome to Helper Docs</h1>
        <div>
          <ul className="doc-items">
            {listItems}
          </ul>
        </div>
      </div>
    </div>
    <div className="col-1-12">&nbsp;</div>
  </div>

);
const listItems = categoryData.map((categoryItem) =>
  <li><a className="box-link" href="/docs/user-guide"><img alt="imageText" src={categoryItem.image} />
    <div className="doc-item-info">
      <h2>{categoryItem.name}</h2>
      <p>{categoryItem.description}</p>
    </div></a></li>
);
HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
