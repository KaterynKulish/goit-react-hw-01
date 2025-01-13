import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileWrapper}>
      <div className={css.card}>
        <img className={css.avatar} src={image} alt={name} />
        <p className={css.userName}>{name}</p>
        <p className={css.text}>{"@"+tag}</p>
        <p className={css.text}>{location}</p>
      </div>

        <ul className={css.list}>
          <li className={css.item}>
            <span>Followers</span>
            <span className={css.itemStats}>{stats.followers}</span>
          </li>
          <li className={css.item}>
            <span>Views</span>
            <span className={css.itemStats}>{stats.views} </span>
          </li>
          <li className={css.item}>
            <span>Likes</span>
            <span className={css.itemStats}>{stats.likes}</span>
          </li>
        </ul>
    </div>
  );
}


