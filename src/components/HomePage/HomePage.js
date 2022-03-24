import React, { useContext, useState } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { CategoryContext, LoginContext } from '../../App';
import Category from '../Category/Category';
const categoryData = require('../../data/category.json');

const HomePage = () => {
  const { isLoggedIn } = useContext(LoginContext);
  const {categoryList} = useContext(CategoryContext);

  const [categoryData, setCategoryData] = useState(categoryList);
  return (
    <div className="grid">
      <div className="col-1-12">&nbsp;</div>
      <div className="col-10-12">
        <div className="docs-content">
          <h1 className="docs-title">Welcome to Helper Docs</h1>
          <div>
            <ul className="doc-items">
            {renderCategories(categoryData)}

{isLoggedIn && <li><Link to="/category/create"><img alt="imageText" src="https://www.iconpacks.net/icons/1/free-plus-icon-321-thumb.png" />

  <div className="doc-item-info">

    <h2>Add Category</h2>

  </div></Link></li>}

</ul>
          </div>
        </div>
      </div>
      <div className="col-1-12">&nbsp;</div>
    </div>
  )
};
const renderCategories = (categoryData) => {
  return categoryData.map((categoryItem) =>
    <li>

      <Link to={`/homepage/${categoryItem.id}`} activeClassName="active">

          <div className='imageBox'>

            <img alt="imageText" src={categoryItem.image} />

          </div>

          <div className="doc-item-info">

            <h2>{categoryItem.name}</h2>

            <p>{categoryItem.description}</p>

          </div>

      </Link>

    </li>

  );

}

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
