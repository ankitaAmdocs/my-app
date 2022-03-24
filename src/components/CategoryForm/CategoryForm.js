import React, { useState } from 'react';
import TopicForm from '../TopicForm/TopicForm';
import {v4 as uuidv4} from "uuid";
import { addNewCategory } from '../../data/appendCategory';

const CategoryForm = () => {
  const MAX_DESCRIPTION_LENGTH = 250;
  const [categoryDetails, setCategoryDetails] = useState({id: uuidv4()});
  const [topics, setTopics] = useState([]);

  const modifyTopicList = (topicDetails) => {
    setTopics(topics => {
      let indexOfTopic = topics.findIndex(topic => topic.id === topicDetails.id)
      return [
          ...topics.slice(0,indexOfTopic),
          {
            ...topics[indexOfTopic],
            title: topicDetails.title,
            description: topicDetails.description,
            imageLink: topicDetails.imageLink
          },
          ...topics.slice(indexOfTopic + 1)
      ]
    });
  }
  return <div>
    <div>
      <h2>Category</h2>
      <input type="text" placeholder='Title' value={categoryDetails.title} onChange={(e) => setCategoryDetails(prevState => ({...prevState, title: e.target.value}))} />
      <textarea placeholder='Description' maxLength={MAX_DESCRIPTION_LENGTH} value={categoryDetails.description} onChange={(e) => setCategoryDetails(prevState => ({...prevState, description: e.target.value}))}></textarea>
      <h3>Topics</h3>
      { topics.length > 0 && topics.map(topic => <TopicForm modifyTopicList={modifyTopicList} key={topic.id} topic={topic} setTopics={setTopics}/>) }
      <button disabled={topics.length > 0 && Object.keys(topics[topics.length - 1]).length === 1} onClick={() => setTopics(prevList => [...prevList, {id: uuidv4()}])}>Add New Topic</button>
      <button onClick={() => mapAndAddCategory(categoryDetails, topics)}>Save</button>
    </div>
  </div>
}

const mapAndAddCategory = (categoryDetails, topics) => {
  const categoryFormat = {
    id: categoryDetails.id,
    name: categoryDetails.title,
    description: categoryDetails.description,
    topics: topics.map(topic => (
      {
        id: topic.id,
        title: topic.title,
        description: topic.description,
        videoUrl: topic.videoLink
      }
    ))
  };
  console.log("=====>> data prepared", categoryFormat);

  addNewCategory(categoryFormat);
  
}


export default CategoryForm;
