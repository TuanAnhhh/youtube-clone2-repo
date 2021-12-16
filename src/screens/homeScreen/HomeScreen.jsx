import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoriesBar from '../../components/categoriesBar/CategoriesBar'
import Video from '../../components/video/Video'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videosAction'
import InfiniteScroll  from 'react-infinite-scroll-component'
import './_homeScreen.scss'
import SkeletonVideo from '../../components/skeletons/SkeletonVideo'
function HomeScreen() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])

    const {videos, activeCategory, loading} = useSelector(state => state.homeVideosReducer)
    console.log(videos)
    // const fetchData = () => {
    //     if (activeCategory === 'All') {
    //         dispatch(getPopularVideos())
    //     }
    //     else {
    //        dispatch(getVideosByCategory(activeCategory))
    //     }
        
    // }
    return (
        <Container fluid className="content">

                <CategoriesBar/>

                {/* <InfiniteScroll
                    dataLength={videos.length}
                    next ={fetchData}
                    hasMore={true}
                    loader={
                        <div className="spinner-border text-danger d-block mx-auto"></div>
                    }
                    className="row"
                > */}
                
                    {/* { !loading ? videos.map((video) => (
                        <Col lg="3" md="4" sm="6" >
                            <Video video={video} key={video.id} />
                        </Col>
                    )):
                        [...Array(20)].map(()=> (
                            <Col lg="3" md="4" sm="6" >
                                <SkeletonVideo/>
                            </Col>
                        ))
                    } */}
                <Row>
                    { !loading ? videos.map((video) => (
                        <Col lg="3" md="4" sm="6" >
                            <Video video={video} key={video.id} />
                        </Col>
                    )):
                        [...Array(20)].map(()=> (
                            <Col lg="3" md="4" sm="6" >
                                <SkeletonVideo/>
                            </Col>
                        ))
                    }
                </Row>
                {/* </InfiniteScroll>  */}
        </Container>
    )
}

export default HomeScreen
