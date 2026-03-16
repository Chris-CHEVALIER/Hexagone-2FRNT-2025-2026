import './App.css'
import Button from './components/Button'
import Lorem from './components/Lorem'
import Welcome from './components/Welcome'

export default function App () {
  const students = [
    { id: 1, firstName: 'Mélodie', lastName: 'REY' },
    { id: 2, firstName: 'Florian', lastName: 'LECHEVALLIER' },
    { id: 3, firstName: 'Eladji', lastName: 'FOFANA' }
  ]

  return (
    <>
      <Lorem />
      <Button />
      {students.map(student => (
        <Welcome
          key={student.id}
          firstName={student.firstName}
          lastName={student.lastName}
        />
      ))}
    </>
  )
}
