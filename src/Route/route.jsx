import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home/Home";
import ShowQuiz from "../component/Quiz/ShowQuiz/ShowQuiz";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
        path: "quiz/:quizId",
        loader: async ({ params }) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
        },
        element: <ShowQuiz></ShowQuiz>
      },
  ]);