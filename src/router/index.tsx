import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import AdminLayout from "@/layouts/AdminLayout";

// lazy import components
const PostList = lazy(() => import("@/posts/list"));
const CreatePost = lazy(() => import("@/posts/create"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PostList />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/create",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <CreatePost />
      </Suspense>
    ),
  },
]);

export default router;
