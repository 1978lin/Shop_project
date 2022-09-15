import { Grid, Typography } from '@mui/material'
import React from 'react'
import ProductListItem from './ProductListItem'
import productsArray from './ProductsArray'
import { ProductProps } from './ProductListItem'

type Props = {}

const ProductList = (props: Props) => {
    return (
        <>
            <Typography variant="h4" textAlign="center" margin={3}>
                Product list
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                {productsArray.map(
                    ({
                        name,
                        description,
                        type,
                        capacity,
                        price,
                    }: ProductProps) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <ProductListItem
                                name={name}
                                type={type}
                                description={description}
                                capacity={capacity}
                                price={price}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductList
