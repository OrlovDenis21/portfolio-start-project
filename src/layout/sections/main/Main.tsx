import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Svetlana Dyablo</Name>
                    <MianTitle>A Web Developer.</MianTitle>
                </div>

                <Photo src={photo} alt=""/>

            </FlexWrapper>

        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  //background-color: #fff5e7;
  background-color: #252527;
`



const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const MianTitle = styled.h1`

`


const Name = styled.h2`

`