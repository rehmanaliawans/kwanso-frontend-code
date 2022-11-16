import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import {
  ButtonDiv,
  Card,
  CardDiv,
  Container,
  CreateButton,
  DeleteDiv,
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
const BulkDeleteTask = () => {
  const [indexDelete, setIndexDelete] = useState<number[]>([]);
  const navigate = useNavigate();
  const { task, setTask } = useGlobalContext();

  const handleClick = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (indexDelete.includes(index) && e.target.checked == false) {
      const array = indexDelete.filter((value) => {
        return value !== index;
      });
      setIndexDelete(array);
    } else {
      setIndexDelete([...indexDelete, index]);
    }
  };

  const handleDelete = () => {
    const array = task.filter((value, index) => {
      if (!indexDelete.includes(index)) {
        return task;
      }
    });
    setTask(array);
    setIndexDelete([]);
    const data = document.querySelectorAll("input[type=checkbox]");

    data.forEach((value: any) => {
      value.checked = false;
    });
  };
  return (
    <Container>
      <MainDiv>
        <ButtonDiv>
          <CreateButton onClick={() => navigate("/create-task")}>
            Create Task
          </CreateButton>
          <CreateButton onClick={() => handleDelete()}>Delete</CreateButton>
        </ButtonDiv>
        <CardDiv>
          {task.length > 0 &&
            task.map((data, index) => {
              return (
                <DeleteDiv key={index}>
                  <input
                    type="checkbox"
                    name={data.name}
                    onChange={(e) => handleClick(e, index)}
                  />
                  <Card>
                    <TaskName>{data.name}</TaskName>
                  </Card>
                </DeleteDiv>
              );
            })}
        </CardDiv>
      </MainDiv>
    </Container>
  );
};

export default BulkDeleteTask;
