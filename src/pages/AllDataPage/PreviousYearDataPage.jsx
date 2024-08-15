// src/PreviousYearDataPage.js
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig'; // تأكد من استيراد db
import Naavaar from '../../combnits/nav/Navaar';
import './PreviousYearDataPage.css';

const PreviousYearDataPage = () => {
  const [allData, setAllData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // جلب البيانات من Firestore
        const querySnapshot = await getDocs(collection(db, 'userData'));
        const fetchedData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        const currentYear = new Date().getFullYear();
        const previousYear = currentYear - 1;
        const filteredData = fetchedData.filter((data) => {
          // @ts-ignore
          const taskYear = new Date(data.date).getFullYear();
          return taskYear === previousYear;
        });

        setAllData(filteredData);
      } catch (error) {
        console.error('Error fetching data from Firestore: ', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const result = allData.filter((data) =>
      data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.phone.includes(searchTerm) ||
      data.Pet_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.File_number.includes(searchTerm)
    );

    setFilteredData(result);
  }, [searchTerm, allData]);

  return (
    <div>
      <Naavaar />
      <div className='previous-year-data-page'>
        <div className='previous_year_data'>
          <h2>All Data for Last Year</h2>
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>
        <div className='data-list'>
          {filteredData.length > 0 ? (
            filteredData.map((data, index) => (
              <div data-aos="zoom-in" className='data-item' key={index}>
                <p><i>Name:</i> <span>{data.name}</span></p>
                <p><i>Pet Name:</i> <span>{data.Pet_Name}</span></p>
                <p><i>File Number:</i> <span>{data.File_number}</span></p>
                <p><i>Vaccinations:</i> <span>{data.Vaccinations}</span></p>
                <p><i>Phone:</i> <span>{data.phone}</span></p>
                <p><i>Date:</i> <span>{data.date}</span></p>
              </div>
            ))
          ) : (
            <p>No matching data found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviousYearDataPage;
