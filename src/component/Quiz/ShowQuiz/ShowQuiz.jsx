import { useLoaderData } from "react-router-dom";

const ShowQuiz = () => {
    const albums = useLoaderData();
    console.log(albums.data.id);
    

    return (
        <div>
            Quiz Page
        </div>
    );
};

export default ShowQuiz;