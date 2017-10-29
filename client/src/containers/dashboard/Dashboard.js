import React, { Component }  from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { push } from 'react-router-redux';
import { findAll, refreshData } from '../../actions/actions';
import SimplePieChart from './SimplePieChart';
import SimpleBarChart from './SimpleBarChart';
import Log from './Log';


class Dashboard extends Component {
	constructor(props) {
		super();
	}

	componentWillMount() {
		this.props.findAll();
		this.props.refreshData();
	}


	render() {
		if (!this.props.entries) {
			return <div>Loading...</div>;
		}

		return(
			<div>
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
  barData: state.entries.barData
})

const mapDispatchToProps = dispatch => bindActionCreators({
  findAll,
  refreshData
  // changePage: () => push('/dashboard')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
