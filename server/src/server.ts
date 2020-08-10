import express from "express";

const app = express();

app.use(express.json());

app.get("/users", (request, response) => {
  const users = [
    { name: "Diego", age: 25 },
    { name: "Marcus", age: 20 },
  ];

  return response.json(users);
});

app.listen(3333);
