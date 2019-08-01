import React from 'react'
import SyntaxHighlighter from "react-syntax-highlighter";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";

interface SourceComponentProps {
    children: any;
    code?: string;
    language?: string;
    title?: string
}

export default function SourceComponent(props: SourceComponentProps) {
    const { children, code, language = "javascript", title } = props;
    return (
        <div style={{ display: 'flex', border: '1px solid #03A9F4', marginBottom: 10 }}>
            {
                code && <div style={{ flex: 1, borderRight: '3px solid #2196F3' }}>
                    <h3 style={{ lineHeight: '30px', margin: 0, fontSize: 12, background: '#f0f3f9', paddingLeft: 10 }}>代码{title ? `-${title}` : ""}</h3>
                    <SyntaxHighlighter language={language} style={docco}>
                        {code}
                    </SyntaxHighlighter>
                </div>
            }
            <div style={{ flex: 1 }}>
                < h3 style={{ lineHeight: '30px', margin: 0, fontSize: 12, background: '#f0f3f9', paddingLeft: 10 }}>效果</h3>
                <div style={{ padding: 10 }}>
                    {
                        children
                    }
                </div>
            </div>
        </div>
    )
}  
