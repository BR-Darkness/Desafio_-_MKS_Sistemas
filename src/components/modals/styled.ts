import styled from "styled-components";

export const WarningModal = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1118;
    z-index: 100;

    height: 100%;
    width: 100%;
`;

export const Modal = styled.div`
    background-color: white;
    overflow-y: auto;
    min-height: 280px;
    max-height: 90%;
    min-width: 260px;
    max-width: 680px;

    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.13);
    background-color: var(--bg-color-01);
    border: 2px dashed var(--blue-color-01);
    border-radius: 8px;
    padding: 2em;
    margin: 2em;

    display: flex;
    flex-direction: column;
    gap: 1em;

    p
    {
        text-align: justify;
        line-height: 1.75;
    }

    div
    {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    button
    {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        border-radius: 48px;
        border: 2px solid var(--blue-color-01);
        background-color: var(--blue-color-02);

        font-weight: 700;
        color: white;

        height: 48px;
        width: 48px;
    }

    button:hover
    {
        background-color: var(--blue-color-01);
    }

    @media screen and (max-width: 800px)
    {
        h1      { font-size: 24px; }
        p    { font-size: 14px; }
    }
`;