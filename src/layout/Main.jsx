
import { Outlet } from 'react-router-dom';
import Nav from '../Share/Nav';
import Fooer from '../Share/Footer';
const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Fooer></Fooer>
        </div>
    );
};

export default Main;