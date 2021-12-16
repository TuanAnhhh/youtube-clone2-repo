import React from 'react'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import {log_out} from './../../redux/actions/authAction'
function SidebarRow(props) {
    const dispatch = useDispatch();
    const history = useHistory()
    const handleOnClick = () => {
        if(title ==='Exit')
            dispatch(log_out())
        else if(title ==='Subscriptions'){
            history.push('/feed/subscriptions')
        }
       
    }
    const {Icon, title} = props
    return (
        <li onClick={handleOnClick}>
        <Icon size={22}/>
        <span>{title}</span>
    </li>
    )
}

export default SidebarRow
