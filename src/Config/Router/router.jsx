import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Home,Login,Signup,Shop,Contact,eCommercePage,} from './../../Containers'
// import AdminLogin from '../../Containers/Admin Login/adminlog'


export default class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route  path="/contact" component={Contact} />
                    <Route  path="/singleproduct" component={eCommercePage} />
                    {/* <Route  path="/AdminLogin" component={AdminLogin} /> */}


                </div>
            </Router>
        )
    }
}