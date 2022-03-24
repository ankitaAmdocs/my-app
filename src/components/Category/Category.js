import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
const categoryData = require('../../data/category.json');

const Category = () => {
  const categoryId = window.location.pathname.split("/")[2];
  const selectedCategory = categoryData.filter((item) => item.id === categoryId)[0];

  return (
    <div className="grid" >
      <div className="col-1-12">&nbsp;</div>
      <div className="col-10-12">
        <div className="docs-content">
          <h1 className="docs-title">{selectedCategory.name}</h1>
          <div><p>{selectedCategory.description}</p>
            {selectedCategory?.topics.map((topic) => {
              return (
                <Link to={`/homepage/${selectedCategory.id}/${topic.id}`} activeClassName="active">
                  <div className="post-preview">
                    <a href="local">
                      <div className="post-header">
                        <img src={topic.image} alt="" />
                        <h2>{topic.title}</h2>
                      </div>
                      <div className="post-content">
                        {topic.description}
                      </div>
                    </a>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      <div className="col-1-12">&nbsp;</div>
    </div>
  )
};



Category.propTypes = {};

Category.defaultProps = {};

export default Category;
