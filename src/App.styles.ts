import styled from "styled-components";

export const Container = styled.div`
  * {
    box-sizing: border-box;
  }

  background-color: #27282f;
  color: #fff;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 30px 0;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 30px;
`;

export const ScreenWarning = styled.div`
  text-align: center;

  .emoji {
    font-size: 50px;
    margin-bottom: 20px;
  }
`;

export const PhotoList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 20px;
  }
`;

export const UploadForm = styled.form`
  background-color: #3d3f43;
  padding: 15px;
  border-radius: 10px;
  margin: 0 20px 30px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  .file-group {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;

    .filename {
      font-size: 15px;
      color: #756df4;
      flex: 1;
    }

    .inputfile {
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      z-index: -1;
    }

    label {
      font-size: 15px;
      color: #756df4;
      border: 2px solid #756df4;
      padding: 8px 16px;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s;
    }
  }

  input[type="submit"] {
    background-color: #756df4;
    border: 0;
    color: #fff;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
  input[type="file"] {
    //background-color: #756df4;

    border: 2px solid #756df4;
    color: #756df4;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 5px;

    &:hover {
      opacity: 0.9;
    }
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 15px 20px;

    .submit-group {
      width: 100%;
    }

    input[type="submit"] {
      width: 100%;
      margin-top: 10px;
    }
    input[type="file"] {
      flex: 1;
    }
  }
`;
