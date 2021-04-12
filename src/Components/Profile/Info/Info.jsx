import infoModule from './Info.module.css';


const Info = (props) => {
    return (
        <div>
            <div className={infoModule.info}>
                <img src='https://fsd.multiurok.ru/html/2017/06/25/s_594fba42bf816/653571_1.jpeg'></img>
            </div>
            <div className={infoModule.descriptionBlock}>
                Avatar + Description
            </div>
        </div>
    )
}

export default Info;
