import React from 'react'
import { Card, CardActions, Button, CardContent } from '@mui/material'
// import classes from './ProductListItem.module.css'
import './ProductListItem.scss'

type ProductProps = {
    name: string
    description: string
    type: string
    capacity: number
    price: number
}

const ProductListItem = ({
    name,
    description,
    type,
    capacity,
    price,
}: ProductProps) => {
    return (
        <Card>
            <CardContent>
                <h4 className="product-title">{name}</h4>
                <div className="product-description">{description}</div>
                <div className={`product-type`}>{type}</div>
                <div className="product-feature">Capacity: {capacity} Gb</div>
                <div className="product-price">$ {price} </div>
            </CardContent>
            <CardActions className="btn-wrap">
                <Button variant="outlined"> Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
