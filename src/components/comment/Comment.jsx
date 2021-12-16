import React from 'react'
import './_comment.scss'
import ShowMoreText from 'react-show-more-text'
import moment from 'moment'

function Comment({comment, i}) {
    const {textDisplay,authorProfileImageUrl,authorChannelUrl,authorDisplayName,publishedAt} = comment
    return (
        <div className="comment">
            <img src={authorProfileImageUrl} alt="" className="comment__channel"/>
            <div className="channel1">
                <div className="name">
                    {authorDisplayName}. <span> {moment(publishedAt).fromNow()}</span>
                </div>
                <span className="commentText">
                <ShowMoreText
                    lines={1}
                    more="Show more"
                    less="Show less"
                    expanded={false}
                    anchorClass='showMoreText'
                >
                {textDisplay}
                </ShowMoreText>

                </span>
            </div>
         </div>
    )
}

export default Comment
