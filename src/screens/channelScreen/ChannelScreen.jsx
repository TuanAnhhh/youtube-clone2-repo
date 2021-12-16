import moment from 'moment';
import numeral from 'numeral';
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Video from '../../components/video/Video';
import { getChannelDetails } from '../../redux/actions/channelAction';
import { getVideosByChannel } from '../../redux/actions/videosAction';
import './_channelScreen.scss'
function ChannelScreen() {
    const dispatch = useDispatch();
    const {channelId} = useParams()

    useEffect(() => {
        dispatch(getVideosByChannel(channelId))
        dispatch(getChannelDetails(channelId))
    }, [dispatch, channelId])

    const {videos, loading } = useSelector(state => state.channelVideosReducer)
    const {channel, loadingChannel } = useSelector(state => state.channelDetailsReducer)
    console.log(channel);
    const {snippet, statistics} = channel

    return (
        <>
            <div className="channelScreen">
                <img src={snippet?.thumbnails?.high?.url} alt="" className="channelScreen__thumbnail" />
                <div className="channelScreen__info">
                    <img src={snippet?.thumbnails?.medium?.url} alt="" />
                    <div className="text">
                        <h4>{snippet?.title}</h4>
                        <p>{numeral(statistics?.subscriberCount).format('0.00a')} Subcribers</p>
                    </div>
                    <div className="button">Subscribe</div>
                </div>
            </div>
            <Container>
                <Row>
                    {!loading? videos.map(video => (
                        <Col md={3} lg={3}>
                            <Video
                                video={video} channelScreen
                            />
                        </Col>
                    )): (
                        <h3>loading...</h3>
                    )}
                </Row>
            </Container>
        </>
    )
}

export default ChannelScreen
