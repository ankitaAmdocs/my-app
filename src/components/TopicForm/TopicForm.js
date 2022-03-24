import React, { useState } from 'react';

const MAX_DESCRIPTION_LENGTH = 250;

const TopicForm = ({topic, modifyTopicList}) => {
  console.log("=====>> topic", topic);
  const [isEditMode, setIsEditMode] = useState(Object.keys(topic).length === 1);
  const [topicDetails, setTopicDetails] = useState({...topic});
  const modifyList = () => {
    modifyTopicList(topicDetails);
    setIsEditMode(false);
  }

  return (
    <div>
      {isEditMode ? showForm(topicDetails, setTopicDetails, modifyList) : showData(topicDetails)}
    </div>
  )
}

const showForm = (topic, setTopicDetails, modifyList) => {
  return <div>
    <input placeholder='title' type="text" value={topic.title} onChange={(e) => setTopicDetails(prevState => ({...prevState, title: e.target.value}))} />
    <textarea placeholder='description' maxLength={MAX_DESCRIPTION_LENGTH} value={topic.description} onChange={(e) => setTopicDetails(prevState => ({...prevState, description: e.target.value}))}></textarea>
    <input placeholder='video url' type="text" value={topic.videoLink} onChange={(e) => setTopicDetails(prevState => ({...prevState, videoLink: e.target.value}))}/>
    <input placeholder='image' type="text" value={topic.image} onChange={(e) => setTopicDetails(prevState => ({...prevState, image: e.target.value}))}/>
    <button disabled={Object.keys(topic).length < 4} onClick={modifyList}>Add Topic</button>
  </div>
}

const showData = (topic) => {
  return <div>
    <h2>{topic.title}</h2>
    <h3>{topic.description}</h3>
    <a href={topic.videoLink}>{topic.videoLink}</a>
    <a href={topic.image}>{topic.image}</a>
  </div>
}


export default TopicForm;
