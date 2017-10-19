import React, { Component }  from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { push } from 'react-router-redux';
import { findAll, refreshData, getUser } from '../../entries/newentries';
import SimplePieChart from '../dashboard/SimplePieChart';
import SimpleBarChart from '../dashboard/SimpleBarChart';
import Log from '../dashboard/Log';


class Profile extends Component {
	constructor(props) {
		super();
	}

	componentWillMount() {
		// this.props.findAll();
		this.props.refreshData();
		this.props.getUser();
	}


	render() {
		if (!this.props.entries) {
			return <div>Loading...</div>;
		}

		return(
			<div>
				<p>this is where the name goes</p>
				<SimplePieChart pie={this.props.pieData}/>
				<SimpleBarChart bar={this.props.barData}/>
				<Log data={this.props.entries}/>
			</div>
		);
	}

}


const mapStateToProps = state => ({
  entries: state.newentries.entries,
  pieData: state.newentries.pieData,
  barData: state.newentries.barData
})

const mapDispatchToProps = dispatch => bindActionCreators({
  findAll,
  refreshData,
  getUser
  // changePage: () => push('/dashboard')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
