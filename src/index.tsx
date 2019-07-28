import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { setConfig } from 'react-hot-loader';

import './index.css';

/** ************************************************************************* */

// if (__DEBUG__) setConfig({ logLevel: 'debug' });

/** ************************************************************************* */

// interface Props {
//   text: string;
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello {this.props.text}</h1>
//         world!
//       </div>
//     );
//   }
// }

const App = ({ text }) => (
  <div>
    <h1>Hello {text}</h1>
    world!
  </div>
);

/** ************************************************************************* */

ReactDOM.render(
  <App text="and goodbye!" />,
  document.getElementById('basement-lab')
);

/** ************************************************************************* */
