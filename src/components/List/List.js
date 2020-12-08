import React from 'react';
import styles from'./List.scss';

class List extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <h2 className={styles.subtitle}>Hello world again</h2>
      </section>
    )
  }
}

export default List;