import React, {useState,useEffect } from 'react'
import './_videoHorizontal.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, useHistory } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'
import { Row, Col } from 'react-bootstrap';
import './_videoHorizontal.scss'
import request from '../../api';
function VideoHorizontal({video, searchScreen}) {
    const {
        id,
        snippet: {
           channelId,
           channelTitle,
           description,
           title,
           publishedAt,
           thumbnails: { medium },
           resourceId,
        },
     } = video
  
     const isVideo = !(id.kind === 'youtube#channel')
  
     const [views, setViews] = useState(null)
     const [duration, setDuration] = useState(null)
     const [channelIcon, setChannelIcon] = useState(null)
 
   
 
    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds * 1000).format('mm:ss')
 
    const history = useHistory()
    const _channelId = resourceId?.channelId || channelId
    const handleClick = () => {
        isVideo?
            history.push(`/watch/${id.videoId}`)
        :history.push(`/channel/${_channelId}`)
     }

     useEffect(() => {
        const get_video_details = async () => {
           const {
              data: { items },
           } = await request('/videos', {
              params: {
                 part: 'contentDetails,statistics',
                 id: id.videoId,
              },
           })
           setDuration(items[0].contentDetails.duration)
           setViews(items[0].statistics.viewCount)
        }
        get_video_details()
     }, [id])
  
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
           setChannelIcon(items[0].snippet.thumbnails.default)
        }
        get_channel_icon()
     }, [channelId])
    return (
            <Row className="videoHori"  onClick={handleClick}>
                <Col xs={6} md={searchScreen?4:4} className="thumbnail">
                    {(
                        <LazyLoadImage 
                        src={isVideo? medium.url: channelIcon?.url}
                        alt="thumbnail Hori"
                        effect="blur"
                    />
                    )}
                    {isVideo && (
                        <span className="duration">{_duration}</span>
                    )}
                </Col>
                <Col xs={6} md={searchScreen?8:8} className="info">
                    <h3 className="info__title">{title}</h3>
                    <p className="info__channel">{channelTitle}</p>

                    {isVideo && (
                        <p className="info__desc">{numeral(100000).format('0.a')} Views . {moment(publishedAt).fromNow()}</p>
                    )}

                    {isVideo && (
                        <p>{description}</p>
                    )}

                </Col>
            </Row>
    )
}

export default VideoHorizontal
