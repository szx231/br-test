import { useEffect, useState } from 'react';
import styles from './CheckBox.module.css';
import { FC } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { updateFields } from '../../store/tarif/actions';

interface ICheckBox {
  firstTitle: string;
  secondTitle: string;
}

export const CheckBox: FC<ICheckBox> = ({ firstTitle, secondTitle }) => {
  const [isChecked, setIsChecked] = useState(firstTitle);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      updateFields({
        key: 'wifi',
        value: isChecked,
      })
    );
  }, [isChecked, dispatch]);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Wi-Fi роутер</h3>
      <div className={styles.container}>
        <label className={styles['custom-checkbox-container']}>
          <input
            type="checkbox"
            checked={isChecked === firstTitle}
            onChange={() => setIsChecked(firstTitle)}
            className={styles['custom-checkbox']}
          />
          <span className={styles['custom-checkbox-checkmark']}></span>
          <div className={styles.item}>{firstTitle}</div>
        </label>
        <label className={styles['custom-checkbox-container']}>
          <input
            type="checkbox"
            checked={isChecked === secondTitle}
            onChange={() => setIsChecked(secondTitle)}
            className={styles['custom-checkbox']}
          />
          <span className={styles['custom-checkbox-checkmark']}></span>
          <div className={styles.item}>{secondTitle}</div>
        </label>
      </div>
    </div>
  );
};
