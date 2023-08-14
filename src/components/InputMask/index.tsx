import { useEffect, useState } from 'react';
import styles from './InputMask.module.css';
import { default as Mask } from 'react-input-mask';
import { updateFields } from '../../store/tarif/actions';
import { useAppDispatch } from '../../store/hooks';

export const InputMask = () => {
  const dispatch = useAppDispatch();
  const [isError, setIsError] = useState(false);

  const [number, setNumber] = useState();

  const handleChangeNumber = (e) => {
    const { value } = e.currentTarget;

    setNumber(value);
  };

  const handleValidation = (value: string) => {
    if (!/^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/.test(value)) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  useEffect(() => {
    dispatch(
      updateFields({
        key: 'number',
        value: isError ? 'err' : number,
      })
    );
  }, [number, dispatch]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3 className={styles.title}>Телефон</h3>
        <Mask
          placeholder="+7 (999) 999-99-99"
          className={`${styles.input} ${isError ? styles.error : ''}`}
          name="number"
          mask="+7 (999) 999-99-99"
          value={number}
          onChange={handleChangeNumber}
          onBlur={(e) => handleValidation(e.target.value)}
        />
      </div>
      {isError ? (
        <span className={styles.errorMessage}>Error message informing me of a problem</span>
      ) : (
        <span className={styles.required}>Обязательное поле</span>
      )}
    </div>
  );
};
