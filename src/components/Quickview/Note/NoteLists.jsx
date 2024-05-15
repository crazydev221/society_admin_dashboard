import React from 'react'

import NoteListItem from './NoteListItem';

const NoteLists = (props) => {
    if(props.list){
        return (
            <ul>
                { /* BEGIN Note Item */ }
                {props.list.map((note, index) => {
                    return (
                        <NoteListItem 
                            key={index}
                            inputId={note.id}
                            content={note.content}
                            textContent={note.textContent}
                            date={note.date}
                            checkItem={props.check}
                            shouldTrash={props.trash}
                            editNoteNav={props.editNav}
                        />
                    )
                })}
                { /* END Note List */ }
            </ul>
		
        )
    } else {
        return <p>Loading..</p>
    }
}

export default NoteLists