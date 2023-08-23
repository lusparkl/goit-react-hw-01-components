import { styled } from "styled-components";


export const FriendCard = styled.li`
    display: flex;
    width: 400px;
    height: 50px;
    border: 2px solid gray;
    border-radius: 5px;
    

    svg{
        color: ${props => props.$isOnline === true ? "green" : "black"};
        margin-top: auto;
        
    }
`;

export const Image = styled.img`
    height: 100%;
    margin-right: 20px;
`;

export const Name = styled.p`
    margin-bottom: auto;
    margin-top: 5px;
    font-size: 16px;
    font-weight: 700;
`



