import React, { Component } from 'react';
import styled from 'styled-components';

import Card from './Card';

const CardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40vw, 1fr));
  grid-gap: 30px;
  max-width: ${props => props.theme.maxWidth}
  margin: 0 auto;
  .card:hover {
    background-color: #f5f8fa;
  }

  @media (max-width: 1300px) {
    grid-template-columns: repeat(auto-fit, minmax(44vw, 1fr));
    grid-gap: 10px;
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(90vw, 1fr));
  }
  @media (max-width: 800px) {
    grid-template-columns: 94vw;
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
