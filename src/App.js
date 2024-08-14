import React, { useState } from 'react';
import YouTube from './YouTube';
import Table from './Table';
import FENPreview from './FENPreview';
import tableData from './Tabledata';
import './App.css';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(tableData);
  const [selectedRowIndex, updateSelectedRowIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [fen, setFEN] = useState('');
  const [timestamp, updateTimeStamp] = useState(0);

  function updateIndex(index) {
    updateTimeStamp(data[index].timestamp);
    updateSelectedRowIndex(index);
    setFEN(data[index].prev);
  }

  function onTimeUpdate(timestamp) {
    let index = 0;
    for (let i = 0; i < data.length; i++) {
      if (Math.abs(data[i].timestamp - timestamp) < Math.abs(data[index].timestamp - timestamp)) {
        index = i;
      }
    }
    updateSelectedRowIndex(index);
    if (index < 0 || index >= data.length) {
      return;
    }
    setFEN(data[index].next);
  }

  // insertRow, inserts row at selectedRowIndex
  function insertRow() {
    if (!data) {
      return;
    }
    const newRow = {
      timestamp: 0,
      move: '',
      prev: '',
      next: ''
    }
    const newData = [...data];
    newData.splice(selectedRowIndex, 0, newRow);
    setData(newData);
  }

  // deleteRow, deletes row at selectedRowIndex
  function deleteRow() {
    if (!data || data.length == 0) {
      return;
    }
    const newData = [...data];
    newData.splice(selectedRowIndex, 1);
    setData(newData);
  }

  function updateData(url) {
    // request to api at localhost:3000/moves, url as query parameter, use localhost:3000/status to check status at regular interval
    console.log(url);
    setIsLoading(true);
    axios.get('http://localhost:8000/moves', {
      params: {
        url: url
      }
    }).then(response => {
      setData(response.data);
      setTimeout(() => setIsLoading(false), 1000);
    }).catch(error => {
      console.error(error);
      setTimeout(() => setIsLoading(false), 1000);
    });
  }

  return (
    <>
      <h1>Chess Moves Found in YouTube Video</h1>

      <section className='flexbox-row'>
        <Table
          data={data}
          selectedRowIndex={selectedRowIndex}
          updateSelectedRowIndex={updateIndex}
          insertRow={insertRow}
          deleteRow={deleteRow}
          updateData={updateData}
          isLoading={isLoading}
        />
        <section>
          <YouTube videoId={"YteWv1UVN8U"} timestamp={timestamp} onTimeUpdate={onTimeUpdate} />
          <FENPreview fen={fen} />
        </section>
      </section>
    </>
  )
};

export default App;
