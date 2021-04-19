import Item from './Item/Item';
import itemsModule from './Items.module.css';

const Items = (props) => {
    return (
        <div className={itemsModule.items}>
            {props.ItemsData.map(item => <Item Name={item.Name} ID={item.ID} />)}
        </div>)
};

export default Items;