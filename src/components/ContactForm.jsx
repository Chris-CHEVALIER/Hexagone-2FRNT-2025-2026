import { useState } from 'react'
import { Button, TextField, Box } from '@mui/material'

export default function ContactForm () {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <>
      <h2>Nous contacter</h2>
      <Box
        sx={{
          display: 'flex',
          width: '50%',
          flexDirection: 'column',
          gap: 2,
          marginBottom: 2
        }}
      >
        <TextField
          type='text'
          name='firstName'
          id='firstName'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          required
          placeholder='Votre prénom'
          label='Prénom'
          variant='outlined'
        />

        <TextField
          type='text'
          name='lastName'
          id='lastName'
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          required
          label='Nom de famille'
          variant='outlined'
          placeholder='Votre nom'
        />

        <TextField
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder='Votre adresse e-mail'
          label='E-mail'
          variant='outlined'
        />

        <Button variant='contained' color='success'>
          Envoyer
        </Button>
      </Box>
    </>
  )
}
