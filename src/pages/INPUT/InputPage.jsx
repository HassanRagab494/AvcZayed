import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig'; // استيراد Firestore
import Naavaar from "../../combnits/nav/Navaar";
import { useState } from "react";
import './input.css'

const InputPage = () => {
  const [name, setName] = useState('');
  const [Pet_Name, setPet_Name] = useState('');
  const [File_number, setFile_number] = useState('');
  const [Vaccinations, setVaccinations] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async () => {
    // إضافة طابع زمني (timestamp) إلى البيانات
    const data = { 
      name, 
      Pet_Name, 
      File_number, 
      Vaccinations, 
      phone, 
      date, 
      createdAt: Timestamp.now() // إضافة الطابع الزمني
    };

    try {
      // إضافة البيانات إلى Firestore
      await addDoc(collection(db, "userData"), data);
      console.log("Data saved successfully in Firestore!");

      // تفريغ النموذج بعد الحفظ
      setName('');
      setPhone('');
      setDate('');
      setPet_Name('');
      setFile_number('');
      setVaccinations('');
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error saving data to Firestore.");
    }
  };

  return (
    <div>
      <Naavaar />
      <div className='froms'>
        <div data-aos="zoom-in" className='grop'>
          <h2>Input Data</h2>
          <input 
            type="text" 
            placeholder="Owner's Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Pet Name" 
            value={Pet_Name} 
            onChange={(e) => setPet_Name(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="File number" 
            value={File_number} 
            onChange={(e) => setFile_number(e.target.value)} 
          />
          <input 
            type="number" 
            placeholder="Phone Number" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Vaccinations" 
            value={Vaccinations} 
            onChange={(e) => setVaccinations(e.target.value)} 
          />
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default InputPage;
