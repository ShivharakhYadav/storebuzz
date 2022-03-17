import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { CardActionArea, Paper } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { red,purple,grey,green } from '@mui/material/colors';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material'
// const useStyles = makeStyles((theme)=>({
//     root:{
//         width:"100vw",
//         height:"100vh",
//         backgroundColor:theme.palette.red[200]
//     }
// }))
import { styled } from '@mui/material/styles';


  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
    borderRadius:20
  }));
function CardsItems() {
    // const classes = useStyles();
    return (
        <Container>
            
            <Grid container justifyContent={"space-between"}>
                <Grid item >
                    <Box pt={3}>
                        <Paper>
                            <Card sx={{ maxWidth: 342,height:370, marginTop:"10px" }}>
                                <CardActionArea>
                                    <CardMedia sx={{marginTop:"",height:250,width:250 }}
                                        component="img"
                                        height="140"
                                        image="https://rukminim1.flixcart.com/image/612/612/kelptow0/cases-covers/flip-cover/h/j/d/kam-z1-pro-original-imafv8xghpgzc7hr.jpeg?q=70"
                                        alt="green iguana"
                                    />
                                    <CardContent sx={{height:60}}>
                                        <Typography color="text.secondary" sx={{height:20}}>Goldstar</Typography>
                                        <Typography gutterBottom variant="h5" component="div">
                                            ₹ 59,990 
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                <ColorButton><Button size="small" style={{color:'white'}}><ShoppingCartOutlinedIcon/>Add To Cart</Button></ColorButton>

                                </CardActions>
                            </Card>    
                        </Paper>
                    </Box>
                </Grid>
                <Grid item >
                    <Box pt={3}>
                        <Paper >
                            <Card sx={{ maxWidth: 342,height:370, marginTop:"10px" }}>
                                <CardActionArea>
                                    <CardMedia sx={{marginTop:"",height:250,width:250 }}
                                        component="img"
                                        height="140"
                                        image="https://rukminim1.flixcart.com/image/580/696/kw2fki80/shoe/p/j/4/-original-imag8tzbjxm4what.jpeg?q=50"
                                        alt="green iguana"
                                    />
                                    <CardContent sx={{height:60}}>
                                        <Typography color="text.secondary" sx={{height:20}}>Goldstar</Typography>
                                        <Typography gutterBottom variant="h5" component="div">
                                            ₹ 15,000 
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                <ColorButton><Button size="small" style={{color:'white'}}><ShoppingCartOutlinedIcon/>Add To Cart</Button></ColorButton>

                                </CardActions>
                            </Card>    
                        </Paper>
                    </Box>
                </Grid>
                <Grid item >
                    <Box pt={3}>
                        <Paper >
                            <Card sx={{ maxWidth: 342,height:370, marginTop:"10px" }}>
                                <CardActionArea>
                                    <CardMedia sx={{marginTop:"",height:250,width:250 }}
                                        component="img"
                                        height="140"
                                        image="https://rukminim1.flixcart.com/image/580/696/jn4x47k0/backpack/g/3/v/stanza-11894-backpack-wildcraft-original-imaf7qdcyjehwb6h.jpeg?q=50"
                                        alt="green iguana"
                                    />
                                    <CardContent sx={{height:60}}>
                                        <Typography color="text.secondary" sx={{height:20}}>Goldstar</Typography>
                                        <Typography gutterBottom variant="h5" component="div">
                                            ₹ 13,000
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                <ColorButton><Button size="small" style={{color:'white'}}><ShoppingCartOutlinedIcon/>Add To Cart</Button></ColorButton>

                                </CardActions>
                            </Card>    
                        </Paper>
                    </Box>
                </Grid>
                <Grid item >
                    <Box pt={3}>
                        <Paper >
                            <Card sx={{ maxWidth: 342,height:370, marginTop:"10px" }}>
                                <CardActionArea>
                                    <CardMedia sx={{marginTop:"",height:250,width:250}}
                                        component="img"
                                        height="140"
                                        image="https://rukminim1.flixcart.com/image/416/416/ksez24w0/computer/v/b/y/rmnb1001-thin-and-light-laptop-realme-original-imag5zhgw27k4tbb.jpeg?q=70"
                                        alt="green iguana"
                                    />
                                    <CardContent sx={{height:60}}>
                                        <Typography color="text.secondary" sx={{height:20}}>Goldstar</Typography>
                                        <Typography gutterBottom variant="h5" component="div">
                                            ₹ 20,000
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                <ColorButton><Button size="small" style={{color:'white'}}><ShoppingCartOutlinedIcon/>Add To Cart</Button></ColorButton>

                                </CardActions>
                            </Card>    
                        </Paper>
                    </Box>
                </Grid>
                
            </Grid>
        </Container>
    )
}
export default CardsItems;