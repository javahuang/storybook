import React, { useState, useEffect, useRef, ChangeEventHandler } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";

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
import "./index.css";
import full from "./full.svg";
import close from "./close.svg";

require("codemirror/mode/css/css");
require("codemirror/mode/htmlmixed/htmlmixed");

interface CodeProps {
  html?: string;
  css?: string;
  javascript?: string;
}

interface SourceComponentProps {
  code: CodeProps | string;
  title?: string;
  defaultMode?: "html" | "all" | "css" | "javascript";
  defaultCodeFull?: boolean;
  defaultPreviewFull?: boolean;
}

function buildHtml(code: CodeProps): string {
  return `
<html>
<head>
<style type="text/css">
    ${code.css}
</style>
</head>
<body>
    ${code.html ? code.html : ""}
</body>
<script>
    ${code.javascript}
</script>
</html>
    `;
}

const modeType = {
  css: "text/css",
  html: "text/html",
  javascript: "text/javascript",
  all: "text/html"
};

export default function LiveEditor(props: SourceComponentProps) {
  const {
    code,
    defaultMode = "all",
    title,
    defaultCodeFull,
    defaultPreviewFull
  } = props;
  const [value, setValue] = useState<CodeProps>(
    typeof code === "string"
      ? {
          html: code
        }
      : code
  );
  const [mode, setMode] = useState<"css" | "html" | "javascript" | "all">(
    defaultMode
  );

  const [codeFull, setCodeFull] = useState(defaultCodeFull);
  const [previewFull, setPreviewFull] = useState(defaultPreviewFull);

  const editor = useRef<any>();

  const options = {
    mode: modeType[mode],
    // theme: 'solarized light',
    lineNumbers: true,
    styleActiveLine: true, // 选中行高亮
    lineWrapping: true,
    extraKeys: { "Alt-/": "autocomplete" },
    viewportMargin: Infinity
  };

  function updatePreview() {
    var previewFrame = document.getElementById("preview");
    var preview =
      previewFrame.contentDocument || previewFrame.contentWindow.document;
    preview.open();
    preview.write(buildHtml(value));
    preview.close();
  }

  useEffect(() => {
    const delay = setTimeout(updatePreview, 600);
    return () => {
      clearTimeout(delay);
    };
  }, [value]);

  useEffect(() => {}, [mode]);

  return (
    <div
      style={{
        display: "flex",
        border: "1px solid #03A9F4",
        marginBottom: 10,
        marginRight: 20
      }}
    >
      {code && !previewFull && (
        <div style={{ flex: 1, borderRight: "3px solid #2196F3" }}>
          <h3
            style={{
              lineHeight: "30px",
              margin: 0,
              fontSize: 12,
              background: "#f0f3f9",
              paddingLeft: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            代码{title ? `-${title}` : ""}
            <span style={{ display: "flex", alignItems: "center" }}>
              <select
                style={{ height: 20, marginRight: 10 }}
                onChange={e => setMode(e.target.value)}
                value={mode}
              >
                <option value="all">all</option>
                <option value="css">css</option>
                <option value="javascript">javascript</option>
                <option value="html">html</option>
              </select>
              {!codeFull && (
                <img
                  src={full}
                  style={{ height: 17 }}
                  onClick={() => setCodeFull(true)}
                  alt="full"
                />
              )}
              {codeFull && (
                <img
                  src={close}
                  onClick={() => setCodeFull(false)}
                  style={{ height: 17 }}
                  alt="close"
                />
              )}
            </span>
          </h3>
          <CodeMirror
            autoCursor
            className="codeMirror"
            editorDidMount={e => (editor.current = e)}
            value={mode === "all" ? buildHtml(value) : value[mode]}
            options={options}
            onBeforeChange={(editor, data, val) => {
              setValue({
                ...value,
                [`${mode}`]: val
              });
            }}
          />
        </div>
      )}
      {!codeFull && (
        <div style={{ flex: 1 }}>
          <h3
            style={{
              lineHeight: "30px",
              margin: 0,
              fontSize: 12,
              background: "#f0f3f9",
              paddingLeft: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            效果
            {!previewFull && (
              <img
                src={full}
                style={{ height: 17 }}
                onClick={() => setPreviewFull(true)}
                alt="full"
              />
            )}
            {previewFull && (
              <img
                src={close}
                onClick={() => setPreviewFull(false)}
                style={{ height: 17 }}
                alt="close"
              />
            )}
          </h3>
          <div style={{ padding: 10 }}>
            <iframe
              id="preview"
              style={{ width: "100%", borderColor: "transparent" }}
              onLoad={e => {
                const obj = e.target;
                obj.style.height =
                  obj.contentWindow.document.body.scrollHeight + "px";
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
