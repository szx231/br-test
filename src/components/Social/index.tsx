import React, { useEffect, useState } from 'react';
import styles from './Social.module.css';
import facebook from '../../../public/facebook.svg';
import vk from '../../../public/vk.svg';
import ok from '../../../public/ok.svg';
import instagramm from '../../../public/instagramm.svg';
import tiktok from '../../../public/tiktok.svg';
import cn from 'classnames';
import { updateFields } from '../../store/tarif/actions';
import { useAppDispatch } from '../../store/hooks';

export const Social = ({ social }) => {
  const dispatch = useAppDispatch();

  const images = {
    facebook: facebook,
    vk: vk,
    ok: ok,
    instagramm: instagramm,
    tiktok: tiktok,
  };

  const [selectedItems, setSelectedItems] = useState([]);

  const handleClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  useEffect(() => {
    dispatch(
      updateFields({
        key: 'socialSumm',
        value: selectedItems.reduce((acc, cur) => acc + cur.value, 0),
      })
    );
  }, [selectedItems, dispatch]);

  return (
    <div>
      <h3 className={styles.title}>Соцсети</h3>
      <ul className={styles.listSocial}>
        {social.map((item) => {
          return (
            <button
              key={item.name}
              className={cn(styles.itemWrapper, {
                [styles.selected]: selectedItems.includes(item),
                [styles.unSelected]: !selectedItems.includes(item),
              })}
              onClick={() => handleClick(item)}
            >
              <div className={styles.image}>
                <img src={images[item.name]} />
              </div>
              <div className={styles.describe}>{item.value}</div>
            </button>
          );
        })}
      </ul>
    </div>
  );
};
