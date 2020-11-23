import React, {Component} from 'react';
import{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import { connect } from 'react-redux';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';
import { IAppNavbar, IAuthReduxProps } from '../types/interfaces';
const AppNavbar = ({ auth }: IAppNavbar) => {
    const [isOpen, setIsOpen] = useState(false);

class AppNavbar extends Component{
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    

    render () {
        return(
            <div>
                <Navbar color = "dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">
                            Information Scanner
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav class="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/Roelou/Roelou-Project-2">
                                        Github
                                    </NavLink>  
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
const authLinks = (
    <Fragment>
      <NavItem>
        <span className="navbar-text mr-3">
          <strong>
            {auth && auth.user ? `Welcome ${auth.user.name}` : ''}
          </strong>
        </span>
      </NavItem>
      <NavItem>
        <Logout />
      </NavItem>
    </Fragment>
);

  const guestLinks = (
    <Fragment>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </Fragment>
  );
  }
export default connect(mapStateToProps, null)(AppNavbar);