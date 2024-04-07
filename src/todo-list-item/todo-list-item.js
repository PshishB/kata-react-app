import React,{Component} from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import './todo-list-item.css'

export default class TodoListItem extends Component {

    state = {
        completed: this.props.classic.includes('completed')
    }

    onLabelClick = () => {
        this.setState((({completed}) => {
            return {
                completed: !completed
            }
        }))
    }

    render () {
        const {label,classic,time} = this.props;
        let {completed} = this.state;
        
        let classNames = '';

        if (completed) {
            classNames +=' completed';
        }

        return (
        <div className="view">
            <input className="toggle" type="checkbox"/>
            <label className = {classNames} onClick={this.onLabelClick}>
                <span className="description">{label}</span>
                <span className="created">{time}</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy" onClick={this.props.onDeleted}></button>
        </div>
    )
    }   
}
