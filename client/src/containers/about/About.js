import React, { Component }  from 'react';
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'
import { sendEntry } from '../../entries/newentries';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import * as io from 'socket.io-client'; 
var socket = io('http://localhost:3000'); 




class Entries extends Component {
	constructor(props) {
		super();
		this.state = {
			mood: '',
			activity: '',
			journal: ''
		}
	}

	componentDidMount() {
		// socket.on('connect', function(){   
		//   console.log('connect');
		//   socket.emit('add entry', Date.now(), 'pine forest');
		  // socket.on('new entry', function(message) {
		  //   console.log('strawberry', message);
		  // });
		// });
	}

	handleSubmit = (formSubmitEvent) => {
		formSubmitEvent.preventDefault();
		this.props.sendEntry(this.state);
		this.props.changePage();
		// socket.emit('add entry', Date.now(), 'pine forest');
		// this.props.refreshData();
	}

	handleSelect = (changeEvent) => {
		this.setState({
      mood: changeEvent.target.value
    });
	}

	handleSelectA = (changeEvent) => {
		this.setState({
      activity: changeEvent.target.value
    });
	}

	handleChange = (changeEvent) => {
		this.setState({
      journal: changeEvent.target.value
    });
	}

	render() {
		return(
			<div>
		    <h1>New Entry</h1>
		    <form onSubmit={this.handleSubmit}>
		    	<fieldset>
			    	<label>Happy</label>
			    	<input type="radio" value="happy" name="mood" ref="happy" onClick={this.handleSelect}/>
			    	<label>Sad</label>
			    	<input type="radio" value="sad" name="mood" ref="sad" onClick={this.handleSelect}/>
			    	<label>Confused</label>
			    	<input type="radio" value="confused" name="mood" onClick={this.handleSelect}/>
		    	</fieldset>
		    	<br />
			    <fieldset>
			    	<label>Work</label>
			    	<input type="radio" value="work" name="activity" onClick={this.handleSelectA}/>
			    	<label>Exercise</label>
			    	<input type="radio" value="exercise" name="activity" onClick={this.handleSelectA}/>
			    	<label>Drinking</label>
			    	<input type="radio" value="drinking" name="activity" onClick={this.handleSelectA}/>
			    </fieldset>
			    <br />	
			    <textarea onChange={this.handleChange}></textarea>
			    <br />
			    <button type="submit">Submit</button>
		    </form>
		  </div>
		);
	}

}


const mapStateToProps = state => ({
  // mood: state.newentries.mood
})

const mapDispatchToProps = dispatch => bindActionCreators({
  sendEntry,
  changePage: () => push('/dashboard')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entries);
