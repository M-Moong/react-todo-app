import React from "react";

function List({ todoData, setTodoData }) {
  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    console.log("newTodoData", newTodoData);
    setTodoData(newTodoData);
  };

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });

    // completed를 참 거짓을 변경한 데이터를 state에 다시 넣어준다.
    setTodoData(newTodoData);
  };

  return (
    <div>
      {todoData.map((data) => (
        <div key={data.id}>
          <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
            <div className="items-center">
              <input
                id={data.id}
                type="checkbox"
                defaultChecked={false}
                onChange={() => handleCompleteChange(data.id)}
              />{" "}
              <label
                htmlFor={data.id}
                className={data.completed ? "line-through" : ""}>
                {data.title}
              </label>
            </div>
            <div className="items-center">
              <button
                className="float-right px-4 py-2"
                onClick={() => handleClick(data.id)}>
                X
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
