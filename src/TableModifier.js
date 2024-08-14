import React, { useState, useEffect } from "react";
import axios from "axios";

const TableModifier = ({ insertRow, deleteRow, updateData, isLoading }) => {
    let [url, setURL] = useState('');
    let [status, setStatus] = useState('');
    let [statusInterval, setstatusInterval] = useState(null);

    function updateStatus() {
        axios.get('http://localhost:8000/status', {
            params: {
                url: url
            }
        }).then(response => {
            setStatus(`${response.data.status} ${response.data.progress ? (response.data.progress * 100).toFixed(2) + '%' : ''}` );
        }).catch(err => {
            console.log(err);
            setStatus('Error');
        });
    }

    useEffect(() => {
        if (isLoading) {
            setstatusInterval(setInterval(() => {
                updateStatus();
            }, 500));
        } else {
            if (statusInterval) {
                clearInterval(statusInterval);
                setstatusInterval(null);
            }
        }
    }, [isLoading]);

    return (
        <section style={{ "float": "right" }} className='flexbox-row.'>
            <section className="flexbox-column">
                <button onClick={insertRow}>Insert</button>
                <button onClick={deleteRow}>Delete</button>
            </section>
            <section>
                <input type="text" onChange={(e) => setURL(e.target.value)} placeholder="YouTubeURL"></input>
                <button onClick={() => updateData(url)} style={{ "backgroundColor": "#2d8ee4" }}>Set Video</button>
            </section>
            {
                isLoading ? <section><img width="15px" height="15px" src="loading.svg"></img>Status: {status}</section> : null
            }
        </section>
    );
}

export default TableModifier;