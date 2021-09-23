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
        <pre className="hljs">
            <code sx={{bg: 'g_1', borderRadius: 6}}
                className="javascript"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </pre>
    )
}
export default Codeblock