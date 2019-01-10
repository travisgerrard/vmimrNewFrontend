import React, { Component } from 'react';
import styled from 'styled-components';

import Card from './Card';

const CardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  max-width: ${props => props.theme.maxWidth}
  margin: 0 auto;
  .card:hover {
    background:: #f5f8fa;
  }
`;

export default class Cards extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleOnScroll);
  }

  handleOnScroll = () => {
    // http://stackoverflow.com/questions/9439725/javascript-how-to-detect-if-browser-window-is-scrolled-to-bottom
    var scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    var scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    var clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    if (scrolledToBottom) {
      this.props.onLoadMore();
    }
  };

  render() {
    const { presentations } = this.props;
    return (
      <CardLayout>
        {presentations.map(learning => {
          return (
            <Card
              key={learning.id}
              learning={learning}
              userId={this.props.userId}
            />
          );
        })}
      </CardLayout>
    );
  }
}