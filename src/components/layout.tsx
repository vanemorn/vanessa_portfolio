import { Outlet } from 'react-router-dom';
import Header from './header2';

const Layout = () => {
    return (
        <>
            <Header />
            <main className="App">
                <Outlet />
            </main>
        </>
    )
}

export default Layout