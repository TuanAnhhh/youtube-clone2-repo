import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { authReducer } from './reducers/authReducer'
import { homeVideosReducer } from './reducers/videosReducer'
import { selectedVideoReducer } from './reducers/videosReducer'
import { relatedVideoReducer } from './reducers/videosReducer'
import { searchedVideosReducer } from './reducers/videosReducer'
import { subscriptionsChannelReducer } from './reducers/videosReducer'
import { channelVideosReducer } from './reducers/videosReducer'
import { channelDetailsReducer } from './reducers/channelReducer'
import { commentsReducer } from './reducers/commentsReducer'

const rootReducer = combineReducers({
    authReducer,
    homeVideosReducer,
    selectedVideoReducer,
    channelDetailsReducer,
    commentsReducer,
    relatedVideoReducer,
    searchedVideosReducer,
    subscriptionsChannelReducer,
    channelVideosReducer,
})

const store = createStore(
    rootReducer,
    {}, 
    composeWithDevTools(applyMiddleware(thunk)))

export default store;
