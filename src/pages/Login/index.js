import {Card,Form,Input,Button,message} from 'antd';
import logo from '@/assets/logo.png';
import './index.scss';
import {useDispatch} from 'react-redux';
import {fetchLogin} from '@/store/modules/user';
import {useNavigate} from 'react-router-dom';

const Login = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        await dispatch(fetchLogin(values))
        navigate('/')
        message.success('登录成功')

    }
    return (
    <div className='login' >
        <Card className='login-container'>
            <img className='login-logo' src={logo} alt="" />
            <Form validateTrigger='onBlur' onFinish={onFinish} >
                <Form.Item 
                    name='mobile'
                    label='用户名'
                    rules={[
                        { required: true, message: '用户名不能为空' },
                        {
                            pattern: /^1[3-9]\d{9}$/,
                            message: '手机号格式不正确'
                        },]}
                >
                    <Input size='large' placeholder='请输入用户名'/>
                </Form.Item>
                <Form.Item
                    name='code'
                    label='密码'
                    rules={[
                        { required: true, message: '密码不能为空' }
                ]}
                >
                    <Input size='large' placeholder='请输入密码'/>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit' size='large' block>登录</Button>
                </Form.Item>
            </Form>

        </Card>
    </div>)
}
export default Login;