import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function Contact() {

    const username = useSelector((state: any) => state.user.value.username);

    return (
        <div className='Title'>
            {username ? <div>This is Contact Page of {username}</div>
                : <Link to='/rtk/login'><button className='Set-User-Button'>SET USER</button></Link>}
        </div>
    )
}