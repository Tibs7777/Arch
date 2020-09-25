import React, { useState, useRef } from 'react'
import './ConnectForm.scss'
import Button from '../ui/Button/Button'

const ConnectForm = () => {

    const [name, setName] = useState({value: '', valid: false})
    const [email, setEmail] = useState({value: '', valid: false})
    const [message, setMessage] = useState({value: '', valid: false})

    const nameGroup = useRef(null)
    const emailGroup = useRef(null)
    const messageGroup = useRef(null)

    const changeHandler = (e, func, ref) => {
        if(e.target.value){
            func({
                value: e.target.value,
                valid: true
            })
            ref.current.classList.remove('ConnectForm__group--error')
        } else {
            func({
                value: e.target.value,
                valid: false
            })
        }

    }

    const submitHandler = (e) => {
        e.preventDefault()
        if(!name.value) {
            nameGroup.current.classList.add('ConnectForm__group--error')
        }
        if(!email.value) {
            emailGroup.current.classList.add('ConnectForm__group--error')
        }
        if(!message.value) {
            messageGroup.current.classList.add('ConnectForm__group--error')
        }
    }

    return(
        <div className="ConnectForm">
            <h2 className="ConnectForm__title heading--secondary">Connect with us</h2>
            <form className="ConnectForm__form" onSubmit={(e) => submitHandler(e)}>
                <div className="ConnectForm__group" ref={nameGroup}>
                    <label htmlFor="ConnectForm__name" className="ConnectForm__label">Name</label>
                    <input type="text" id="ConnectForm__name" className="ConnectForm__input" onChange={(e) => changeHandler(e, setName, nameGroup)} value={name.value}/>
                    <span className="ConnectForm__error">Can't be empty</span>
                </div>
                <div className="ConnectForm__group" ref={emailGroup}>
                    <label htmlFor="ConnectForm__email" className="ConnectForm__label">Email</label>
                    <input type="email" id="ConnectForm__email" className="ConnectForm__input" onChange={(e) => changeHandler(e, setEmail, emailGroup)} value={email.value}/>
                    <span className="ConnectForm__error">Can't be empty</span>
                </div>
                <div className="ConnectForm__group" ref={messageGroup}>
                    <label htmlFor="ConnectForm__message" className="ConnectForm__label">Message</label>
                    <textarea name="message" id="ConnectForm__message" className="ConnectForm__message" onChange={(e) => changeHandler(e, setMessage, messageGroup)} value={message.value}></textarea>
                    <span className="ConnectForm__error ConnectForm__error--ta">Can't be empty</span>
                </div>
                <Button />
            </form>
        </div>
    )
}

export default ConnectForm