import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import {
  Container,
  CreateButton,
  CreateDiv,
  Label,
  MainDiv,
  TaskName,
  TextField,
} from "../styledComponents";

const CreateTask = () => {
  const navigate = useNavigate();
  const { task, setTask } = useGlobalContext();
  const [name, setName] = useState("");

  const handleCreateTask = () => {
    if (name !== "") {
      setTask([
        ...task,
        {
          name: name,
        },
      ]);
      navigate("/list-tasks");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <Container>
      <MainDiv>
        <CreateDiv>
          <Label>Task name</Label>
          <TextField onChange={(e) => handleChange(e)} />
          <CreateButton onClick={() => handleCreateTask()}>
            Create Task
          </CreateButton>
        </CreateDiv>
      </MainDiv>
    </Container>
  );
};

export default CreateTask;
