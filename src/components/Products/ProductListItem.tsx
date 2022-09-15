import { Card, CardActions, Button } from '@mui/material'
import React from 'react'

type Props = {}

const ProductListItem = (props: Props) => {
    return (
        <Card>
            <h4 className="product-title">iPhone X</h4>
            <div className="product-description">This is iPhone X</div>
            <div className="product-type">Type: phone</div>
            <div className="product-feature">Capacity: 64Gb</div>
            <div className="product-price">$ 500 </div>
            <CardActions>
                <Button> Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
