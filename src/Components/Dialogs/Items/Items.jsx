import Item from './Item/Item';
import itemsModule from './Items.module.css';

const Items = (props) => {
    return (
        <div className={itemsModule.items}>
            <Item Name ='Denis' ID = '1'/>
            <Item Name ='Diana' ID = '2'/>
            <Item Name ='Lena' ID = '3'/>
            <Item Name ='Dima' ID = '4'/>
            <Item Name ='Oleg' ID = '5'/>
            <Item Name ='Marusa' ID = '6'/>
            <Item Name ='Lada' ID = '7'/>
        </div>)
}

export default Items;