import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ friend }) {
  return (
    <div>
      <img src={friend.avatar} alt="Avatar" width="48" />
      <p className={css.text}>{friend.name}</p>
      <p className={clsx(css.stats, friend.isOnline ? css.green : css.red)}>
        {friend.isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
