import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Container, Grid, Typography, Box, Icon } from '@mui/material'
function AddProducts() {
    const [productId, setProductId] = useState(new Date().getTime().toString());
    const [name, setName] = useState(null);
    const [price, setPrice] = useState(null)
    const [rating,setRating]=useState(null);
    const [quantity,setQuantity]=useState(null);
    const [category,setCategory]=useState(null);
    const [weight,setWeight]=useState(null);
    const [image1,setFirstImage]=useState('');
    const [image2,setSecondImage]=useState('');



    const history = useNavigate();
    
    
    function addProduct() {
        setProductId(new Date().getTime().toString());
        let addNewProduct = ({ productId, name,price,rating,quantity,category,weight,image1,image2});
       console.log(addNewProduct);

        fetch("https://retoolapi.dev/pDnXgS/data",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addNewProduct)
            }).then((result) => {
                result.json().then((res) => {
                    console.log(res)
                }
                )
            })
    }

    
    return (
        <Container sx={{  margin: 10, }} >
            <Grid container spacing={2} justifyContent={'center'}>
                <Grid item>
                    <Box>
                        <Typography variant="h4" marginBottom={2}>Add Product</Typography>
                        <TextField style={{width:'300px'}} id="standard-basic" label="Name" variant="outlined" onChange={(e) => setName(e.target.value)} /><br /><br />
                        <TextField style={{width:'300px'}} id="standard-basic" label="Price" variant="outlined" onChange={(e) => setPrice(e.target.value)} /><br /><br />
                        <TextField style={{width:'300px'}} id="standard-basic" label="Rating"  variant="outlined" onChange={(e) => setRating(e.target.value)} /><br /><br />
                        <TextField style={{width:'300px'}} id="standard-basic" label="Quantity" variant="outlined" onChange={(e) => setQuantity(e.target.value)} /><br /><br />
                        <TextField style={{width:'300px'}} id="standard-basic" label="Category" variant="outlined" onChange={(e) => setCategory(e.target.value)} /><br /><br />
                        <TextField style={{width:'300px'}} id="standard-basic" label="Weight" variant="outlined" onChange={(e) => setWeight(e.target.value)} /><br /><br />
                        <TextField style={{width:'300px'}} id="standard-basic" label="image 1"  variant="outlined" onChange={(e) => setFirstImage(e.target.value)} /><br /><br />
                        <TextField style={{width:'300px'}} id="standard-basic" label="image 2"  variant="outlined" onChange={(e) => setSecondImage(e.target.value)} /><br /><br />
                        
                        
                        <Button variant="contained" onClick={addProduct} endIcon={<SendIcon />}>
                            Add Product
                        </Button>
                        
                    </Box>
                </Grid>

            </Grid>
        </Container>
    )
}
export default AddProducts;