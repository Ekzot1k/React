import profilModule from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div className={profilModule.profile}>
            <div>
                <img height='200px' src='https://fsd.multiurok.ru/html/2017/06/25/s_594fba42bf816/653571_1.jpeg'></img>
            </div>
            <div>
                Avatar + Description
        </div>
            <MyPosts />
        </div>)
}

export default Profile;