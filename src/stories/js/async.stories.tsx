/* eslint-disable import/first */
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";

import { storiesOf } from "@storybook/react";

import notes from "./async.md";

storiesOf("js|async", module).add("async", () => <Async />, {
  notes: { markdown: notes }
});

function testAsync() {
  function timeout(ms: number) {
    return new Promise((resolve: any) => {
      setTimeout(resolve("123"), ms);
    });
  }
  // 返回是一个 Promise 对象
  async function asyncPrint(value: string, ms: number) {
    let x = 12;
    let b = await timeout(ms);
    console.log("b" + b);
    console.log(value);
    return x;
  }

  // async 表示函数内部有异步操作，调用该函数会立即返回一个 Promise 对象
  // 遇到 await 会闲返回，等到异步操作完成，接着执行后面的语句
  asyncPrint("hello world", 5000).then(function(result) {
    console.log("result:" + result);
  });
}

const codeString = `
function timeout(ms: number) {
    return new Promise((resolve: any) => {
      setTimeout(resolve("123"), ms);
    });
  }
  // 返回是一个 Promise 对象
  async function asyncPrint(value: string, ms: number) {
    let x = 12;
    let b = await timeout(ms);
    console.log("b" + b);
    console.log(value);
    return x;
  }

  // async 表示函数内部有异步操作，调用该函数会立即返回一个 Promise 对象
  // 遇到 await 会闲返回，等到异步操作完成，接着执行后面的语句
  asyncPrint("hello world", 5000).then(function(result) {
    console.log("result:" + result);
  });
`;

function Async() {
  testAsync();

  return (
    <>
      <SyntaxHighlighter language="javascript" style={docco}>
        {codeString}
      </SyntaxHighlighter>
    </>
  );
}
