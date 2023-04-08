import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: center;
    margin: 20% 0;
`;

export const Container = styled.div`
    width: 100%;
`;

export const ProfileImageContainer = styled.div`
    display: flex;
`;

export const ProfileImage = styled.div`
    background-image: linear-gradient(to bottom, #38b2ac, #38b2ac);
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    overflow: hidden;
`;

export const TextContainer = styled.div`
    flex: 1;
`;

export const Heading = styled.h3`
    font-size: 1.875rem;
    color: #1a202c;
`;

export const Paragraph = styled.p`
    font-size: 1.2rem;
    line-height: 2rem;
    color: #4a5568;
`;
