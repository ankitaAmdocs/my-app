import React from 'react';
import img from '../../images/stateSS.png';
const categoryData = require('../../data/category.json');


const Topic = () => {
  const categoryId = window.location.pathname.split("/")[2];
  const topicId = window.location.pathname.split("/")[3];

  const selectedCategory = categoryData.filter((item) => item.id === categoryId)[0];
  const selectedTopic = selectedCategory.topics.filter((topic) => topic.id === topicId)[0]
  console.log("selectedTopic", selectedTopic);
  return (
    <div className='grid'>
    <div className="docs-content">
      <h1 className="docs-title">{selectedTopic.title}</h1>
      <div>
      <div className='grid-content'>
      <p>{selectedTopic.description}</p>
        <div className="doc-callout">
            <img src={selectedTopic.image} alt="" height="30" />
            <p>{selectedTopic.notes}</p>
        </div>
        <h3 >DocxTube </h3>
        <a target="_blank" href= {selectedTopic.videoUrl}>
        <img src={img} alt="" height='200px' />
        </a>
        <h3 >Confluence</h3>
        <a href= {selectedTopic.confluenceLink}>{selectedTopic.confluenceLink}</a>
      </div>
      </div>
    </div>
    </div>
  )
};

Topic.propTypes = {};

Topic.defaultProps = {};

export default Topic;
