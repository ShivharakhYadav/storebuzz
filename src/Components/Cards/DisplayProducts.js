import { useState } from 'react'
import { Typography, CardActions, Card, CardActionArea, CardMedia, CardContent, Box, Paper } from '@mui/material'
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Icon,Grid } from '@mui/material'


function DisplayProducts(props) {
    const { productId, name, price, rating, quantity, category, weight, image1, image2 } = props.item;
    const [imageState, setImageState] = useState(image1)
    return (
        <>
           
               
                    <Grid item md={3}>
                        <Box pt={3}>
                                <Card sx={{ maxWidth: 342, height: 370, marginTop: "10px" }}>
                                    <CardActionArea>
                                        <CardMedia sx={{ marginTop: "", height: 250, width: 250 }}
                                            component="img"
                                            height="140"
                                            image={imageState}
                                            alt="green iguana"
                                            onMouseOver={() => setImageState(image2)}
                                            onMouseOut={() => setImageState(image1)}
                                        />
                                        <CardContent sx={{ height: 60 }}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {price}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small"><Icon><ShoppingCartOutlinedIcon /></Icon>Add To Cart</Button>
                                    </CardActions>
                                </Card>
                                
                        </Box>
                    </Grid>
                
           
        </>
        //  {/* <>
        //      <img onMouseOver={() => setImageState(image2)} onMouseOut={() => setImageState(image1)} id={id} src={imageState} style={{ height: 200 }} />
        //  </> */}
    )
}
export default DisplayProducts;
//<img onMouseOver={() => setImageState(image2)} onMouseOut={() => setImageState(image1)} id={id} src={imageState} style={{ height: 200 }} />
