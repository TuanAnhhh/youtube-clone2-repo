import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videosAction'
import './_categoriesBar.scss'
const keywords = [
    'All',
    'React js',
    'Angular js',
    'React native',
    'Redux',
    'Coding',
    'Football',
    'Spring boot',
    'Python',
    'Machine learing',
    'Thay giao ba',
    'The heroes'

]
function CategoriesBar() {
    const [activeItem, setActiveItem] = useState('All')
    const dispatch = useDispatch();

    const handleClickItem = (v) => {
        setActiveItem(v)
        if(v === 'ALL'){
            dispatch(getPopularVideos())
        }else {
            dispatch(getVideosByCategory(v))
        }
    }
    return (
        <div className="categoriesBar">
            {keywords.map((value, i) => (
                <span 
                    key={i} 
                    className={`categoriesBar__item 
                    ${activeItem ===value? 'categoriesBar__item--active':''}`} 
                    onClick={()=> handleClickItem(value)}
                >{value}
                </span>
            ))}
        </div>
    )
}
export default CategoriesBar
