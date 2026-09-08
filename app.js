const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

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
        res.status(404).json({ "error": `Task ${taskId} not found` });
        return;
    }
    res.status(200).json(task);
});

app.post('/tasks', (req, res) => {
    const title = req.body.title;
    if(!title) {
        res.status(400).json({ "error": "Title is required" }); 
        return;
    }

    const newTask ={id: list.length +1, title: title, description: "", done: false};
    list.push(newTask);
    res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = list.find(t=> t.id === taskId);

    if(!task) {
        res.status(404).json({ "error": `Task ${taskId} not found` });
        return;
    }
    if (!req.body.title){
        res.status(400).json({ "error": "Title is required" });
        return;
    }
    
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.done = req.body.done !== undefined ? req.body.done : task.done;
    res.status(200).json(task);
});

app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const index = list.findIndex(t => t.id === taskId);

    if (index === -1) {
        res.status(404).json({ "error": `Task ${taskId} not found` });
        return;
    }   

    list.splice(index, 1);
    res.status(204).send();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});