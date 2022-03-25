import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid'
import { Container } from '@mui/material'
import DisplayProducts from './DisplayProducts';
function CardsItems() {
    const [imageData, setImageData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    function fetchData() {
        fetch("https://retoolapi.dev/pDnXgS/data").then((imageResults) => {
            imageResults.json().then((imageResponse) => {
                setImageData(imageResponse)
            })
        })
    }
    return (
        <>
        <Container>
         <Grid container spacing={3}>

            {
                imageData.map((item) => {
                    return <DisplayProducts item={item} key={item.id}></DisplayProducts>
                })}
                </Grid>
                </Container>
        </>




    )
}
export default CardsItems;


// <Grid item >
//     <Box pt={3}>
//         <Paper>
//             <Card sx={{ maxWidth: 342, height: 370, marginTop: "10px" }}>
//                 <CardActionArea>
//                     <CardMedia sx={{ marginTop: "", height: 250, width: 250 }}
//                         component="img"
//                         height="140"
//                         image="https://rukminim1.flixcart.com/image/612/612/kelptow0/cases-covers/flip-cover/h/j/d/kam-z1-pro-original-imafv8xghpgzc7hr.jpeg?q=70"
//                         alt="green iguana"
//                     />
//                     <CardContent sx={{ height: 60 }}>
//                         <Typography color="text.secondary" sx={{ height: 20 }}>Goldstar</Typography>
//                         <Typography gutterBottom variant="h5" component="div">
//                             ₹ 59,990
//                         </Typography>
//                     </CardContent>
//                 </CardActionArea>
//                 <CardActions>
//                     <ColorButton><Button size="small" style={{ color: 'white' }}><ShoppingCartOutlinedIcon />Add To Cart</Button></ColorButton>

//                 </CardActions>
//             </Card>
//         </Paper>
//     </Box>
// </Grid>
{/* <Grid item >
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
                </Grid> */}