import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './_loginScreen.scss'
import {login} from './../../redux/actions/authAction'
import { useHistory } from 'react-router-dom'
function LoginScreen() {
    const dispatch = useDispatch()
    const accessToken = useSelector(state => state.authReducer.accessToken)
    const history = useHistory()


    const handleLogin = () => {
        dispatch(login())
    }

    useEffect(() => {
        if(accessToken){
            history.push('/')
        }
    }, [accessToken, history])


    return (
        <div className="login">
            <div className="main">
                <img src="https://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
                <button onClick={handleLogin}>Login With Google</button>
                <p>A Youtube clone project made using Youtube-api</p>
            </div>
            
        </div>
    )
}

export default LoginScreen
