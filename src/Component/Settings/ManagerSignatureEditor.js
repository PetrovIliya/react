import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import ManagerSignatureForm from "./Form/ManagerSignatureForm";

class ManagerSignatureEditor extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="mangerSignatureEditorContainer row border-1">
                <div className="col-sm-8">
                <ManagerSignatureForm>
                </ManagerSignatureForm>
                </div>
                <div className="col-sm-4">
                    Preview
                </div>
            </div>
        );
    }

}

export default ManagerSignatureEditor;