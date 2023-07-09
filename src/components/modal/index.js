import { useState } from 'react';
import './style.css';


function Modal({ handleChangeModal, modalOpen, setPosts, posts }) {

  const [input, setInput] = useState('')
  const [textArea, setTextArea] = useState('')

  function handleAddNewPost() {

    if (!input || !textArea) {
      return;
    }

    const newPost = {
      id: posts[posts.length - 1].id + 1,
      title: input,
      text: textArea,
    }

    setPosts([...posts, newPost])

    setInput('')
    setTextArea('')

    handleChangeModal()

  }

  return (

    <>
      {modalOpen && (
        <div className='backdrop'>

          <div className='modal'>

            <h2>Create Post</h2>

            <input
              type='text'
              placeholder='Title'
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />

            <textarea
              placeholder='Text'
              value={textArea}
              onChange={(event) => setTextArea(event.target.value)}
            />

            <button
              className='btn-primary'
              onClick={handleAddNewPost}
            >
              Publish New Post</button>

            <button
              onClick={handleChangeModal}
              className='btn-secundary'
            >
              Close
            </button>


          </div>

        </div>
      )}
    </>

  )

}

export default Modal;