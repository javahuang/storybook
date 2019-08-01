/* eslint-disable import/first */
import React from "react";

import { storiesOf } from "@storybook/react";

import "./center.css";
import notes from "./center.md";
import SourceComponent from '../../react/components/SourceComponent'

storiesOf("css|布局", module).add("center", () => <All />, {
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

function All() {
    return (
        <div className="center">
            <SourceComponent code={code1} language="css" title="">
                <div className="t1-p">
                    <div className="t1-c">
                        this is a test
                    </div>
                </div>
            </SourceComponent>
        </div>
    );
}
