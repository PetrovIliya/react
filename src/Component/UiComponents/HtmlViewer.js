import React from "react";
import renderHTML from "react-render-html";

import "bootstrap/dist/css/bootstrap.min.css"

export default class HtmlViewer extends React.Component
{

    render() {
        return (
            <div className="p-2">
                { renderHTML(this.props.htmlString) }
            </div>
        );
    }
}