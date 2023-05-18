/* eslint-disable react/prop-types */
import { CardContent, Container, Grid, Typography } from "@mui/material";
import './SingleQuiz.css';
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const SingleQuiz = ({ quiz, ansHandler, click, correct, getAnswer }) => {
    const [disabledData, setDisabledData] = useState(false);
    const { id, question, options } = quiz;
    let numberShow = 1;

    console.log(click);

    // For Click Button Style 
    const getButtonStyle = (option) => {
        return {
            background: getAnswer === option ? 'green' : '',
            color: getAnswer === option ? 'white' : '',
            border: click === option ? '4px solid #F40458' : ''
        };
    };


    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <CardContent>
                            <div className="card-container">
                                <Typography sx={{ fontSize: 30 }} color="text.primary" gutterBottom>
                                    {question}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {

                                        options.map(option =>

                                            <button
                                                style={getButtonStyle(option, correct)}
                                                disabled={disabledData}
                                                key={option}
                                                onClick={() => ansHandler(option, id, setDisabledData)}
                                                className={disabledData === click ? 'disabledStyle' : 'quizStyle'}
                                            >
                                                {numberShow++}. {option}
                                            </button>)

                                    }
                                    <Toaster
                                        position="top-right"
                                        reverseOrder={false}
                                    />
                                </Typography>
                            </div>
                        </CardContent>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default SingleQuiz;