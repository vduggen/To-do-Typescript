import React, { ChangeEvent } from "react";
import { Container, GlobalStyle } from "./styles";

interface ITodo {
  id: number;
  date: string;
  text: string[];
}

interface IValues {
  name: string;
  value: string;
}

const App: React.FC = () => {
  const [Todos] = React.useState<ITodo[]>([]);
  const [id, setId] = React.useState(0);
  const [inputValues, setInputValues] = React.useState<IValues[]>([
    { name: "date", value: "" },
    { name: "task", value: "" },
  ]);

  const clearInputs = () => (inputValues[1].value = "");

  const addTodo = () => {
    setId(id + 1);
    let date = inputValues[0].value;
    let task = inputValues[1].value;

    let verifyExistDate = Todos.filter((todos) => todos.date === date);

    if (task.length === 0 || date.length === 0) {
      document.getElementById("ErrorMsg")!.innerHTML =
        "Todos os campos precisam estar preenchidos";

      setTimeout(() => {
        document.getElementById("ErrorMsg")!.innerHTML = "";
      }, 2500);
    } else if (verifyExistDate.length === 0) {
      Todos.push({ id, date, text: [task] });
      clearInputs();
    } else {
      verifyExistDate[0].text.push(task);
      clearInputs();
    }
  };

  const handleInput = (evt: ChangeEvent<HTMLInputElement>) => {
    let oldValues = [...inputValues];

    switch (evt.currentTarget.name) {
      case "date":
        oldValues[0].value = evt.currentTarget.value;
        break;

      case "task":
        oldValues[1].value = evt.currentTarget.value;
        break;
    }

    setInputValues(oldValues);
  };

  return (
    <Container>
      <GlobalStyle />

      <h1>
        Task list made with <span>Typescript</span>
      </h1>

      <span id="ErrorMsg"></span>

      <div id="container-addTask">
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Digite o nome da tarefa"
          onChange={(evt) => handleInput(evt)}
          value={inputValues[1].value}
        />

        <input
          type="date"
          name="date"
          id="date"
          placeholder="Coloque o dia para realizar a tarefa"
          onChange={(evt) => handleInput(evt)}
          value={inputValues[0].value}
        />

        <button onClick={() => addTodo()}>Cadastrar</button>
      </div>

      {Todos.map((todo) => (
        <ol key={todo.id}>
          <h1>{todo.date}</h1>
          {todo.text.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ol>
      ))}
    </Container>
  );
};

export default App;
