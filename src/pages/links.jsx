import { NavLink, Outlet } from 'react-router-dom'
import Home from './home'
const Main = () => {
    return (
        <>
            <div className="theproject">
                <div className="firstside">
                    <span>React router test</span>
                </div>

                <div className="secondside">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='about'>About</NavLink>
                </div>
            </div>
            <Outlet />

            
        </>
    )
}

export default Main