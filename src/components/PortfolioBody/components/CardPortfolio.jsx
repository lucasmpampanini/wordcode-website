import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardPortfolio({ srcImg, titulo, paragrafo, href }) {
  return (
    <Card sx={{ maxWidth: 345, margin: 5, }}>
      <CardMedia
        component="img"
        height="140"
        image={srcImg}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {paragrafo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
            size="small"
            href={href}
        >Veja o Site</Button>
      </CardActions>
    </Card>
  );
}