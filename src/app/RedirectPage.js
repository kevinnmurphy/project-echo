import React from 'react';
import _ from 'lodash';
import { getParamValues } from '../features/spotify/functions';

export default class RedirectPage extends React.Component {
  debugger;
  componentDidMount() {
    // const { setExpiryTime, history, location } = this.props;
    const { history, location } = this.props;
    try {
      if (_.isEmpty(location.hash)) {
        return history.push('/');
      }
      const access_token = getParamValues(location.hash);
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
      localStorage.setItem('params', JSON.stringify(access_token));
      localStorage.setItem('expiry_time', expiryTime);
      history.push('/');
    } catch (error) {
      history.push('/');
    }
  }

  render() {
    return null;
  }
}
