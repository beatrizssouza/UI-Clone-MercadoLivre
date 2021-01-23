import styled from 'styled-components';
import { BsFillLightningFill } from "react-icons/bs";

export const Container = styled.div`
    display:inline;
    border-top: 1px solid var(--color-border);
    padding: 32px;
    
    > span {
        font-size: 24px;
        margin-bottom: 32px;
        color: var(--color-gray);
    }
`;

export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    height: 280px;
    width: 100%;
    background-color: var(--color-white);
    border: 1px solid var(--color-border);
    color: #fff;
    border-radius:5px;
    font-size: 4em;
    margin:5px;
   
`;

export const PriceCard = styled.div`
    margin:15px;
    display: flex;
    flex-direction:column;
    
    cursor:pointer;
     > div {
        display: flex;
        flex-direction:column;
        color: var(--color-black);
        > img {
            width: 100px;
            height: 100px;
            align-items: center;
            margin:10px;
        }
    }
`;

export const PriceRow = styled.div`
    margin-top: 15px;
    display:flex;
    align-items: flex-start;
    font-size: 25px;
    font-weight: 300;
    border-top: 1px solid var(--color-border);
    .fraction {
        margin-left: 8.8px;
    }
    .cents {
        font-size:14px;
        padding-top:3px;
        margin-left: 1px;
    }
`;

export const InstallmentsInfo = styled.div`
    margin-top:8px; 
    font-size:12px;
    color: var(--color-green);
`;

export const MethodCard = styled.div`
    margin-top:2px;
    display:flex;
    > div {
        margin-top: 5px;
        display: flex;
        
        .title {
            color: var(--color-green);
            font-size: 12px;
        }
        .details {
            margin-top: 1px;
            color: var(--color-gray);
            font-size: 12px;
        }
        .title1 {
            color: var(--color-green);
            font-size: 10px;
            font-weight: 900;
        }
    }
`;

export const CheckIcon = styled(BsFillLightningFill)`
    width: 20px;
    height: 20px;
    color: var(--color-green);
`;
