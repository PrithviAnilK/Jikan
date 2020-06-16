import React from 'react'
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux'
import { changePomodoro, changeShortBreak, changeLongBreak } from '../actions'
import history from '../history'
import { Card } from 'antd';

const Demo = (props) => {
  const onFinish = ({pomodoro, short, long}) => {
      var valid1 = /^\d+$/.test(pomodoro)
      var valid2 = /^\d+$/.test(short)
      var valid3 = /^\d+$/.test(long)
      if(valid1 && valid2 && valid3)
      {
          props.changePomodoro(pomodoro);
          props.changeShortBreak(short);
          props.changeLongBreak(long);
          console.log('Success:', [pomodoro, short, long]);
          history.goBack();
    }
    else 
    {
        onFinishFailed();
    }
  };

  const onFinishFailed = () => {
    alert("Enter a valid time (number)!");
  };

  return (
    <Card style={{ width: "90%", margin: "0 auto", padding:"20px 0", height: "100vh"}}>
        <div style = {{textAlign: "center", backgroundColor: "white"}}>
        <h1 style = {{fontSize: "40px"}}>
            Settings
        </h1>
        <Form
        name="basic"
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        span={12} offset={6}
        >
        <Form.Item
            label="Pomodoro"
            name="pomodoro"
            rules={[
            {
                required: true,
                message: 'Please input the Pomodoro time!',
            },
            ]}
        >
            
            <Input />
        </Form.Item>

        <Form.Item
            label="Short Break"
            name="short"
            rules={[
            {
                required: true,
                message: 'Please input the Short Break time!',
            },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Long Break"
            name="long"
            rules={[
                {
                    required: true,
                    message: 'Please input the Long Break time!',
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
        </Form.Item>
        </Form>
        </div>
    </Card>
  );
};

const mapStateToProps = (state) => {
    return {
        beginningTime: state.beginningTime
    }
}


export default connect(mapStateToProps, { changePomodoro, changeShortBreak, changeLongBreak })(Demo);