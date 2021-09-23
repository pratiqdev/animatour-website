import React, {useEffect} from 'react'

import { Flex, Text, Button} from 'theme-ui'

import Codeblock from '../ui/Codeblock'



const FeatureRow = props => {

    return(
    <Flex sx={{justifyContent: 'center', alignItems: 'flex-start',  py:5, mx:5, borderBottom: '1px solid', borderColor: 'g_1'}}>
        <Flex sx={{width: '35rem', height: '25rem', bg: 'g_1'}}>
            <img src={props.img} style={{width: '100%', height: '100%'}}/>
        </Flex>
        <Flex sx={{flexDirection: 'column', pl:4}}>
            <Text as='h3' sx={{mb: 3, fontSize: 5, color: 'primary_light', fontFamily: 'heading'}}>{props.title}</Text>
            <Text as='h3' sx={{mb: 3}} dangerouslySetInnerHTML={{__html: props.content}}></Text>
            <Flex sx={{mb:3}}>
                <Codeblock code={props.code}/>
            </Flex>
            <a href={props.sandbox}>
                <Button>Codesandbox</Button>
            </a>
        </Flex>
    </Flex>
    )
}

export default FeatureRow