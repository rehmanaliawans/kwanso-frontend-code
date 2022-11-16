import styled from "styled-components";

export const Card = styled.div`
  width: 20rem;
  height: 100px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 10px;
  margin: 0.5rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Container = styled.div`
  width: 100%;
  color: #000;
`;
export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TaskName = styled.h3`
  text-align: center;
  color: #2065d1;
`;
export const CreateButton = styled.button`
  background-color: #2065d1;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  width: 7rem;
  margin: 10px;
`;
export const TextField = styled.input`
  width: 30rem;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
export const Label = styled.label`
  text-align: left;
  font-weight: bold;
`;
export const CreateDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
export const CardDiv = styled.div`
  height: 80vh;
  width: 30rem;
  overflow-y: auto;
`;
export const ButtonDiv = styled.div`
  display: flex;
`;
export const DeleteDiv = styled.div`
  display: flex;
  align-items: center;
`;
