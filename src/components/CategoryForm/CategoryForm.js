import React, { useContext, useState } from 'react';
import TopicForm from '../TopicForm/TopicForm';
import {v4 as uuidv4} from "uuid";
import { CategoryContext } from '../../App';
import { useHistory } from 'react-router-dom';

const CategoryForm = () => {
  const MAX_DESCRIPTION_LENGTH = 250;
  const [categoryDetails, setCategoryDetails] = useState({id: uuidv4()});
  const [topics, setTopics] = useState([]);
  let {setCategoryList} = useContext(CategoryContext);
  const history = useHistory();

  const mapAndAddCategory = (categoryDetails, topics) => {
    console.log("====> categoryDetails", categoryDetails);
    console.log("=====> topics", topics);
    const newCategory = {
      id: categoryDetails.id,
      name: categoryDetails.title,
      description: categoryDetails.description,
      image: categoryDetails.image,
      topics: topics.map(topic => (
        {
          id: topic.id,
          title: topic.title,
          description: topic.description,
          videoUrl: topic.videoLink,
          image: topic.image
        }
      ))
    };
    setCategoryList(prevState => [...prevState, newCategory]);
    history.push("/homepage");
  }

  const modifyTopicList = (topicDetails) => {
    setTopics(topics => {
      let indexOfTopic = topics.findIndex(topic => topic.id === topicDetails.id)
      return [
          ...topics.slice(0,indexOfTopic),
          {
            ...topics[indexOfTopic],
            title: topicDetails.title,
            description: topicDetails.description,
            image: topicDetails.image,
            videoLink: topicDetails.videoLink
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
      <input type="text" placeholder='Image' value={categoryDetails.image} onChange={(e) => setCategoryDetails(prevState => ({...prevState, image: e.target.value}))} />
      <h3>Topics</h3>
      { topics.length > 0 && topics.map(topic => <TopicForm modifyTopicList={modifyTopicList} key={topic.id} topic={topic} setTopics={setTopics}/>) }
      <button disabled={topics.length > 0 && Object.keys(topics[topics.length - 1]).length === 1} onClick={() => setTopics(prevList => [...prevList, {id: uuidv4()}])}>Add New Topic</button>
      <button disabled={topics.length <= 0 || Object.keys(categoryDetails).length === 1 || Object.keys(categoryDetails).find(el => el.length < 1)} onClick={() => mapAndAddCategory(categoryDetails, topics)}>Save</button>
    </div>
  </div>
}


export default CategoryForm;
