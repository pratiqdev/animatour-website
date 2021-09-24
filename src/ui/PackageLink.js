import React from 'react'

import { Flex } from 'theme-ui'

const PackageLink = props => {
    return(
        <Flex sx={{mx:3}} onClick={()=>console.log(`PackageLink | copied: ${props.code}`)}>
            <Flex sx={{ 
                p: 4, 
                height: '3rem', 
                alignItems: 'center', 
                bg: 'g_0', 
                borderTopLeftRadius: 3, 
                borderBottomLeftRadius: 3 }}>
                    {props.source}
            </Flex>
            <Flex sx={{ 
                p: 4, 
                height: '3rem', 
                alignItems: 'center', 
                bg: 'g_1', 
                borderTopRightRadius: 3, 
                borderBottomRightRadius: 3,
                fontFamily: 'monospace' }}>
                    {props.code}
            </Flex>
        </Flex>
    )
}
export default PackageLink