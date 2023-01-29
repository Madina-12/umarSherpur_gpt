import styles from './Heading.module.css'
const Heading = ({title}) => {
  return (
    <div className={styles.heading}>
        <div className={styles.title}>{title}</div>
        <div className={styles.bar}></div>
    </div>
  )
}

export default Heading