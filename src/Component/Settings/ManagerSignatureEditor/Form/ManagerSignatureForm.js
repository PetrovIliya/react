import React from "react";
import {Button, Col, Form} from "react-bootstrap";
import * as randomKey from 'randomkey'
import ObjectUtils from "../../../../Utils/ObjectUtils";

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
                'code3': 'name'
            },
            onChange: props.onChange
        };
    }

    render() {
        const { variables } = this.state;
        const variablePairs = ObjectUtils.maikePairs(variables);
        console.log(variablePairs);

        return (
            <Form
                noValidate
                className="m-lg-5"
                onChange={this.props.onChange}
            >
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
                <Button type="submit" className="mt-4 float-lg-end">Submit form</Button>
            </Form>
        )
    }

    _maikePairs(object) {

    }
}

export default ManagerSignatureForm;