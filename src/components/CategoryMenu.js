import React from "react";
import { useGetPostsByCategoryQuery } from "../features/api/apiSlice";
import { SCategoryThumb, SCategoryThumbImage, SCategoryThumbBody, SCategoryText } from "./styles/Category.styled";
import { Link, useParams } from "react-router-dom";
import { STitle } from "./styles/Title.styled";


const CategoryMenu = ({target, number}) => {


    const {
        data: posts,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPostsByCategoryQuery(target)

    //console.log(posts)
    //console.log(target)

    let Articles = <p>Nista</p>;
    if (isLoading) {
        Articles = <p>Loading...</p>
    } else if (isSuccess){
        Articles = posts.slice(0, number).map((e, i) => (
            <Link to={`/page/${e.id}`} key= {i}>
                <SCategoryThumb>
                    <SCategoryThumbImage src={`./images/articles/${e.id}.jpg`} alt={e.title} />
                    <SCategoryThumbBody>
                        <STitle>
                            {e.title}
                        </STitle>
                        <SCategoryText>
                            {`${e.text.substring(0, 450)}...`}
                        </SCategoryText>
                    </SCategoryThumbBody>
                </SCategoryThumb>
            </Link>)
        )
    } else if (isError) {
        Articles = <p>{error}</p>
    }

    return (
        <>
            {Articles}   
        </>       
    )
}

export default CategoryMenu;