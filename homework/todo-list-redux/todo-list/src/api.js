const URL = "http://localhost:3000/todos";

export const getData = () => {
  return fetch(URL).then((res) => res.json());
};

export const postData = (newTodo) => {
  return fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTodo)
  }).then((res) => res.json());
};

export const toggleCompleted = (id, todo) => {
    return fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    }).then((res) => res.json());
}

export const deleteData = (id) => {
  return fetch(`${URL}/${id}`, {
    method: "DELETE"
  }).then((res) => res.json());
};
