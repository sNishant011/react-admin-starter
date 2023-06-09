import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import AdminLayout from "@/layouts/AdminLayout";
import ProtectedRoute from "@/layouts/ProtectedRoute";

// lazy import components
const PostList = lazy(() => import("@/pages/posts/list"));
const CreatePost = lazy(() => import("@/pages/posts/create"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <h1>Dashboard</h1>,
          },
          {
            path: "posts",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <PostList />
              </Suspense>
            ),
          },
          {
            path: "posts/create",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <CreatePost />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
