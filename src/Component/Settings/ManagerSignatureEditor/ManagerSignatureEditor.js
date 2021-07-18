import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import ManagerSignatureForm from "./Form/ManagerSignatureForm";
import HtmlViewer from "../../UiComponents/HtmlViewer";

import "./managerSignatureEditor.css";

class ManagerSignatureEditor extends React.Component
{
    _signatureModel = '<table><tbody><tr><td>{name}</td></tr><tr><td></j>{jobTitle}</td></tr></tbody></table>';

    constructor(props) {
        super(props);
        this.state = {
            signature: this.parseSignatureTemplate(this._signatureModel),
            templateVars: {}
        }
    }

    onFormChange = data => {

    };

    parseSignatureTemplate = (template, changedVars = {}) => {
        const templateVarsMatches = template.matchAll(/{(.*?)}/gim);
        const templateVarsMatchesArr = Array.from(templateVarsMatches);
        const defaultVarsValues = this.initTemplateVars(template);

        templateVarsMatchesArr.forEach( value => {
            const fullText = value[0];
            const textWithoutBrackets = value[1];

            template = template.replace(fullText, changedVars[textWithoutBrackets] ?? defaultVarsValues[textWithoutBrackets]);
        });

        return template;
    }

    initTemplateVars = template => {
        const templateVarsMatches = template.matchAll(/{(.*?)}/gim);
        const templateVarsMatchesArr = Array.from(templateVarsMatches);

        let templateVars = {};

        templateVarsMatchesArr.forEach( value => {
            const textWithoutBrackets = value[1];
            templateVars = Object.assign(templateVars, {
                [textWithoutBrackets]: 'Your ' + textWithoutBrackets
            })
        })

        return templateVars;
    }

    render() {

        return (
            <div className="manger-signature-editor-container row border-1 mt-5">
                <div className="col-sm-8 border-primary manager-signature-from-container">
                    <ManagerSignatureForm onChange={this.onFormChange}/>
                </div>
                <div className="col-sm-4 mt-5 html-views-container" onClick={() => {
                   this.setState(state => {
                       state.signature = this.parseSignatureTemplate(this._signatureModel, { name: 'changed' });
                       return state
                   });
                }}>
                    <div className="border-bottom border-primary pb-5">
                        <h5 className="text-primary text-center mb-4">Editable</h5>
                        <HtmlViewer className="m-lg-2" htmlString={this.state.signature}/>
                    </div>
                    <div className="mt-5">
                        <h5 className="text-primary text-center mb-4">Current</h5>
                        <HtmlViewer className="m-lg-2" htmlString={this.state.signature}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ManagerSignatureEditor;