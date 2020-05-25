import * as React from 'react';
import { Redirect } from 'react-router-dom';
export interface MyRedirectProps {
    
}
 
const MyRedirect: React.SFC<MyRedirectProps> = () => {
    if(true){
        return <Redirect from='/' to="/login"/>
    }
    else{
        return <Redirect from='/' to="/home"/>
    }
}
 
export default MyRedirect;