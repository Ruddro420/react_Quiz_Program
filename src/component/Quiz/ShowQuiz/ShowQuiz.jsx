import { NavLink, useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const ShowQuiz = () => {

    // Load Data
    const quizLoadData = useLoaderData();
    const quizs = quizLoadData.data.questions;

    // Click Button Check
    const [click, setClick] = useState(false);
    const [number, setNumber] = useState([]);
    const [getAnswer, setGetAnswer] = useState([]);
    const [resultSum, setResultSum] = useState([]);

    useEffect(()=>{
        const total = number.reduce((prev, current) => {
            return prev + current;
       }, 0)
        setResultSum(total);
    },[number])

    const ansHandler = (option, getId, setDisabledData) => {

        setDisabledData(true);
        setClick(option);

        const findId = quizs.find(findQuiz => findQuiz.id === getId)


        if (findId.correctAnswer === option) {
            setGetAnswer(findId.correctAnswer)
            // Get Number
            const result = [...number, 5]
            setNumber(result)
            toast.success('Ans Is Write!')
                // Sum Of The Result
        }
        else {

            setGetAnswer(findId.correctAnswer)
            const result = [...number, 0]
            setNumber(result)
            toast.error("Answer Is Wrong")
        }

    }

    return (
        <>

            <div style={{ textAlign: 'center', fontSize: '50px', marginTop: '10px', marginBottom: '10px' ,position:'sticky',top:'0px',background:'rgb(246, 246, 246)'}}>
                <NavLink to='/'>Quiz List</NavLink> || 
                Score : {resultSum}
            </div>
           
            <div>
                {
                    quizs.map(quiz => <SingleQuiz

                        key={quiz.id}
                        quiz={quiz}
                        ansHandler={ansHandler}
                        click={click}
                        getAnswer={getAnswer}

                    ></SingleQuiz>)
                }
            </div>
        </>
    );
};

export default ShowQuiz;