import {RouterProvider, createBrowserRouter} from 'react-router-dom';
// import {AuthProvider} from './context/AuthContext';
import {AdminPage} from './pages/admin/adminPage';
import {HomePage} from './pages/home/homePage';
import {Spin, ThemeProvider} from '@gravity-ui/uikit';
import {FormPage} from './pages/form/formPage';
import ErrorPage from './pages/error/ErrorPage';

const router = createBrowserRouter([
    {
        errorElement: <ErrorPage />,
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/admin',
        element: <AdminPage />,
    },
    {
        path: '/add',
        element: <FormPage />,
    },
]);

const App = () => {
    return (
        <ThemeProvider theme="light">
            {/* <AuthProvider> */}
            <RouterProvider router={router} fallbackElement={<Spin />} />
            {/* </AuthProvider> */}
        </ThemeProvider>
    );
};

export default App;
