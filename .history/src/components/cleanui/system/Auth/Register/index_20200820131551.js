/* eslint-disable */

import React from 'react'
import { connect } from 'react-redux'
import { Input, Button, Form } from 'antd'
import { Link } from 'react-router-dom'
import style from '../style.module.scss'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyC48bzbm7ZvLsRqVPAMRXBcnDIPmguSZ5o',
  authDomain: 'hose-stream.firebaseapp.com',
  databaseURL: 'https://hose-stream.firebaseio.com',
  projectId: 'hose-stream',
  storageBucket: 'hose-stream.appspot.com',
  messagingSenderId: '934238488425',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebase.auth
export default firebaseApp



const mapStateToProps = ({ user, settings, dispatch }) => ({
  dispatch,
  user,
  authProvider: settings.authProvider,
  logo: settings.logo,
})

const Register = ({ dispatch, user, authProvider, logo }) => {
  const onFinish = values => {
    console.log("Hey Yah")
    dispatch({
      type: 'user/REGISTER',
      payload: values,
    })
  }

  async function login(email, password) {
    return firebaseAuth()
      .signInWithEmailAndPassword(email, password)
      .then(() => true)
      .catch(error => {
        notification.warning({
          message: error.code,
          description: error.message,
        })
      })
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  const changeAuthProvider = value => {
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'authProvider',
        value,
      },
    })
  }

  return (
    <div>
      <div className={`card ${style.container}`}>
        <div className="text-dark font-size-24 mb-4">
          <strong>Create your account</strong>
        </div>
        <div className="mb-4">
          <p>
            And start spending more time on your projects and less time managing your
            infrastructure.
          </p>
        </div>
        <Form
          layout="vertical"
          hideRequiredMark
          onFinish={login}
          onFinishFailed={onFinishFailed}
          className="mb-4"
        >
          <Form.Item
            name="fullname"
            rules={[{ required: true, message: 'Please input your full name' }]}
          >
            <Input size="large" placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your e-mail address' }]}
          >
            <Input size="large" placeholder="Email Address" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your e-mail address' }]}
          >
            <Input type="password" size="large" placeholder="Password" />
          </Form.Item>
          <Button type="primary" htmlType="submit" size="large" className="text-center w-100">
            <strong>Sign up</strong>
          </Button>
        </Form>
        <div>
          <span className="mr-1">By signing up, you agree to the</span>
          <a href="#" onClick={e => e.preventDefault()} className="kit__utils__link">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" onClick={e => e.preventDefault()} className="kit__utils__link">
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="text-center pt-2 mb-auto">
        <span className="mr-2">Already have an account?</span>
        <Link to="/auth/login" className="kit__utils__link font-size-16">
          Sign in
        </Link>
      </div>
    </div>
  )
}

//export default connect(mapStateToProps)(Register)
