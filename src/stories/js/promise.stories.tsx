/* eslint-disable import/first */
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";

import { storiesOf } from "@storybook/react";

import notes from "./promise.md";

storiesOf("js|异步编程", module).add("promise", () => <MyPromise />, {
    notes: { markdown: notes }
});

function testPromise() {
    function callback() {
        console.log("Done");
    }

    console.log("before setTimeout()");
    setTimeout(callback, 1000);
    console.log("after setTimeout");

    function test(resolve: any, reject: any) {
        let timeOut = Math.random() * 2;
        console.log("set timeout to: " + timeOut + " seconds.");
        setTimeout(function () {
            if (timeOut < 1) {
                console.log("call resolve()...");
                resolve("200 OK"); // 异步操作，返回resolve表示成功
            } else {
                console.log("call reject()...");
                reject("timeout in " + timeOut + " seconds."); // 异步操作，返回reject表示失败
            }
        }, timeOut * 1000);
    }

    // promise对象负责执行test函数，承诺执行
    let p1 = new Promise(test);
    let p2 = p1.then(function (result) {
        console.log("成功：" + result);
    });
    let p3 = p2.catch(function (reason) {
        console.log("失败：" + reason);
    });
}

const codeString = `
  function callback() {
    console.log("Done");
  }
  
  console.log("before setTimeout()");
  setTimeout(callback, 1000);
  console.log("after setTimeout");
  
  function test(resolve, reject) {
    let timeOut = Math.random() * 2;
    console.log("set timeout to: " + timeOut + " seconds.");
    setTimeout(function() {
      if (timeOut < 1) {
        console.log("call resolve()...");
        resolve("200 OK"); // 异步操作，返回resolve表示成功
      } else {
        console.log("call reject()...");
        reject("timeout in " + timeOut + " seconds."); // 异步操作，返回reject表示失败
      }
    }, timeOut * 1000);
  }
  
  // promise对象负责执行test函数，承诺执行
  let p1 = new Promise(test);
  let p2 = p1.then(function(result) {
    console.log("成功：" + result);
  });
  let p3 = p2.catch(function(reason) {
    console.log("失败：" + reason);
  });
`;

function MyPromise() {
    testPromise();

    return (
        <>
            <SyntaxHighlighter language="javascript" style={docco}>
                {codeString}
            </SyntaxHighlighter>
        </>
    );
}
