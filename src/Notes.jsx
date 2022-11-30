import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Notes.css';

const Notes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3003/notes')
            .then((res) => {
                setNotes(res.data);
                console.log(res.data)
            });

    }, [])

    return (
        <div className="notes">
            <section>
                {notes.map((note) => (
                    <ul>
                        <li>Firstname: {note.firstname}</li>
                        <li>Lastname: {note.lastname}</li>
                        <li>Phone: {note.phone}</li>
                        <li>Role: {note.role}</li>
                        <li>Message: {note.message}</li>
                        <li>Id: {note.id}</li></ul>
                ))}

            </section>

        </div>
    );
};

export default Notes;