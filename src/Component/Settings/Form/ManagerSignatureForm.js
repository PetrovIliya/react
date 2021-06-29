import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import { Formik } from "formik";
import * as yup from 'yup';
import * as randomKey from 'randomkey'

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
                'code2' : 'name2'
            },
            validated: false
        };
    }

    render() {
        const { variables } = this.state;

        const schema = yup.object().shape(
            {
               'code1': yup.string().required(),
               'code2': yup.string().required()
            }
        );

        return (
            <Form
                noValidate
                onSubmit={handleSubmit}
            >
                {
                    Object.keys(variables).map( (key) =>
                        (
                            [
                                <Form.Group key={ randomKey(10) }>
                                    <Form.Label>{variables[key]}</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name={key}
                                        value={values[key]}
                                        onChange={handleChange}
                                        isInvalid={!!errors[key]}
                                    />
                                    <Form.Control.Feedback>
                                        {errors[key]}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            ]
                        )
                    )
                }
                <Button type="submit">Submit form</Button>
            </Form>
        )
    }
}

export default ManagerSignatureForm;