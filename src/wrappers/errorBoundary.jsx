import React from 'react';

import { Redirect } from 'umi';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { errorInfo: error };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.errorInfo) {
      if (this.state.errorInfo.response?.statusCode === 403) {
        this.setState({ errorInfo: null });
        return <Redirect to="/403" />;
      }
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
