import React, { Component }  from 'react';
import ReactDOM from "react-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { findAll } from '../../entries/newentries';
import Pie from './PieChart';

class Dashboard extends Component {
	constructor(props) {
		super();
		// this.state = {
		// 	mood: '',
		// 	activity: '',
		// 	journal: ''
		// }

	}

	componentDidMount() {
		this.props.findAll();
	}


	render() {
		if (!this.props.entries) {
			return <div>Loading...</div>;
		}

		return(
			<div>
				<Pie />
			  <h1>Dashboard</h1>
			  <div>
			  	{this.props.entries.map((entry, i) => (
			  		<div key={i}>
				  		<div>{entry.mood}</div>
				  		<div>{entry.activity}</div>
				  		<div>{entry.journal}</div>
				  		<hr />
			  		</div>
			  	))}
			  </div>
		  </div>
		);
	}

}

// export default Dashboard;

const mapStateToProps = state => ({
  entries: state.newentries.entries
})

const mapDispatchToProps = dispatch => bindActionCreators({
  findAll
  // changePage: () => push('/dashboard')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
