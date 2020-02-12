import { useParams, Route } from 'react-router-dom';

function EditUser(){
    const match = useRouteMatch('/user/:id');
    return match ? <p>User: { match.params.id } </p> : <p>User</p>
}