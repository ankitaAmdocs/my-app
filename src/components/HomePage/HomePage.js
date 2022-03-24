import React, { useContext } from 'react';
import '../../App.css';
import { LoginContext } from '../../App';
import { Link } from 'react-router-dom';
import Category from '../Category/Category';
const categoryData = require('../../data/category.json');

const HomePage = () => {
  const { isLoggedIn } = useContext(LoginContext);
  return (
    <div className="grid">
      <div className="col-1-12">&nbsp;</div>
      <div className="col-10-12">
        <div className="docs-content">
          <h1 className="docs-title">Welcome to Helper Docs</h1>
          <div>
            <ul className="doc-items">
              {listItems}
              {isLoggedIn && <li ><a className="box-link" href="/docs/user-guide"><img alt="imageText" src="https://www.iconpacks.net/icons/1/free-plus-icon-321-thumb.png" />
                <div className="doc-item-info">
                  <h2>Add Category</h2>
                </div></a></li>}
            </ul>
          </div>
        </div>
      </div>
      <div className="col-1-12">&nbsp;</div>
    </div>
  )
};
const listItems = categoryData.map((categoryItem) =>
  <Link to={`/homepage/${categoryItem.id}`} activeClassName="active">
    <li>
      <img alt="imageText" src={categoryItem.image} />
      <div className="doc-item-info">
        <h2>{categoryItem.name}</h2>
        <p>{categoryItem.description}</p>
      </div>
    </li>
  </Link>

);
HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
