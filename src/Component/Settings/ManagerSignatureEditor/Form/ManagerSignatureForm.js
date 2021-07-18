import React from "react";
import {Button, Col, Form} from "react-bootstrap";
import * as randomKey from 'randomkey'
import ObjectUtils from "../../../../Utils/ObjectUtils";
import "bootstrap/dist/css/bootstrap.min.css"
import Select from 'react-select';

import "./managerSignatureForm.css"

class ManagerSignatureForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            'boxes' : {
                1: "testBox@ispring.com",
                2: "testBox@ispring.com",
                3: "testBox@ispring.com"
            },
            'signatureTemplates' : {
                1: '<div>Template 1</div>',
                2: '<div>Template 2</div>',
                3: '<div>Template 3</div>'
            },
            'variables' : {
                'code1': 'name',
                'code2' : 'name2',
                'code3': 'name3',
                'code4': 'nam4',
                'code5' : 'name5',
                'code6': 'nam6',
                'code7': 'name7',
                'code8' : 'name8',
                'code9': 'nam9'
            },
            onChange: props.onChange,
            photoUrl: 'data:image/png;base64,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',
            photoFile: null
        };
    }

    triggerFileSelect = () => {
        this.hiddenFileInput.click();
    }

    handleFileChange = event => {
        const file = event.target.files[0];
        if (file)
        {
            this.setState({
                photoUrl : URL.createObjectURL(file),
                photoFile : file
            })
        }
    }

    render() {
        const { variables } = this.state;
        const variablePairs = ObjectUtils.maikePairs(variables);

        return (
            <Form
                noValidate
                className="mangerSignatureForm"
                onChange={this.props.onChange}
            >
                <div className="row mb-4">
                    <div className="col-sm-3">
                        <img src={this.state.photoUrl} className="photoPreview" alt="preview" />
                        <input type="file" onChange={this.handleFileChange} className="d-none" ref={input => this.hiddenFileInput = input} />
                        <Button type="button" className="mt-4 btn-sm btn-success" onClick={ this.triggerFileSelect }>Upload photo</Button>
                    </div>
                    <div className="col-sm-4">
                        <div className="w-75">
                            <Select
                                value={1}
                                options={[
                                    { value: 'chocolate', label: 'Chocolate' },
                                    { value: 'strawberry', label: 'Strawberry' },
                                    { value: 'vanilla', label: 'Vanilla' },
                                ]}
                                placeholder="Box"
                            />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="w-75">
                            <Select
                                value={1}
                                options={[
                                    { value: 'chocolate', label: 'Chocolate' },
                                    { value: 'strawberry', label: 'Strawberry' },
                                    { value: 'vanilla', label: 'Vanilla' },
                                ]}
                                placeholder="Signature"
                            />
                        </div>
                    </div>
                </div>
                {
                    variablePairs.map( (variablePair) =>
                    (
                        <div className="row" key={ randomKey(10)}>
                        {
                            Object.keys(variablePair).map( key =>
                            (
                                <Form.Group as={Col} key={ randomKey(10) } className="col-sm-6">
                                    <Form.Label className="mt-2">{variables[key]}</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name={key}
                                    />
                                    <Form.Control.Feedback>
                                        test
                                    </Form.Control.Feedback>
                                </Form.Group>
                            ))
                        }
                        </div>
                    ))
                }
                <Button type="submit" className="mt-4 float-lg-end btn-success">Save Signature</Button>
            </Form>
        )
    }
}

export default ManagerSignatureForm;