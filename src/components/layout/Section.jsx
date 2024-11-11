import Flex from '../shared/Flex';
import styles from './styles/section.module.css';

export default function Section({ headerTitle,headerAction, ...props }) {
    return (
        <section className={styles.section}>
            {headerTitle ? (
                <Flex justifyContent="space-between" >
                    <h3>{headerTitle}</h3>
                    {headerAction ? <div>{headerAction}</div> : null}
                </Flex>
            ) : null}
            <div> {props.children}</div>
        </section>
    );
}
