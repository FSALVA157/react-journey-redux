import { Navigate, createBrowserRouter } from "react-router-dom";
import { LayoutAuth, LoginPage, RegisterPage } from "../auth";

import { JournalPage, LayoutJournal } from "../journal";
import { ErrorPage } from "../ui/pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "auth",
        element: <LayoutAuth />,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <LoginPage />,
                    },
                    {
                        path: "register",
                        element: <RegisterPage />,
                    }

                ]
            }
        ],
    },
    {
        path: "journal",
        element: <LayoutJournal />,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <JournalPage />
                          }
                ]
            }
        ],
    },
    {
        path: "/*",
        element: <Navigate to='journal' />,
    }
]);