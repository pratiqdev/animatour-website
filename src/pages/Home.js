import React from 'react'

import { Flex, Box, Button, Card, Text } from 'theme-ui'
import { Link } from 'react-router-dom'

import PackageLink from '../ui/PackageLink'
import FeatureRow from '../ui/FeatureRow'

const codeSample1 = 
`import animatour, { Brochure } from 'animatour'
                
animatour.newTour('My Tour', {...config})`

const Home = () => {
    return (
        <main>
            <Flex sx={{ width: '100vw', p: 4, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'primary_light' }}>
                <Box sx={{ width: '20rem', height: '20rem', bg: 'g_1' }} />
                <Text as='h1' sx={{ mt: 4, mb: 2, fontSize: 8, fontFamily: 'heading' }}>Animatour</Text>
                <Text as='p' sx={{ fontSize: 4, textAlign: 'center' }}>Animatable & customizable <br />tour guide manager</Text>
            </Flex>

            <Flex sx={{ width: '100vw', p: 3, bg: 'primary', justifyContent: 'center', alignItems: 'center' }}>
                <PackageLink source='YARN' code='yarn add animatour' />
                <PackageLink source='NPM' code='npm i animatour' />
                <PackageLink source='CDN' code='unpkg.com/animatour@3' />
            </Flex>

            <FeatureRow 
                img='logo192.png'
                title='Test Title'
                content='Content <br /><br />Thing'
                code={codeSample1}
                sandbox='https://google.com'
                demo=''
            />

            <FeatureRow 
                img='logo192.png'
                title='Test Title'
                content='Content <br /><br />Thing'
                code={codeSample1}
                sandbox='https://google.com'
                demo=''
            />

            <FeatureRow 
                img='logo192.png'
                title='Test Title'
                content='Content <br /><br />Thing'
                code={codeSample1}
                sandbox='https://google.com'
                demo=''
            />

            <Flex sx={{alignItems: 'center', flexDirection: 'column',  py:5, mx:5, borderBottom: '1px solid', borderColor: 'g_1'}}>
                <Text as='h3' sx={{fontSize: 5, fontFamily: 'heading', color: 'primary_light', mb:3}}>A section</Text>
                <Text sx={{fontSize: 2, maxWidth: '60vw', textAlign: 'center', lineHeight: '2rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus neque at tellus finibus tristique. 
                In venenatis, diam eu ultricies bibendum, risus sem placerat magna, eget maximus turpis nulla id mauris. Quisque egestas leo a lectus varius consectetur. 
                Etiam nec nulla ultrices, mattis libero sed, rhoncus nisl. Nunc velit ex, volutpat ac odio nec, iaculis imperdiet tellus. 
                Etiam sagittis lorem eu volutpat venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                Curabitur convallis, magna a ullamcorper cursus, augue dolor tempor sapien, id maximus justo nunc vel justo. Nullam lobortis mattis metus vitae maximus. 
                Ut blandit nisl diam. In pretium enim vitae feugiat tincidunt. </Text>
            </Flex>

            <Flex sx={{alignItems: 'center', flexDirection: 'column',  py:5, mx:5, borderBottom: '1px solid', borderColor: 'g_1'}}>
                <Text as='h3' sx={{fontSize: 5, fontFamily: 'heading', color: 'primary_light', mb:3}}>A section</Text>
                <Text sx={{fontSize: 2, maxWidth: '60vw', textAlign: 'center', lineHeight: '2rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus neque at tellus finibus tristique. 
                In venenatis, diam eu ultricies bibendum, risus sem placerat magna, eget maximus turpis nulla id mauris. Quisque egestas leo a lectus varius consectetur. 
                Etiam nec nulla ultrices, mattis libero sed, rhoncus nisl. Nunc velit ex, volutpat ac odio nec, iaculis imperdiet tellus. 
                Etiam sagittis lorem eu volutpat venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                Curabitur convallis, magna a ullamcorper cursus, augue dolor tempor sapien, id maximus justo nunc vel justo. Nullam lobortis mattis metus vitae maximus. 
                Ut blandit nisl diam. In pretium enim vitae feugiat tincidunt. </Text>
            </Flex>

            <Flex sx={{alignItems: 'center', flexDirection: 'column',  py:5, mx:5, borderBottom: '1px solid', borderColor: 'g_1'}}>
                <Text as='h3' sx={{fontSize: 5, fontFamily: 'heading', color: 'primary_light', mb:3}}>Get Started</Text>
                <Flex>
                    <Link to='/demo'><Button sx={{mr:4}}>DEMOS</Button></Link>
                    <Link to='/docs'><Button sx={{mr:4}}>DOCUMENTATION</Button></Link>
                    <a href='https://www.github.com/pratiqdev/animatour'><Button sx={{mr:4}}>GITHUB</Button></a>
                </Flex>
            </Flex>

            <Flex sx={{alignItems: 'center', flexDirection: 'column',  py:4, bg: 'g_1'}}>
                <Text as='h3' sx={{fontSize: 2, color: 'g_3'}}>-- Open Source License -- Social Links --</Text>
            </Flex>





        </main>
    )
}

export default Home