import React, {useEffect, useState} from 'react'
import request from '../../api'
import './_video.scss'
import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, useHistory } from 'react-router-dom'
function Video({video, channelScreen}) {
    const history = useHistory()
    const {
            id,
            snippet:{channelId,channelTitle, title, publishedAt, 
                thumbnails:{medium} 
            }, 
            contentDetails
            } = video
    
    const [views, setViews] = useState(null)
    const [duration, setDuration] = useState(null)
    
    const seconds = moment.duration(duration).asSeconds();
    const _duration = moment.utc(seconds * 1000).format('mm:ss')

    const _videoId = id?.videoId || contentDetails?.videoId ||  id
    const [channelIcon, setChannelIcon] = useState(null)

    useEffect(() => {
        const get_video_details = async () => {
           const {
              data: { items },
           } = await request('/videos', {
              params: {
                 part: 'contentDetails,statistics',
                 id: _videoId,
              },
           })
           setDuration(items[0].contentDetails.duration)
           setViews(items[0].statistics.viewCount)
        }
        get_video_details()
     }, [_videoId])

    useEffect(() => {
        const get_channel_icon = async () => {
           const {
              data: { items },
           } = await request('/channels', {
              params: {
                 part: 'snippet',
                 id: channelId,
              },
           })
           setChannelIcon(items[0].snippet.thumbnails.default ? items[0].snippet.thumbnails.default: '')
        }
        get_channel_icon()
     }, [channelId])
     const handleWatchVideo = () => {
        history.push(`/watch/${_videoId}`)
     }
    return (
        <div className="video" onClick={handleWatchVideo}>
            <div className="video__thumbnail">
                <LazyLoadImage
                    alt="thumbnail"
                    src={medium.url} 
                    effect="blur"
                    />
                <span>{_duration}</span>
            </div>
            { 
                <div className="video__info">
                    {!channelScreen && <LazyLoadImage src={channelIcon?.url}  effect="blur" className="video__channel"/> }
                    <div className="video__text">
                        <h4>{title}</h4>
                        <p>{channelTitle}</p>
                        <p>{numeral(views).format("0.0a")} views . {moment(publishedAt).fromNow()}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Video
