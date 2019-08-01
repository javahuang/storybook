/* eslint-disable import/first */
import React from "react";

import { storiesOf } from "@storybook/react";

import "./border.css";
import notes from "./border.md";
import SourceComponent from '../react/components/SourceComponent'

storiesOf("css|属性", module).add("border", () => <All />, {
    notes: { markdown: notes }
});

const code1 = `
.triangle1 {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 20px 20px 20px;
    border-color: transparent transparent #ff0073 transparent;
}
`

const code2 = `
.triangle2 {
    margin-top: 20px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 40px;
    border-color: blue green #ff0073 yellow;
}
`

const code3 = `
div 的实际宽度 = 左右 border 的宽度 + width

子元素设置了 margin 但是没有撑开父元素
需要设置父元素的 overflow:hidden; 触发 BFC
`

const code4 = `
利用 border 创建两个三角形
然后利用两个三角形的背景色错位 1px 最终生成一个 <
`

function All() {
    return (
        <>
            <SourceComponent code={code1} language="css">
                <div className="triangle1" />
            </SourceComponent>

            <SourceComponent code={code2} language="css">
                <div className="triangle2" />
            </SourceComponent>

            <SourceComponent code={code3} language="txt">
                <div className="contentWrapper">
                    margin-top
                    <div className="innerContent">
                        content
                    </div>
                    margin-bottom
                </div>
            </SourceComponent>

            <SourceComponent code={code4} language="txt" title="利用 before/after/border 生成气泡箭头">
                <div className="dubble">
                    hello world
                </div>
            </SourceComponent>
        </>
    );
}
