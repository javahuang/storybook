import React, { useState, useEffect, useRef } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';

import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/solarized.css";
import "codemirror/mode/javascript/javascript";

import "codemirror/addon/selection/active-line.js";

import "codemirror/addon/hint/css-hint";
import "codemirror/addon/hint/html-hint";
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/show-hint.css";


require('codemirror/mode/css/css');
require('codemirror/mode/htmlmixed/htmlmixed');

interface SourceComponentProps {
    code?: string;
    language?: "text/css" | "text/html" | "text/javascript";
    title?: string
}


const codeTemplate = `
<html>
<head>
<style type="text/css">

</style>
</head>

<body>

</body>

</html>
`
export default function LiveEditor(props: SourceComponentProps) {

    const { code = codeTemplate, language = "text/html", title } = props;

    const [value, setValue] = useState(code);
    const [mode, setMode] = useState("text/html")

    const editor = useRef<any>();

    const options = {
        mode,
        // theme: 'solarized light',
        lineNumbers: true,
        styleActiveLine: true, // 选中行高亮
        lineWrapping: true,
        extraKeys: { "Alt-/": "autocomplete" },
    }

    function updatePreview() {
        var previewFrame = document.getElementById('preview');
        var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
        preview.open();
        preview.write(value);
        preview.close();
    }

    useEffect(() => {
        const delay = setTimeout(updatePreview, 400);
        return () => {
            clearTimeout(delay);
        }
    }, [value])

    useEffect(() => {
        console.dir(editor.current)
    }, [mode])

    return (
        <div style={{ display: 'flex', border: '1px solid #03A9F4', marginBottom: 10 }}>
            {
                code && <div style={{ flex: 1, borderRight: '3px solid #2196F3' }}>
                    <h3 style={{ lineHeight: '30px', margin: 0, fontSize: 12, background: '#f0f3f9', paddingLeft: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        代码{title ? `-${title}` : ""}
                        <select style={{ height: 20, marginRight: 10 }} onChange={e => setMode(e.target.value)}>
                            <option value="text/html">all</option>
                            <option value="text/css">css</option>
                            <option value="text/javascript">javascript</option>
                            <option value="text/html">html</option>
                        </select>
                    </h3>
                    <CodeMirror
                        autoCursor
                        editorDidMount={e => editor.current = e}
                        value={value}
                        options={options}
                        onBeforeChange={(editor, data, val) => {
                            console.log(val)
                            setValue(val);
                        }}
                    />
                </div>
            }
            <div style={{ flex: 1 }}>
                < h3 style={{ lineHeight: '30px', margin: 0, fontSize: 12, background: '#f0f3f9', paddingLeft: 10 }}>效果</h3>
                <div style={{ padding: 10 }}>
                    <iframe id="preview" style={{ width: '100%', borderColor: 'transparent' }} onLoad={e => {
                        const obj = e.target;
                        obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
                    }}></iframe>
                </div>
            </div>
        </div>
    )
}
