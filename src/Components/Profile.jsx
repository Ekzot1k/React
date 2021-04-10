import profilModule from './Profile.module.css';

const Profile = () => {
    return <div className={profilModule.profile}>
        <div>
            <img src='https://fsd.multiurok.ru/html/2017/06/25/s_594fba42bf816/653571_1.jpeg'></img>
        </div>
        <div>
            Avatar + Description
        </div>
        <div>
            My post
            <div>
                New post
            </div>
            <div>
                <div>
                    post 1
            </div>
                <div>
                    post 2
            </div>
                <div>
                    post 3
            </div>
            </div>
        </div>
    </div>
}

export default Profile;