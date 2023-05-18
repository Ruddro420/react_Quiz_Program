import axios from "axios";
import { useEffect, useState } from "react";
import SingleHome from "../SingleHome/SingleHome";
import './Home.css'
import { useNavigate } from "react-router-dom";
const Home = () => {
    const [topics, setTopics] = useState([]);

  /*   const [select, setSelect] = useState([]);
 */

  const naviagte = useNavigate();
   
    const seleectButtonHandler = (quizId)=>{
        naviagte(`quiz/${quizId}`)
    }

    useEffect(() => {
        async function getUser() {
            try {
                await axios.get('https://openapi.programming-hero.com/api/quiz')
                    .then(res => {
                        setTopics(res.data.data);
                    });
            } catch (error) {
                console.error(error);
            }
        }
        getUser();
    }, [])

    return (
        <>
            <div style={{textAlign:'center'}}>
                <h1>SELECT YOUR TOPIC</h1>
            </div><br/><br/>
            <div className="homeContainer">
                {
                    topics.map(topic => <SingleHome

                        key={topic.id}
                        topic={topic}
                        seleectButtonHandler={seleectButtonHandler}

                    ></SingleHome>)
                }
            </div>
        </>
    );
};

export default Home;