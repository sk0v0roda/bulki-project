import {ADMIN_ROUTE, ITEM_PAGE_ROUTE, LOGIN_ROUTE, MAIN_PAGE_ROUTE} from "./utils/consts";
import MainPage from "./pages/MainPage";
import Admin from "./pages/Admin";
import ItemPage from "./pages/ItemPage";
import Auth from "./pages/Auth";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: MAIN_PAGE_ROUTE,
        Component: MainPage
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: ITEM_PAGE_ROUTE + '/:id',
        Component: ItemPage
    }
]