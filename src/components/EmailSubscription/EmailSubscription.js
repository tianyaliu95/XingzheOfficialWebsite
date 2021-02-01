import { useState } from 'react'

export default function EmailSubscription ({ height }) {
  const [emailInput, setEmailInput] = useState('')
  const [shouldDisplayMessage, setShouldDisplayMessage] = useState(false)
  const [messageType, setMessageType] = useState('')

  const updateEmail = (enteredEmail) => {
    setEmailInput(enteredEmail)
  }

  const submitEmail = () => {
    if (isEmailValid(emailInput)) {
      // TODO - Replace with API call
      setTimeout(() => {
        setShouldDisplayMessage(true)
        setMessageType('success')
        setEmailInput('')
      }, 300)
    } else {
      setShouldDisplayMessage(true)
      setMessageType('error')
    }

    // setTimeout(() => {
    //   setShouldDisplayMessage(false)
    // }, 3000)
  }

  const isEmailValid = (email) => {
    const regex = /[^@]+@[^.]+\..+/
    if (!email || !regex.test(email)) {
      return false
    }
    return true
  }

  const backgroundImage = '/assets/wallpaper9.jpg'

  return (
    <div
      className={`flex flex-col items-center justify-center bg-grays-700 bg-no-repeat bg-cover w-full ${height}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: '50% 100%'
      }}
    >
      <div className='my-10'>

        <div className='mx-3 text-white text-center font-primary text-lg'>
          欢迎订阅行者房车营地以掌握关于营地的最新资讯及优惠折扣哦！
        </div>

        <div className='flex items-center justify-center mx-4 mt-4 mb-1 lg:mx-0'>
          <div className='flex flex-col w-full lg:flex-row'>
            <input
              className='placeholder-grays-400 text-center lg:text-left pl-3 w-auto h-10 lg:h-auto lg:w-2/3'
              placeholder='请输入您的邮箱'
              type='email'
              name='email'
              id='email'
              value={emailInput}
              onChange={(e) => updateEmail(e.target.value)}
            />
            <span className='w-auto h-12 mt-3 lg:mt-0 lg:w-1/3'>
              <button
                className='flex w-full items-center justify-center h-10 lg:h-12 px-4 text-sm lg:text-base bg-primary text-white duration-100 active:bg-success hover:bg-success'
                onClick={submitEmail}
              >
                订阅
              </button>
            </span>

          </div>
        </div>

        <Message shouldDisplay={shouldDisplayMessage} messageType={messageType} />

      </div>
    </div>
  )
}

function Message ({ shouldDisplay, messageType }) {
  if (!shouldDisplay) {
    return null
  }

  const message = messageType === 'success'
    ? '邮件订阅成功！'
    : '请提供有效的邮箱地址'

  const color = messageType === 'success'
    ? 'text-gold'
    : 'text-grays-100'

  return (
    <div className={`font-bold text-lg text-center lg:text-left lg:pl-1 ${color}`}>
      {message}
    </div>
  )
}
