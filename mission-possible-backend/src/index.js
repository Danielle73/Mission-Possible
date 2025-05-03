import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const dataPath = path.join(__dirname, 'data', 'tasks.json');
let tasks = [];
try{
    const data = fs.readFileSync(dataPath, 'utf-8');
    tasks = JSON.parse(data);
} catch(err){
    console.log('No data or error reading file', err)
}


app.get('/', (req, res) => {
    res.send('Hello from the server')
});

app.get('/api/tasks', (req, res) => {
    res.json(tasks)
});

app.post('/api/tasks', (req, res) => {
    const { title, description, priority } = req.body;

    if (!title || !priority) {
        res.status(400).json({ error: 'A task name and priority is required' });
        return;
    }

    const newTask = {
        id: tasks.length + 1,
        title, 
        description: description || '',
        priority
    };

    tasks.push(newTask);

    try{
        fs.writeFileSync(dataPath, JSON.stringify(tasks, null, 2));
    } catch(err) {
        console.error('Error saving file', err);
        res.status(500).json({error: 'Failed to save task'});
    }

    res.status(201).json(newTask);
});


app.delete('/api/tasks/:id', (req, res) => {
   const taskId = parseInt(req.params.id);

   const taskIndex = tasks.findIndex(task => task.id === taskId);

   if(taskIndex === -1){
    return res.status(404).json({error: 'Task not found'});
   }

   tasks.splice(taskIndex, 1);

   try {
    fs.writeFileSync(dataPath, JSON.stringify(tasks, null, 2));
    res.json({message: 'Task deleted successfully'});
   } catch (err){
    console.error('Error saving file changes', err);
    res.status(500).json({error: 'Failed to delete task'})
   }

});

app.patch('/api/tasks/:id', (req, res) => {
    const taskID = parseInt(req.params.id);
    const {title, description, priority} = req.body;

    const taskIndex = tasks.findIndex(task => task.id === taskID);

    if(taskIndex === -1){
        return res.status(404).json({error:'Task not found'});
    }

    if(title !== undefined){
        tasks[taskIndex].title = title;
    }

    if(description !== undefined){
        tasks[taskIndex].description = description;
    }

    if(priority !== undefined){
        tasks[taskIndex].priority = priority
    }

    try{
        fs.writeFileSync(dataPath, JSON.stringify(tasks, null, 2));
    } catch(err){
        console.error('Error saving file', err);
        return res.status(500).json({error:'Failed to update task'});
    };

    res.status(200).json(tasks[taskIndex]);

});



app.listen(port, ()=> {
    console.log(`Express is listening at http://localhost:${port}`);
})