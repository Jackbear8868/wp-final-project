import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Common/NavBar.tsx";
import NotFound from "./components/Common/NotFound.tsx";
import HomePage from "./containers/HomePage.tsx";
import Header from "./components/Common/Header.tsx";
import Footer from "./components/Common/Footer.tsx";
import ArticlePage from "./containers/Article/ArticlePage.tsx";
import OverviewPage from "./containers/Article/OverviewPage.tsx";

const LoginPage = lazy(() => import("./containers/User/LoginPage.tsx"));
const ArticleMainPage = lazy(
  () => import("./containers/Article/ArticleMainPage.tsx"),
);
const ForumMainPage = lazy(
  () => import("./containers/Forum/ForumMainPage.tsx"),
);
const IntroductionPage = lazy(
  () => import("./containers/IntroductionPage.tsx"),
);

function App() {
  return (
    <>
      <div className="border-x-green-600">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/login"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LoginPage />
              </Suspense>
            }
          />

          <Route
            path="/article"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ArticleMainPage />
              </Suspense>
            }
          />

          <Route
            path="/article/draft"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ArticlePage />
              </Suspense>
            }
          />

          <Route
            path="/article/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <OverviewPage />
              </Suspense>
            }
          />

          <Route
            path="/article/:id/edit"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ArticlePage />
              </Suspense>
            }
          />

          <Route
            path="/forum"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ForumMainPage />
              </Suspense>
            }
          />
          <Route
            path="/introduction"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <IntroductionPage />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
