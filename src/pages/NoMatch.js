import React from 'react'
import { Flex, Box, Button } from 'theme-ui'

import Navbar from '../ui/Navbar'

const NoMatch = props => {
    return (
        <>
        <Navbar />
        <Flex sx={{minHeight: '90vh', width: '100vw', justifyContent: 'center', alignItems:'center'}}>
            <h2>These aren't the docs you're looking for.</h2>
        </Flex>
        </>
    )
}

export default NoMatch