import styles from "./styles.module.scss";
import {FC, ReactNode, useState} from "react";

interface IDropdownProps {
  switcher: ReactNode;
  children: ReactNode;
}
export const Dropdown: FC<IDropdownProps> = ({switcher, children}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={styles.dropdown}>
      <div onClick={() => setOpen(prev => !prev)} aria-expanded={open} className={styles.switcher}>
        {switcher}
      </div>

      {open && (
        <div id='dropdownContent' className={styles.dropdownPlacement}>
          {children}
        </div>
      )}
    </div>
  )
};

