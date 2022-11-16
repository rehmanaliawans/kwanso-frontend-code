import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import {
  ButtonDiv,
  Card,
  CardDiv,
  Container,
  CreateButton,
  MainDiv,
  TaskName,
} from "../styledComponents";

const data = [
  {
    name: "Task name",
  },
  {
    name: "Task name1",
  },
  {
    name: "Task name2",
  },
  {
    name: "Task name3",
  },
  {
    name: "Task name4",
  },
];
const ListTask = () => {
  const navigate = useNavigate();
  const { task } = useGlobalContext();
  console.log("tassk", task);
  return (
    <Container>
      <MainDiv>
        <ButtonDiv>
          <CreateButton onClick={() => navigate("/create-task")}>
            Create Task
          </CreateButton>
          <CreateButton onClick={() => navigate("/bulk-delete")}>
            Bulk Delete
          </CreateButton>
        </ButtonDiv>
        <CardDiv>
          {task.length > 0 &&
            task.map((data, index) => {
              return (
                <Card key={index}>
                  <TaskName>{data.name}</TaskName>
                </Card>
              );
            })}
        </CardDiv>
      </MainDiv>
    </Container>
  );
};

export default ListTask;
