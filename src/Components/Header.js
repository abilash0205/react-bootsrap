import { Container, Row, Col, Navbar, Nav, NavLink, NavItem } from "reactstrap";

const AVATAR =
  "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=";

const Header = () => {
  return (
    <header>
      <Navbar
        color="light"
        light
        expand="xs"
        className="border-bottom border-gray bg-light"
        style={{ height: 80 }}
      >
        <Container>
          <Row
            g-0
            xs="1"
            sm="1"
            md="3"
            className="position-relative w-100 align-items-center"
          >
            <Col className="d-flex justify-content-start">
              <Nav className="mrx-auto" navbar>
                {/* --------------------First Nav Item-------------------- */}
                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-bold" href="/">
                    <img
                      src={AVATAR}
                      alt="avatar"
                      className="img-fluid rounded-circle"
                      style={{ width: 36 }}
                    />
                  </NavLink>
                </NavItem>

                {/* --------------------Second Nav Item-------------------- */}
                <NavItem className="d-flex align-items-center">
                  <NavLink href="/">Home</NavLink>
                </NavItem>

                {/* --------------------Third Nav Item-------------------- */}
                <NavItem className="d-flex align-items-center">
                  <NavLink href="/">About</NavLink>
                </NavItem>

                {/* --------------------Fourth Nav Item-------------------- */}
                <NavItem className="d-flex align-items-center">
                  <NavLink href="/">Contact</NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
