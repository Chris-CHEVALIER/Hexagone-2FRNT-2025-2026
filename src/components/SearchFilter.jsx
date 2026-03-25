import { TextField } from '@mui/material'

export default function SearchFilter ({ search, setSearch }) {
  return (
    <TextField
      sx={{ marginBottom: 2 }}
      type='search'
      name='search'
      id='search'
      value={search}
      onChange={e => setSearch(e.target.value)}
      required
      label='Rechercher'
      variant='outlined'
      placeholder='Votre recherche'
    />
  )
}
