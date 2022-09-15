import { Typography } from '@mui/material'
import React from 'react'
import ProductListItem from './ProductListItem'

type Props = {}

const ProductList = (props: Props) => {
    return (
        <>
            <Typography variant="h4" textAlign="center">
                <ProductListItem />
            </Typography>
        </>
    )
}

export default ProductList
