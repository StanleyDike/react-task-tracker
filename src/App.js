import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Haircut',
      day: 'Feb 29th at 1:00pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Grocery Shopping',
      day: 'March 4th at 12:00pm',
      reminder: false,
    },
    {
      id: 3,
      text: 'Dentist Appointment',
      day: 'March 7th at 8:0am',
      reminder: false,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    console.log('Delete', id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    console.log('toggle reminder', id);
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
};

export default App;
