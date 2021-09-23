/** @jsxImportSource theme-ui */
import React from 'react'

import { Flex, Box, Button } from 'theme-ui'
import { Link } from 'react-router-dom'

const Navbar = props => {
    return(
        <Flex as='nav' sx={{
            width: '100%', 
            bg: 'primary', 
            justifyContent: 'space-between',
            alignItems: 'center',
            p:2,
            px:3
        }}>
            <Link to='/'>
                <h1 sx={{color: 'primary'}} >Animatour</h1>
            </Link>

            <Flex>
                <Link to='/docs'>
                    <Button>
                        DOCUMENTATION
                    </Button>
                </Link>
            </Flex>
        </Flex>
    )
}
export default Navbar