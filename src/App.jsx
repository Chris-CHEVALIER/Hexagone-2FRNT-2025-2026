import { useState } from 'react'
import './App.css'
import logo from './assets/logo.webp'
import SearchFilter from './components/SearchFilter'
import LegoList from './components/LegoList'
import ContactForm from './components/ContactForm'
import { legos } from './data/lego'

export default function App () {
  const [search, setSearch] = useState('')
  const filteredLegos = legos.filter(lego =>
    lego.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='app'>
      <img src={logo} alt='Logo LEGO' className='logo' />
      <SearchFilter search={search} setSearch={setSearch} />
      <LegoList legos={filteredLegos} />
      <ContactForm />
    </div>
  )
}
