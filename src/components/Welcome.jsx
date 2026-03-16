import logo from '../assets/react.svg'
import './Welcome.css'

export default function Welcome ({ firstName, lastName }) {
  return (
    <div>
      <h1 className='welcome-msg'>
        Bienvenue {firstName} {lastName} !
      </h1>

      <img src={logo} alt='Logo React' />
    </div>
  )
}
