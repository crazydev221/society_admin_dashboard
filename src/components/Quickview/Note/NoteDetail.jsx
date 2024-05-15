import React from 'react';

import ContentEditable from 'react-contenteditable';
import Moment from 'react-moment';
import './style.css';

import WYSIWYGItem from './WYSIWYGItem';

let note = {};

const handleChange = (event) => {
    note.content = event.target.value;
    note.textContent = event.currentTarget.innerText;
    note.date = new Date();
    note.id = Math.random().toString(20).replace('0.', '')
}

const NoteDetail = (props) => {
    return (
        <div>
            <ul className="toolbar">
                <li>
                    <a 
                        href="#" 
                        onClick={() => { 
                            let updateNote = note
                            if(props.newContent.id !== undefined && props.newContent.id !== "" && props.newContent.id !== null){
                                updateNote.id = props.newContent.id
                            }
                            note = {}
                            return props.onBack({ 
                                content: updateNote.content, 
                                textContent: updateNote.textContent,
                                date: updateNote.date, 
                                id: updateNote.id,
                                shouldRemove: false,
                                checkBoxCheckStatus: false
                            })
                        }} 
                        className="close-note-link">
                            <i className="pg-icon">chevron_left</i>
                    </a>
                </li>
                <WYSIWYGItem cmd="bold" class="fa fa-bold"/>
                <WYSIWYGItem cmd="italic" class="fa fa-italic"/>
                <WYSIWYGItem 
                    cmd="createLink"
                    arg="https://ww.google.com"
                    name="hyperlink" 
                    class="fa fa-link"
                />
            </ul>
            <div className="body">
                <div>
                    <div className="top">
                        <span>
                            <Moment format="DD MMM YYYY hh:mm a">
                                {new Date()}
                            </Moment>
                        </span>
                    </div>
                    <div className="content">
                        <ContentEditable
                            className="quick-note-editor full-width full-height js-input"
                            html={(props.newContent && props.newContent.content) || ""}
                            disabled={false}       // use true to disable editing
                            onChange={handleChange} // handle innerHTML change
                            placeholder={"Add note and click '<' to save"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoteDetail