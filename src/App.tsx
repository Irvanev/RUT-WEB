import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {AdminPage} from './pages/admin/adminPage';
import {HomePage} from './pages/home/homePage';
import {Spin, ThemeProvider} from '@gravity-ui/uikit';
import {FormPage} from './pages/form/formPage';
import ErrorPage from './pages/error/ErrorPage';
import LoginPage from './pages/auth/Login';
import {AuthProvider} from './context/AuthContext';
import PrivateRoute from './components/private-routes/PrivateRoute';

const router = createBrowserRouter([
    {
        errorElement: <ErrorPage />,
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/admin',
        element: <PrivateRoute element={AdminPage} />,
    },
    {
        path: '/add',
        element: <FormPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
]);

const App = () => {
    return (
        <AuthProvider>
            <ThemeProvider theme="light">
                <RouterProvider router={router} fallbackElement={<Spin />} />
            </ThemeProvider>
        </AuthProvider>
    );
};

export default App;
