import React from 'react';
import { StyleSheet, css} from 'aphrodite';
import BodySection from './BodySection';

const styles = StyleSheet.create({
  bodySectionWithMargin: {marginBottom: 40}
})

export default class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <div className={css(styles.bodySectionWithMargin)} {...this.props}>
        <BodySection {...this.props}></BodySection>
      </div>
    )
  }
}