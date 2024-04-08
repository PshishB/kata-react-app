import React,{Component} from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import './todo-list-item.css'

export default class TodoListItem extends Component {
    render () {
        const {label,time,onToogleCompleted,onDeleted,completed} = this.props;
        
        let classNames = '';

        if (completed) {
            classNames +=' completed';
        }

        return (
        <div className="view">
            <input className="toggle" type="checkbox"/>
            <label className = {classNames} onClick={onToogleCompleted}>
                <span className="description">{label}</span>
                <span className="created">{time}</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
    )
    }   
}
