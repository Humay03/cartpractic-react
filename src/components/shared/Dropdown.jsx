import { createContext, useContext, useState } from "react";
import styles from "./dropdown.module.css";

const DropdownContext = createContext();
const useDropdownState = () => useContext(DropdownContext);

export default function Dropdown({ children, as: Element = "div" }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <DropdownContext.Provider
            value={{
                isOpen,
                setOpen,
            }}
        >
            <Element className={styles.dropdown}>{children}</Element>
        </DropdownContext.Provider>
    );
}

export function DropdownTrigger({ children, as: Element = "button" }) {
    const { setOpen } = useDropdownState();

    return (
        <Element onClick={() => setOpen((oldState) => !oldState)}>
            {children}
        </Element>
    );
}

export function DropdownContent({ children }) {
    const { isOpen } = useDropdownState();

    return isOpen ? (
        <div className={styles.dropdownContent}>{children}</div>
    ) : null;
}
