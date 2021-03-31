import React from 'react';
import Hero from '../Hero/Hero';
import styles from './List.scss';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';

const List = props => (

  <section className={styles.component}>
    <Hero title={props.title} image={props.image} />
    <div className={styles.description}>
      {ReactHtmlParser(props.description)}
    </div>
    <div className={styles.columns}>
      {props.columns.map(columnData => (
        <Column key={columnData.id} {...columnData} />
      ))}
    </div>
    <div className={styles.creator}>
      <Creator text={settings.columnCreatorText} action={props.addColumn} />
    </div>
  </section>
);
List.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  columns: PropTypes.array,
  image: PropTypes.string,
  addColumn: PropTypes.func,
};

List.defaultProps = {
  description: settings.defaultListDescription,
};

export default List;