import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
function SkeletonVideo() {
    return (
        <div style={{width:'100%', margin: '1rem 0'}}>
            <SkeletonTheme color="#343a40" highlightColor="#3c4147">
                <Skeleton height={200} />
                <div style={{margin:'1rem 0'}}>
                    <Skeleton circle width={40} height={40} style={{marginRight:'1rem'}} />
                    <Skeleton  width="75%" height={40} />
                </div>
            </SkeletonTheme>
        </div>
    )
}

export default SkeletonVideo
