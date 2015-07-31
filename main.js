import React from 'react';
import mui, { AppBar, Tab, Tabs, Styles } from 'material-ui';
let { Colors, Spacing, Typography } = Styles;

let ThemeManager = new Styles.ThemeManager();

class JSfeatures extends React.Component {
  constructor () {
    super()
  }
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }
  render () {
    return <div>
        <AppBar showMenuIconButton={false} title="JSfeatures IN.....coming soon!" />
        <img src="http://33.media.tumblr.com/5e0cc26f0166d9fae90c6e015582117a/tumblr_n7w5d0l8Cc1qiywueo3_500.gif"
            alt="Backyard Banditry"
            style={{ position: 'absolute',margin: 'auto',top: 0,left: 0,right: 0,bottom: 0}}/>
    </div>
  }
}

JSfeatures.childContextTypes = {
  muiTheme: React.PropTypes.object
};

JSfeatures.contextTypes = {};

React.render(<JSfeatures />, document.querySelector('#content'))
