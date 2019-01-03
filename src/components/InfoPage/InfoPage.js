import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Nav from '../../components/Nav/Nav';
import {USER_ACTIONS} from '../../redux/actions/userActions';

const mapStateToProps = state => ({
  user: state.user,

});


class InfoPage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  retrieveProducts = () => {
    axios.get('/api/products', { params: {products: this.state.products } }).then(response => {
        console.log(response.data);
        this.setState({
            products: response.data
        });
       
    }).catch(error => {
        alert('There was an error getting product inventory');
        console.log(`ERROR trying to GET api/products: ${error}`);
    });
}

// findProducts = () => {
//       axios.get('/api/products', (req, res) => {
//           axios({
//               method: 'GET',
//               params: {}
//           }).then(response => {
//               console.log(response.data);
//               this.setState({
//                   products: response.data
//               });
//           }).catch(error => {
//               alert('There was an error getting requested product information');
//           console.log(`ERROR trying to GET api/products: ${error}`);
//           });
//       })
//   }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <p>
            Product Inventory
          </p>
          <button onClick={this.retrieveProducts}>Inventory</button>

{JSON.stringify(this.state)}

        </div>
      );
    }

    return (
      <div>
        <Nav />
        { content }
      </div>
    );
  }
}

export default connect(mapStateToProps)(InfoPage);
