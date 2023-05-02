import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./Login";
import SignUp from "./SignUp";
import ReviewsPage from "./ReviewsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,

    },
  },
});

const App = () => {

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className="title">
          <h1>Koo K🐔o Drew!</h1>
        </div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/reviews/:id"
            element={
              <>
                <ReviewsPage />
              </>
            }
          />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
