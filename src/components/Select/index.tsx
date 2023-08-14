import React, { useState, useRef, useEffect } from 'react';
import styles from './Select.module.css';
import { updateFields } from '../../store/tarif/actions';
import { useAppDispatch } from '../../store/hooks';

export const Select = ({ options }) => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Оператор');
  const selectRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectRef]);

  useEffect(() => {
    dispatch(
      updateFields({
        key: 'operator',
        value: selectedOption,
      })
    );
  }, [selectedOption, dispatch]);

  return (
    <div ref={selectRef} className={styles.wrapper}>
      <div className={styles.menu} onClick={() => setIsOpen(!isOpen)}>
        <div>{selectedOption}</div>
        <span className={styles.arrow}>
          <img style={{ rotate: isOpen ? '180deg' : '0deg' }} src="../../../public/arrow.svg" alt="arrow" />
        </span>
      </div>
      {isOpen && (
        <ul className={styles.list}>
          {options.map((option) => (
            <li key={option} className={styles.option} onClick={() => setSelectedOption(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
