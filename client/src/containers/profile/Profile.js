import React, { Component }  from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { push } from 'react-router-redux';
import { findAll, refreshData, getUser } from '../../actions/actions';
import SimplePieChart from '../dashboard/SimplePieChart';
import SimpleBarChart from '../dashboard/SimpleBarChart';
import Log from '../dashboard/Log';


class Profile extends Component {
	constructor(props) {
		super();
	}

	componentWillMount() {
		// this.props.findAll();
		console.log(this.props);
		console.log(this.state);
		this.props.getUser();
		this.props.refreshData();
	}


	render() {
		if (!this.props.entries) {
			return <div>
				<p>{this.props.user.username}</p>
				
				Loading...</div>;
		}

		return(
			<div>
				<p>{this.props.user.username}</p>
				<SimplePieChart pie={this.props.pieData}/>
				<SimpleBarChart bar={this.props.barData}/>
				<Log data={this.props.entries}/>
			</div>
		);
	}

}


const mapStateToProps = state => ({
  entries: state.entries.entries,
  pieData: state.entries.pieData,
  barData: state.entries.barData,
  user: state.entries.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
  findAll,
  refreshData,
  getUser,
  // changePage: () => push('/profile')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
