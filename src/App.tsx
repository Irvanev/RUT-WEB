import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {AdminPage} from './pages/admin/adminPage';
import {HomePage} from './pages/home/homePage';
import {ThemeProvider} from '@gravity-ui/uikit';
import {FormPage} from './pages/form/formPage';

const router = createBrowserRouter([
    {
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
            <RouterProvider router={router} />
        </ThemeProvider>
    );
};

export default App;
