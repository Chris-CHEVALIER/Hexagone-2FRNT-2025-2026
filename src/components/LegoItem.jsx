import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@mui/material'

export default function LegoItem ({ lego }) {
  return (
    <div>
      <Card sx={{ width: 320 }}>
        <CardMedia sx={{ height: 140 }} image={lego.image} title={lego.name} />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            {lego.name}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            {lego.price} €
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size='small'>Modifier</Button>
          <Button size='small'>Supprimer</Button>
        </CardActions> */}
      </Card>
    </div>
  )
}
