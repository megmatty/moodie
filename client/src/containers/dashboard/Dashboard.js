import React, { Component }  from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { push } from 'react-router-redux';
import { findAll, refreshData } from '../../entries/newentries';
import SimplePieChart from './SimplePieChart';
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
				<Log data={this.props.entries}/>
			</div>
		);
	}

}


const mapStateToProps = state => ({
  entries: state.newentries.entries,
  pieData: state.newentries.pieData
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
