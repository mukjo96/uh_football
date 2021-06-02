import React from "react";
import NewsPage from "@features/news/page/newsPage";
import styled from "styled-components";

const Index = () => {
    return (
        <Page>
            <NewsPage />
        </Page>
    );
};

export default Index;

const Page = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    @media screen and (min-width: 1280px) {
        width: 1280px;
    }
`;