import React,{Component} from 'react';
import classes from './Layout.css';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer:false,
    }
    SideDrawerCloseHandler = () => {
        this.setState({showSideDrawer:false});
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer:!prevState.showSideDrawer};
        })
    }
    render(){
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerCloseHandler} />
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        );
    }
};
export default Layout;