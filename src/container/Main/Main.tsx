import React from 'react'
import { Container } from '@mui/material'
import ProductList from 'components/Products/ProductList'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <Container>
                <ProductList></ProductList>
            </Container>
        </>
    )
}

export default Main
