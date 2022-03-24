import React from 'react';
import PropTypes from 'prop-types';
const categoryData = require('../../data/category.json');


const Topic = () => {
  const categoryId = window.location.pathname.split("/")[2];
  const topicId = window.location.pathname.split("/")[3];

  const selectedCategory = categoryData.filter((item) => item.id === categoryId)[0];
  const selectedTopic = selectedCategory.topics.filter((topic) => topic.id === topicId)[0]
  console.log("selectedTopic", selectedTopic);
  return (
    <div className="docs-content">
      <h1 className="docs-title">{selectedTopic.title}</h1>
      <p>{selectedTopic.description}</p>
      <div>
        <div className="doc-callout">
          <div >
            <img src={selectedTopic.image} alt="" height="30" />
          </div>
          {selectedTopic.notes}
        </div>

        <h3 >DocxTube </h3>
        <p>{selectedTopic.videoUrl}</p>
        <h3 >Confluence</h3>
        <p>{selectedTopic.confluenceLink}</p>
      </div>

    </div >
  )
};

Topic.propTypes = {};

Topic.defaultProps = {};

export default Topic;
