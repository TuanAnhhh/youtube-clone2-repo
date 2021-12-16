import React, {useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Comments from '../../components/comments/Comments'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import { getRelatedVideos, getVideoById } from '../../redux/actions/videosAction'
import './_watchScreen.scss'
function WatchScreen() {
    const {id} = useParams()
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getVideoById(id))
       dispatch(getRelatedVideos(id))
    }, [dispatch,id])

    const {video,loading} = useSelector(state => state.selectedVideoReducer)
    const {videos, loading : relatedVideosLoaing} = useSelector(state => state.relatedVideoReducer)
    // const {commentCount} = video.statistics

    return (
            <Row className="watchScreen">
                <Col lg="9" md="12" xs="12">
                    <div className="watchScreen__player">
                        <iframe 
                            src={`https://www.youtube.com/embed/${id}`} 
                            frameborder="0"
                            title={video?.snippet?.title}
                            allowFullScreen
                            width="100%"
                            height="100%"
                            >
                        </iframe>
                    </div>
                    {!loading? 
                        <VideoMetaData video = {video}/>
                        : <h6>Loading ...</h6>
                    }
                    
                    <Comments id = {id} totalComments={video?.statistics.commentCount}/>
                </Col>

                <Col lg="3" md="12" xs="12">
                    {!relatedVideosLoaing? 
                         videos?.filter(video=> video.snippet).map((video, i) => 
                            <VideoHorizontal video={video} key={video.videoId} />
                    ): (
                       <h3>Loading</h3>
                    )}
                </Col>
            </Row>
    )
}

export default WatchScreen
