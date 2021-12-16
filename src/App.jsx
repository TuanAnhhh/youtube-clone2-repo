import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import './_app.scss'
import {useState} from 'react'
import LoginScreen from "./screens/loginScreen/LoginScreen";
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {useEffect} from 'react'
import WatchScreen from "./screens/watchScreen/WatchScreen";
import SearchScreen from "./screens/searchScreen/SearchScreen";
import SubscriptionsScreen from "./screens/subscriptionsScreen/SubscriptionsScreen";
import ChannelScreen from "./screens/channelScreen/ChannelScreen";
const Layout = ({children}) => {
    const [toggleSidebar, setToggleSidebar] = useState(false)
    const handleToggleSidebar  = () => setToggleSidebar(value => !value)
    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className="app_container">
                <Sidebar toggleSidebar={toggleSidebar}/>
                <Container fluid className="app__main">
                    {children}
                </Container>
            </div>
    
        </>
    )
}
function App() {

    const {accessToken, loading} = useSelector(state => state.authReducer) 
    const history = useHistory()
    useEffect(() => {
        if(!loading && !accessToken){
            history.push('/auth')
        }

        
    }, [accessToken, loading])
  return (
    <>
            <Switch>
            <Route path="/" exact>
                <Layout>
                    <HomeScreen/>
                </Layout>
            </Route>
            <Route path="/auth">
                <LoginScreen/>
            </Route>
            <Route path="/search:keyword">
                <Layout>
                    <SearchScreen/>
                </Layout>
            </Route>
            <Route path="/watch/:id">
                <Layout>
                    <WatchScreen/>
                </Layout>
            </Route>
            <Route path="/feed/subscriptions">
                <Layout>
                    <SubscriptionsScreen/>
                </Layout>
            </Route>
            <Route path="/channel/:channelId">
                <Layout>
                    <ChannelScreen/>
                </Layout>
            </Route>
            <Route>
                <Redirect to="/"/>
            </Route>
            </Switch>
    </>
  );
}

export default App;
