import styled from "styled-components";

export const Container = styled.div`
  background-color: #3d3f43;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    max-width: 100%;
    display: block;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  .delete {
    border: 2px solid #756df4;
    border-radius: 5px;
    padding: 5px 20px;
    color: #756df4;
    margin: 10px 0px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s;
  }

  .delete:hover {
    background-color: #756df4;
    color: #fff;
  }
`;
