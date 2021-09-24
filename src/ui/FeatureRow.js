import React, {useEffect} from 'react'

import { Flex, Text, Button} from 'theme-ui'

import Codeblock from '../ui/Codeblock'



const FeatureRow = props => {

    return(
    <Flex sx={{justifyContent: 'center', alignItems: 'flex-start',  py:7, mx:5, borderBottom: '1px solid', borderColor: 'g_1'}}>
        <Flex sx={{width: '35rem', height: '25rem', bg: 'g_1'}}>
            <img src={props.img} style={{width: '100%', height: '100%'}}/>
        </Flex>
        <Flex sx={{flexDirection: 'column', pl:8}}>
            <Text as='h3' sx={{mb: 4, fontWeight:'bold', fontSize: [8,9,10], color: 'primary_light', fontFamily: 'heading'}}>{props.title}</Text>
            <Text as='p' sx={{mb: 5, fontFamily: 'body'}} dangerouslySetInnerHTML={{__html: props.content}}></Text>
            <Flex sx={{mb:5}}>
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