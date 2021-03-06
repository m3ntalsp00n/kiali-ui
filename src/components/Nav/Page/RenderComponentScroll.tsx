import React from 'react';

export class RenderComponentScroll extends React.Component<{ className?: any }, { height: number }> {
  constructor(props) {
    super(props);
    this.state = { height: 0 };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    // 76px (header) + 115px (breadcrumb + title) + 40px (tabs)
    this.setState({ height: window.innerHeight - 231 });
  };

  render() {
    return (
      <div
        style={{ height: this.state.height, overflowY: 'auto', padding: '10px' }}
        className={this.props.className ? this.props.className : undefined}
      >
        {this.props.children}
      </div>
    );
  }
}
