import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import ManagerSignatureForm from "./Form/ManagerSignatureForm";
import HtmlViewer from "../../UiComponents/HtmlViewer";

class ManagerSignatureEditor extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            name: 1
        };
    }

    onFormChange = (data) => {
        console.log(data)
    }

    render() {
        let html = '<table><tbody><tr><td>{test}</td></tr><tr><td></j>Job title</td></tr></tbody></table>';
        html = html.replace('{test}', this.state.name);

        return (
            <div className="mangerSignatureEditorContainer row border-1">
                <div className="col-sm-8">
                    <ManagerSignatureForm onChange={this.onFormChange}/>
                </div>
                <div className="col-sm-4 mt-auto mb-auto" onClick={() => {
                   this.setState((state, props) => {
                        return { name: state.name + 1 };
                    });
                }}>
                    <HtmlViewer className="m-lg-2" htmlString={html} />
                </div>
            </div>
        );
    }

}

export default ManagerSignatureEditor;