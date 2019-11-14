import React from 'react';
import {BrowserRouter, Route , Link,Switch} from 'react-router-dom';

function List(props){
    return (
        <BrowserRouter>
            <ul>
                <li><Link to={{pathname:`/repos/${props.data.name}`, data:`${props.data.createdAt}`}}>{props.data.name}</Link></li>
            </ul>
            <Switch>
                <Route path={`/repos/${props.data.name}`} component = {Child} />
            </Switch>
        </BrowserRouter>
    )
}

const Child = (props) => {
    return (<ul><li>{props.location.data}</li></ul>);
}
export default List;