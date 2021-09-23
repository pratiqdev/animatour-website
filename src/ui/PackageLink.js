import React from 'react'

import { Flex } from 'theme-ui'

const PackageLink = props => {
    return(
        <Flex sx={{mx:2}} onClick={()=>console.log(`PackageLink | copied: ${props.code}`)}>
            <Flex sx={{ 
                p: 3, 
                height: '3rem', 
                alignItems: 'center', 
                bg: 'g_0', 
                borderTopLeftRadius: 6, 
                borderBottomLeftRadius: 6 }}>
                    {props.source}
            </Flex>
            <Flex sx={{ 
                p: 3, 
                height: '3rem', 
                alignItems: 'center', 
                bg: 'g_1', 
                borderTopRightRadius: 6, 
                borderBottomRightRadius: 6,
                fontFamily: 'monospace' }}>
                    {props.code}
            </Flex>
        </Flex>
    )
}
export default PackageLink