import React, {useEffect} from 'react'
import { AiFillLike, AiFillDislike } from 'react-icons/ai'
import './_videoMetaData.scss'
import ShowMoreText from 'react-show-more-text'
import numeral from 'numeral'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { getChannelDetails, getSubcriptionStatus } from '../../redux/actions/channelAction'
function VideoMetaData({video:{snippet, statistics}, videoId}) {
    const {channelId, channelTitle, description, title, publishedAt} = snippet
    const {viewCount, likeCount, dislikeCount} = statistics

    const dispatch = useDispatch()


    const {snippet: channelSnippet, statistics: channelStatistics } = useSelector(state => state.channelDetailsReducer.channel)
    const {subscriptionStatus} = useSelector(state => state.channelDetailsReducer.subscriptionStatus)

    useEffect(() => {
        dispatch(getChannelDetails(channelId))
        // dispatch(getSubcriptionStatus(channelId))
     }, [dispatch, channelId])

   
    //  const {thumbnails} = channel.snippet

    //  const {subscriberCount} = channel.statistics

  

    return (
        <div className="videoMeta">
            <h3 className="videoMeta__title">
                {title}
            </h3>
            <div className="info">
                <div className="info__text">{numeral(viewCount).format('0.0a')} Views . {moment(publishedAt).fromNow()}</div>
                <div className="info__menu">
                    <AiFillLike/><span className="liked"> {numeral(likeCount).format('0.a')}</span>
                    <AiFillDislike/><span> {numeral(dislikeCount).format('0.a')}</span>
                </div>
            </div>
            <div className="channelInfo">
                <div className="channelInfo__channel">
                    {/* <img src={thumbnails?.default?.url} alt="" /> */}
                    <img src={channelSnippet?.thumbnails?.default?.url} alt="" />
                    <div className="channel1">
                        <span className="name">{channelTitle}</span>
                        <span className="subs">{numeral(channelStatistics?.subscriberCount).format('0.0a')} Subscribes</span>
                    </div>
                </div>
                <button className={`channelInfo__btn ${subscriptionStatus && 'channelInfo__btn--gray'} `}>
                    {subscriptionStatus? 'Subcribed': 'Subcribe'}
                </button>
            </div>
            <div className="videoMeta__desc">
                <ShowMoreText
                    lines={3}
                    more="SHOW MORE"
                    less="SHOW LESS"
                    expanded={false}
                    anchorClass='showMoreText'
                >
                {description}
                </ShowMoreText>
            </div>
        </div>
    )
}
export default VideoMetaData
