import { NavLink, useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { toast } from "react-hot-toast";

const ShowQuiz = () => {
     
    // Load Data
    const quizLoadData = useLoaderData();
    const quizs = quizLoadData.data.questions;

     // Click Button Check
     const [click, setClick] = useState(false);
     const [correct,setCorrect] = useState(false);
     const [getAnswer,setGetAnswer] = useState([]);

       /* console.log(quiz); */
       const ansHandler = (option,getId,setDisabledData) => {
        
        setDisabledData(true);
        setClick(option);

        const findId = quizs.find(findQuiz => findQuiz.id === getId)
        console.log(findId.correctAnswer);

        if(findId.correctAnswer === option){
            setCorrect(true)
            setGetAnswer(findId.correctAnswer)
            toast.success('Ans Is Write!')
        }
        else{
            setCorrect(false)
            setGetAnswer(findId.correctAnswer)
            toast.error("Answer Is Wrong")
        }

        // get quiz final answer


    }





    return (
        <>
      
            <div style={{ textAlign: 'center', fontSize: '50px', marginTop: '50px', marginBottom: '50px' }}>
                <NavLink to='/'>Quiz List</NavLink>
            </div>
            
            <div>
                {
                    quizs.map(quiz => <SingleQuiz

                        key={quiz.id}
                        quiz={quiz}
                        ansHandler={ansHandler}
                        click={click}
                        correct={correct}
                        getAnswer={getAnswer}

                    ></SingleQuiz>)
                }
            </div>
        </>
    );
};

export default ShowQuiz;