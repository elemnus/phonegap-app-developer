import { h, Component } from 'preact';
import animateView from 'react-animated-views';
import { TabBar } from 'topcoat-preact';
import TransitionGroup from 'preact-transition-group';
import { connect } from 'preact-redux';

import MainHeader from 'components/MainHeader';

class MainPage extends Component {

  // @TODO revove the lint disable when this method actually does something
  handleIconButtonClick(buttonName) { // eslint-disable-line class-methods-use-this
    console.log(`${buttonName} icon button clicked`);
  }

  handleTabBarButtonClick(tab) {
    const { push } = this.props;
    push(`/main/${tab}`);
    console.log(`${tab} tab clicked`);
  }

  render() {
    return (
      <div className="page">
        <MainHeader handleIconButtonClick={ this.handleIconButtonClick } />
        <TabBar
          full
          name="app-load-options"
          clickHandler={ tab => this.handleTabBarButtonClick(tab) }
        >
          <span key="connect">Connect</span>
          <span key="cloud">Cloud</span>
        </TabBar>
        { /* Nested route: the children are the containers for each tab */ }
        <TransitionGroup className="transitiongroup">
          { this.props.children }
        </TransitionGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state };
}

export default animateView(connect(mapStateToProps)(MainPage));
