import { useState } from 'react';
import Header from '../../components/header';
import Post from '../../components/post';
import './style.css';
import Modal from '../../components/modal'

function Main() {

  const [posts, setPosts] = useState([

    {
      id: 1,
      title: "Post 1",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout The point of using Lorem Ipsum is that it has a more-or-less  making it look like readable English",
    },
    {
      id: 2,
      title: "Post 2",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout The point of using Lorem Ipsum is that it has a more-or-less  making it look like readable English",
    },
    {
      id: 3,
      title: "Post 3",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout The point of using Lorem Ipsum is that it has a more-or-less  making it look like readable English",
    },
    {
      id: 4,
      title: "Post 4",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout The point of using Lorem Ipsum is that it has a more-or-less  making it look like readable English"
    }

  ])

  const [modalOpen, setModalOpen] = useState(false);

  function handleChangeModal() {

    setModalOpen(!modalOpen);

  }


  return (

    <div className="container">

      <Header
        handleChangeModal={handleChangeModal}
      />

      <div className='container-posts'>

        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
          />
        ))}
      </div>

      <Modal
        handleChangeModal={handleChangeModal}
        modalOpen={modalOpen}
        setPosts={setPosts}
        posts={posts}
      />

    </div>

  );
}

export default Main;
