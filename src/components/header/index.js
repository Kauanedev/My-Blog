import './style.css'

function Header({ handleChangeModal }) {

  return (

    <header className='header'>

      <h1>My Blog</h1>

      <button
        onClick={handleChangeModal}
        className='btn-primary'
      >
        Craete Post
      </button>

    </header>
  )

}

export default Header;