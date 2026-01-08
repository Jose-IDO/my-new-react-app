import React from 'react'
import styles from './StatItem.module.css'

type StatItemProps = {
  count: number;
  label: string;
}

export const StatItem: React.FC<StatItemProps> = ({ count, label }) => {
  return (
    <div className={styles.statitem}>
      <span className={styles.statcount}>{count}</span>
      <span className={styles.statlabel}>{label}</span>
    </div>
  )
}



