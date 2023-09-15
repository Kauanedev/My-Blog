import './style.css'

function Header({ handleChangeModal }) {

  return (

    <header className='header'>

      <h1>My Blog</h1>

      <button
        onClick={handleChangeModal}
        className='btn-primary'
      >
        Create Post
      </button>

    </header>
  )

}

export default Header;
