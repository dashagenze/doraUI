import { FC, ReactNode, useState } from 'react';
import styles from './styles.module.scss';

interface IDropdownProps {
  /** Элемент-триггер дропдауна */
  switcher: ReactNode;
  /** Контент внутри дропдауна */
  children: ReactNode;
}

export const Dropdown: FC<IDropdownProps> = ({ switcher, children }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <div className={styles.dropdownContainer}>
        <div
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          className={styles.switcher}>
          {switcher}
        </div>

        {open && (
          <div id="dropdownContent" className={styles.dropdownContent}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
