import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, getCommentsOfVideoById } from '../../redux/actions/commentsAction'
import Comment from '../comment/Comment'
import './_comments.scss'
function Comments({id, totalComments}) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCommentsOfVideoById(id))
    }, [dispatch,id])
    const {comments, loading} = useSelector(state => state.commentsReducer)
    const [commentInserted, setCommentInserted] = useState('')
    const _comments = comments?.map(comment => comment.snippet.topLevelComment.snippet)
    console.log(comments);

    const handleAddComment = (e) => {
        console.log(commentInserted);

        e.preventDefault()
        if(commentInserted.length === 0) return 

        dispatch(addComment(id,commentInserted ))

        setCommentInserted('')
    }
    const handleCancelInsertComment = () => {
        console.log("cancel");
        setCommentInserted('')
    }
    return (
        <div className="comments">
            <p>{totalComments} Comments</p>
            <div className="comments-form d-flex w-100 my-2">
                <img src="https://images.unsplash.com/photo-1628336928799-499fcfeed7fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" className="comments-form__channel"  />
                <form action="" onSubmit={handleAddComment}>
                    <input 
                        type="text" placeholder="Add a public comment..." 
                        onChange={e => setCommentInserted( e.target.value)}
                        value={commentInserted}
                        />
                    <div className="action">
                        <span
                            className="action__btn action__btn--cancel"
                            onClick={handleCancelInsertComment}
                            >
                                Cancel</span>
                        <button type="submit"
                            className="action__btn action__btn--comment" 
                            
                            >

                            Comment</button>
                    </div>
                </form>

            </div>
            <div className="list">
                {!loading? _comments.map((comment, i) =>
                     <Comment comment={comment} key={i}/>
                ): (
                    <h3>Loading</h3>
                )}
            </div>
        </div>
    )
}

export default Comments
