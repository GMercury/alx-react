import React, { useContext } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite/no-important';
import { AppContext } from '../App/AppContext';

const styles = StyleSheet.create({
    bottom: {
        width: '100%'
    },
    footerParagraph: {
        color: 'white',
        textAlign: 'center',
        borderTop: '2px solid #e1484c'
    }
})

function Footer() {
    const context = React.useContext(AppContext);
    const footerText = (context.currentUser.isLoggedIn) ? <a href="#">Contact us</a> : `Copyright ${getFullYear()} - ${getFooterCopy(false)}`
    return (
        <div className={css(styles.bottom)}>
            <p className={css(styles.footerParagraph)}>{footerText}</p>
        </div>
    )
}

export default Footer;