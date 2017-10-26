import React, { Component }  from 'react';
import { sendEntry } from '../../entries/newentries';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class Entries extends Component {
	constructor(props) {
		super();
		this.state = {
			mood: '',
			activity: '',
			journal: '',
			date: '',
			location: {
				lat: '',
				long: ''
			}
		}
	}

	handleSubmit = (formSubmitEvent) => {
		formSubmitEvent.preventDefault();
		let entry = this.state;
		entry.date = Date.now();
		let t = this;
		console.log(this.props._id);
		entry.userId = this.props.user._id;
		//not the best implementation, revisit this
	  if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function(position) {
	    	console.log(position);
	    	console.log(position.coords);
	    	entry.location.lat = position.coords.latitude;
	    	entry.location.long = position.coords.longitude;
	    	t.props.sendEntry(entry);
				t.props.changePage();
	    });
	  } else {
	  	t.props.sendEntry(entry);
			t.props.changePage();
	  }
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
		    <p>Hello, {this.props.user.username}</p>
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
  user: state.newentries.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
  sendEntry,
  changePage: () => push('/dashboard')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entries);
