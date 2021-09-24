/** @jsxImportSource theme-ui */

import React, { useEffect, useRef } from 'react'

import hljs from 'highlight.js'
import 'highlight.js/styles/devibeans.css'

const Codeblock = props => {

    let html = hljs.highlightAuto(props.code || '').value

    useEffect(()=>{
        hljs.highlightAll()
    }, [])

    return(
        <pre className="hljs" sx={{bg: 'g_1', borderRadius: 3, p:2}}>
            <code sx={{bg:'transparent'}}
                className="javascript"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </pre>
    )
}
export default Codeblock