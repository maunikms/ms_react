import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import EditModal from './components/editModal';
import UserCard from './components/userCard';

function App() {


  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState({})

  useEffect(() => {
    fetchData();
  }, [])

  console.log("data", data);
  const fetchData = () => {
    try {
      axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          if (res.status === 200) {
            setData(res.data)
          }
        })
        .catch(err => {
          console.log("err", err)
        })
    } catch (error) {
      console.log("error", error);
    }
  }

  const deleteRecord = (id) => {
    if (id) {
      const copyData = data;
      const index = copyData.findIndex(function (o) {
        return o.id === id;
      })
      if (index !== -1) copyData.splice(index, 1);
      setData([...copyData])
    }
  }

  const likeDisLike = (id, isLike) => {
    if (id) {
      const copyData = data;
      const index = copyData.findIndex(function (o) {
        return o.id === id;
      })
      if (index !== -1) copyData[index].isLike = isLike;
      setData([...copyData])
    }
  }

  const toggleModal = () => {
    setOpen(!open);
  }

  const handleEdit = (userData) => {
    setOpen(true)
    setEditData(userData)
  }

  const handleSaveEditData = (editData) => {
    if (editData) {
      setOpen(false)
      const copyData = data;
      const index = copyData.findIndex(function (o) {
        return o.id === editData.id;
      })

      if (index !== -1) copyData[index] = editData;
      setData([...copyData])
    }
  }


  return (
    <>
      <EditModal open={open} toggleModal={toggleModal} editData={editData} handleSaveEditData={handleSaveEditData} />
      <div className="App">

        {
          data && data.length > 0 ?
            data.map((item, index) => {
              return (
                <div key={index}>
                  <UserCard userData={item} deleteRecord={deleteRecord} likeDisLike={likeDisLike} handleEdit={handleEdit} />
                </div>
              )
            })
            : <h1>data not found</h1>
        }
      </div>
    </>
  );
}

export default App;
