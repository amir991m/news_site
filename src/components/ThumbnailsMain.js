import React, {useState} from "react";
import { Link } from "react-router-dom";
import { SOuterContainer, SInnerContainer, SThumbRowScroll, SScrollButton, SThumbBoxMain, SThumbTitle, SThumbImageMain, SThumbRowWrapper, SThumbTextMain } from "./styles/ThumnailsMain.styled";
import IconSwitch from "./IconSwitch";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useGetPostsQuery } from "../features/api/apiSlice";
import { STitleS } from "./styles/Title.styled";
import { CategoryIcon } from "./styles/Icons.styled";

    

const ThumbnailsMain = () => {
    const [position, setPosition] = useState(0);
    
    const scrollRight = () => position>-85?setPosition(position - 5):null;
    const scrollLeft = () => position<0?setPosition(position + 5):null;
    //console.log(position);

    const {
        data: posts,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPostsQuery()

    let ThumbnailMain;
    if (isLoading) {
        ThumbnailMain = <p>Loading...</p>
    } else if (isSuccess){
        ThumbnailMain = posts.slice(0, 20).map((e, i) => (
            <Link to={`/page/${e.id}`} key= {i}>
                <SThumbBoxMain>
                    <CategoryIcon><IconSwitch target={e.category}/></CategoryIcon>
                    <SThumbImageMain src={`./images/articles/${e.id}.jpg`} alt={e.title} />
                    <SThumbTextMain>
                        <STitleS>{e.title}</STitleS>
                    </SThumbTextMain>
                </SThumbBoxMain>
            </Link>
            )
        )
    } else if (isError) {
        ThumbnailMain = <p>{error}</p>
    }

    return (
        <>
            <SOuterContainer>
                <SScrollButton onClick={scrollLeft}><FaArrowAltCircleLeft /></SScrollButton>
                <SInnerContainer>   
                    <SThumbRowScroll position={`${position}%`}>
                        <SThumbRowWrapper>
                            {ThumbnailMain}
                        </SThumbRowWrapper>
                    </SThumbRowScroll>
                </SInnerContainer>
                <SScrollButton onClick={scrollRight}><FaArrowAltCircleRight/></SScrollButton>
            </SOuterContainer>            
        </>
    )
}

export default ThumbnailsMain;