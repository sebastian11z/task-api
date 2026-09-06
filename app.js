const express = require('express');
const app = express();
const port = 3000;

const list = [
    {id: 1, title: "Task 1", description: "Go to the gym", done: false},
    {id: 2, title: "Task 2", description: "Do the Laundry", done: false},
    {id: 3, title: "Task 3", description: "Finish Dawnbringer", done: false}
];

app.get('/', (req, res) => {
    res.status(200).json({ "name": "Task API", "version": "1.0", "endpoints": ["/tasks"] });
});

app.get('/health', (req,res) => {
    res.status(200).json({ "status": "ok" });
});

app.get('/tasks', (req, res) => {
    res.status(200).json(list);
});

app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = list.find(t => t.id === taskId);
    if (!task) {
        res.status(404).json({ "error": "Task not found" });
        return;
    }
    res.status(200).json(task);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});