// src/MonthlyTasksPage.js
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig'; // تأكد من استيراد db
import "./Monthly.css";
import Naavaar from "../../combnits/nav/Navaar";

function MonthlyTasksPage() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // جلب البيانات من Firestore
        const querySnapshot = await getDocs(collection(db, "userData"));
        const allTasks = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        const currentMonth = new Date().getMonth();
        const monthlyTasks = allTasks.filter((task) => {
          // @ts-ignore
          const taskMonth = new Date(task.date).getMonth();
          return taskMonth === currentMonth;
        });

        setTasks(monthlyTasks);
      } catch (error) {
        console.error("Error fetching data from Firestore: ", error);
      }
    };

    fetchTasks();
  }, []);

  useEffect(() => {
    const filtered = tasks.filter(
      (task) =>
        task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.Pet_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTasks(filtered);
  }, [searchTerm, tasks]);

  return (
    <div>
      <Naavaar />
      <div className="Monthly">
        <div className="Monthly_input">
          <h2>Monthly Tasks</h2>

          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="Monthly_task">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task, index) => (
              <div data-aos="zoom-in" key={index} className="task">
                <p>
                  <i>Owner`s Name :</i> <span>{task.name}</span>
                </p>
                <p>
                  <i>Pet Name :</i> <span>{task.Pet_Name}</span>
                </p>
                <p>
                  <i>File number :</i> <span>{task.File_number}</span>
                </p>
                <p>
                  <i>Phone Number :</i> <span>{task.phone}</span>
                </p>
                <p>
                  <i>Vaccination :</i> <span>{task.Vaccinations}</span>
                </p>
                <p>
                  <i>Date :</i> <span>{task.date}</span>
                </p>
              </div>
            ))
          ) : (
            <p>No tasks found for this month.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MonthlyTasksPage;
