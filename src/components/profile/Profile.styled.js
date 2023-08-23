import { styled } from "styled-components";

export const UserCard = styled.div`
    padding: 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border: 2px solid grey;
    border-radius: 4px;
    width: 400px;
    align-items: center;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StatisticList = styled.ul`
    display: flex;
    gap: 1px;
`

export const StatisticItem = styled.li`
    padding: 20px;
    background-color: aliceblue;
    border: 2px solid grey;
`