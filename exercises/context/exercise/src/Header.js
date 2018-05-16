<<<<<<< HEAD
import React from "react"

import { Consumer } from './Context'

const Header = () => (
    <Consumer>
        {({ primaryColor }) => <div className="header">{children}</div>}
    </Consumer>
)

export default Header
=======
import React from 'react';

import { Consumer } from './Context';

const Header = ({ children }) => (
  <Consumer>
    {({ primaryColor }) => (
      <div className="header" style={{ backgroundColor: primaryColor }}>
        {children}
      </div>
    )}
  </Consumer>
);

export default Header;
>>>>>>> 79344564b5ae541394fe6cc2bf7e14724a0e50bc
