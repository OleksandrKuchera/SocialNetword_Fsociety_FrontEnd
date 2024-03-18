import avatar from '../../../../assets/avatar.png'
import style from '../ChatList/chatList.module.scss'

type chatItemType = {
    isActive?: boolean,
}

const ChatItem = ({isActive = false} : chatItemType) => {
    return (
        <div  className={isActive? `${style.active} ${style.chat__item}}` : `${style.chat__item}`}>
            <div className="row">
                <div className="col-4">
                    <div className={style.avatar__info}>
                        <img src={avatar} alt="avatar" />
                        <div>
                            <h4>Mom</h4>
                            <p>Online</p>
                        </div>
                    </div>
                </div>
                <div className="col-8 d-flex align-items-center">
                    <p className={style.chat__message}>Buy milk kurwo...</p>
                </div>
            </div>
        </div>
    );
}

export default ChatItem;