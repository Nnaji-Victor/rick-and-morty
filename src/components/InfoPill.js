import React from 'react'
import styled from 'styled-components'

const InfoPill = ({loading, text, value}) => {
    return (
        <StyledInfoPill>
            <span className="text">{text}</span>
            <span className="value">{loading ? "loading" : value}</span>
        </StyledInfoPill>
    )
}

const StyledInfoPill = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    .text{
        font-size: 1.4rem;
        opacity: 0.7;
    }
    .value{
        font-size: 2rem;
        font-weight: 600;
        display: inline-block;
        margin-top: 1rem;
    }
`;

export default InfoPill
