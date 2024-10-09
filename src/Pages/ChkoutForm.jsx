import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
 
} from "antd";
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
const App = () => {
  const [componentVariant, setComponentVariant] = useState("filled");
  const onFormVariantChange = ({ variant }) => {
    setComponentVariant(variant);
  };
  return (
    <>
      <div className="flex mt-14  bg-slate-600  ">
        <div className=" mt-20 w-1/2  h-1/2 ">
          <Form
            {...formItemLayout}
            onValuesChange={onFormVariantChange}
            variant={componentVariant}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              variant: componentVariant,
            }}>
           

            <Form.Item
              label="FirstName"
              name="Input"
              rules={[
                {
                  required: true,
                  message: "Please Enter First-Name",
                },
              ]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="LastName"
              rules={[
                {
                  required: true,
                  message: "Please Enter Last-Name",
                },
              ]}>
              <InputNumber
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>

            <Form.Item
              label="Address"
              name="TextArea"
              rules={[
                {
                  required: true,
                  message: "Address is Required",
                },
              ]}>
              <Input.TextArea />
            </Form.Item>

            <Form.Item
              label="City"
              name="dropdown"
              rules={[
                {
                  required: true,
                  message: "City is required",
                },
              ]}>
              <Select />
            </Form.Item>

            <Form.Item
              label="Postal Code"
              name="Select"
              rules={[
                {
                  required: true,
                  message: "Please Enter Postal Code !",
                },
              ]}>
              <Select />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="Select"
              rules={[
                {
                  required: true,
                  message: "Please Enter your phone number!",
                },
              ]}>
              <Select />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 6,
                span: 16,
              }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="  flex items-center justify-center w-1/2 bg-green-400  ">
          Products
        </div>
      </div>
    </>
  );
};
export default App;
