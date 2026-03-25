import { Box } from '@mui/material'
import LegoItem from './LegoItem'

export default function LegoList ({ legos }) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 2
      }}
    >
      {legos.map(lego => (
        <LegoItem key={lego.id} lego={lego} />
      ))}
    </Box>
  )
}
