import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { InputMask } from './components/InputMask';
import { Select } from './components/Select';
import { Range } from './components/Range';
import { CheckBox } from './components/CheckBox';
import darkButtonImage from '../public/darkBtn.svg';
import blueButtonImage from '../public/blueBtn.svg';
import { useAppDispatch, useAppSelector } from './hooks';
import { getData } from './store/getData/thunk';
import { selectData } from './store/getData/selectors';
import { Social } from './components/Social';
import { tarif } from './store/tarif/selectors';

function App() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(selectData);
  const { allFields } = useAppSelector(tarif);

  const resultSumm = `${
    allFields.socialSumm && allFields.wifi
      ? Number(allFields.socialSumm) + Number(allFields.wifi.replace(/[^\d]/g, ''))
      : 0
  } ₽`;

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;

  return (
    <>
      {data && (
        <div className={styles.form}>
          <h1 className={styles.title}>Настройте тариф</h1>
          <InputMask />
          <Select options={data.operators} />
          <Range title={'Минуты'} color={'var(--color-accent)'} data={data.minutes} buttonImage={blueButtonImage} />
          <Range title={'Интернет'} color={'black'} data={data.Internet} buttonImage={darkButtonImage} />
          <CheckBox firstTitle={data.wifi[0]} secondTitle={data.wifi[1]} />
          <Social social={data.social} />
          <button type="button" onClick={() => alert(JSON.stringify(allFields))} className={styles.button}>
            <span className={styles.typography}>{resultSumm}</span>
            <span className={styles.commonText}>в месяц</span>
          </button>
        </div>
      )}
    </>
  );
}

export default App;
