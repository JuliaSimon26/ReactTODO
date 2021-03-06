import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done'

const TodoList = ({todos, deleteTodo, setToDone}) => (
    <List>
        {todos.map((todo, index) => (
            <ListItem key={index.toString()} dense button>
                <ListItemText primary={todo}/>
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label="Done"
                        onClick={() => {
                            setToDone(index)
                        }}
                    >
                        <DoneIcon/>
                    </IconButton>
                    <IconButton
                        aria-label="Delete"
                        onClick={() => {
                            deleteTodo(index);
                        }}
                    >
                        <DeleteIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ))}
    </List>
);

export default TodoList;
