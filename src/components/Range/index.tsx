import { useEffect, useState } from 'react';
import styles from './Range.module.css';
import { updateFields } from '../../store/tarif/actions';
import { useAppDispatch } from '../../store/hooks';

export const Range = ({ title, color, data, buttonImage }) => {
  const dispatch = useAppDispatch();
  const [progress, setProgress] = useState(-1);
  const currentItem = data[Math.floor(progress / 25)] ? data[Math.floor(progress / 25)] : Math.min(...data);
  const value = title === 'Минуты' ? ' мин.' : ' ГБ';

  useEffect(() => {
    dispatch(
      updateFields({
        key: title === 'Минуты' ? 'minutes' : 'internet',
        value: currentItem + value,
      })
    );
  }, [currentItem, dispatch, title, value]);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.main}>
        <input
          onChange={(e) => setProgress(+e.target.value)}
          step="32"
          type="range"
          min="0"
          max="100"
          value={progress}
          id={styles.slider}
        />
        <div style={{ left: `${progress}%` }} id={styles.selector}>
          <img src={buttonImage} alt="buttonImage" />
        </div>
        <div
          style={{
            width: `${progress !== 0 ? progress + 1 : progress}%`,
            backgroundColor: color,
          }}
          id={styles.progressBar}
        ></div>
      </div>
      <div className={styles.dataContainer}>
        {data.map((el, index) => (
          <div className={styles.listItem}>{currentItem === el ? el + value : el}</div>
        ))}
      </div>
    </div>
  );
};
