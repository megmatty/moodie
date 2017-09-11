import React, { Component }  from 'react';
import ReactDOM from "react-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { findAll } from '../../entries/newentries';

class Pie extends Component {

	render() {
		return(
			<div className="center">
      	<div id="container"></div>

      	<input id="changeBtn" type="checkbox" ></input>
      <label className="switch" htmlFor="changeBtn"><span>PIE</span><span>BAR</span></label>
    </div>
		);
	}

}

export default Pie;