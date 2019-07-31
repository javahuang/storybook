/* eslint-disable import/first */
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";

import { storiesOf } from "@storybook/react";

import notes from "./generator.md";

storiesOf("js|异步编程", module).add("generator", () => <Generator />, {
    notes: { markdown: notes }
});

function testGenerator() {
    function* foo(x: number) {
        var y = 2 * (yield x + 1);
        var z = yield y / 3;
        return x + y + z;
    }

    var it = foo(5);

    console.log(it.next()); // { value:6, done:false }
    console.log(it.next(12)); // { value:8, done:false }  将 12 传递给 yield(x+1) 表达式，所以 y=2*12
    console.log(it.next(13)); // { value:42, done:true }

    function* goo() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
        return 6;
    }

    for (var v of goo()) {
        console.log(v);
    }

    console.log(v);
}

const codeString = `
  function* foo(x) {
    var y = 2 * (yield x + 1);
    var z = yield y / 3;
    return x + y + z;
  }
  
  var it = foo(5);

  console.log(it.next()); // { value:6, done:false }
  console.log(it.next(12)); // { value:8, done:false }  将 12 传递给 yield(x+1) 表达式，所以 y=2*12
  console.log(it.next(13)); // { value:42, done:true }
  
  function* goo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
  }
  
  for (var v of goo()) {
    console.log(v);
  }
  
  console.log(v);
`;

function Generator() {
    testGenerator();

    return (
        <>
            <SyntaxHighlighter language="javascript" style={docco}>
                {codeString}
            </SyntaxHighlighter>
        </>
    );
}
