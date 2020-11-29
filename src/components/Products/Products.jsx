import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';

// const products = [
//     { id: 1, name: 'Shoes', description: 'Running shoes', price: '$5', image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/e672e49d26a74938a82dab8001166db2_9366/Day_Jogger_Shoes_Black_FW4041_01_standard.jpg'},
//     { id: 2, name: 'Macbook', description: 'Apple Macbook', price: '$10', image: 'https://www.bhphotovideo.com/images/images2500x2500/apple_z0x1_mvfh_06_bh_13_3_macbook_air_with_1492907.jpg'},
// ]

const Products = ({ products }) => {
    const classes = useStyles();

    return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    );
}


export default Products;