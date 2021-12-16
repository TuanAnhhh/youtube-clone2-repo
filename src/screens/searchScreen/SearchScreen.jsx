import React, {useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import { getVideosBySearchKeyWord } from '../../redux/actions/videosAction'
import './_searchScreen.scss'
function SearchScreen() {
    const {keyword} = useParams()
    const dispatch = useDispatch()
    const {videos, loading } = useSelector(state => state.searchedVideosReducer)
    console.log(videos);

    useEffect(() => {
        dispatch(getVideosBySearchKeyWord(keyword))
    }, [dispatch, keyword])
    return (
        <Container>
            <Row>

                {!loading? (
                    videos?.map((video, i) => (
                        <Col lg="12">
                            <VideoHorizontal video= {video} key={video.id.videoId} searchScreen/>
                        </Col>
                    ))
                ): (
                    <h3>Loading... </h3>
                )}
                
            </Row>
        </Container>
    )
}

export default SearchScreen
