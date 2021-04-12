import itemModule from './Item.module.css';
import { NavLink } from 'react-router-dom';

const Item = (props) => {
    let path = '/dialogs/' + props.ID;
    return (
        <div className={itemModule.item} >
            <NavLink to={path} activeClassName={itemModule.active}>{props.Name}</NavLink>
        </div>)
}

export default Item;