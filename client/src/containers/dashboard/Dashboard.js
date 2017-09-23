import React, { Component }  from 'react';
import ReactDOM from "react-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { findAll } from '../../entries/newentries';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { PieChart, Pie, Sector, Cell } from 'recharts';

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];















const data01 = [
  { name: 'Group A', value: 400, v: 89 },
  { name: 'Group B', value: 300, v: 100 },
  { name: 'Group C', value: 200, v: 200 },
  { name: 'Group D', value: 200, v: 20 },
  { name: 'Group E', value: 278, v: 40 },
  { name: 'Group F', value: 189, v: 60 },
];

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];

const data03 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
  { name: 'E1', value: 200 },
  { name: 'E2', value: 34 },
  { name: 'E3', value: 44 },
  { name: 'F1', value: 89 },
  { name: 'F2', value: 49 },
  { name: 'F3', value: 51 },
];

const initilaState = { data01, data02, data03 };


















var pieData = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300}, {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class SimplePieChart  extends Component{

	constructor(props) {
		super();
		// this.state = {
		// 	mood: '',
		// 	activity: '',
		// 	journal: ''
		// }
		this.state={
		    ...initilaState
		
		}	

	}

	componentDidMount() {
		console.log(this) 
	}

	setData() {
		console.log('hi',this);
		this.setState({data01:data02})
	}
	
	render () {
  	return (
		<PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
		<Pie
		  onClick={this.setData}
		  data={this.state.data01} 
		  cx={300} 
		  cy={200} 
		  labelLine={false}
		  label={renderCustomizedLabel}
		  outerRadius={80} 
		  fill="#8884d8"
		>
			{
			data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
		  }
		</Pie>
	      </PieChart>
    );
}}

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

	setRandomBarData() {
		console.log(this);
	
	}
	render() {
		if (!this.props.entries) {
			return <div>Loading...</div>;
		}

		return(
			<div>
				<LineChart width={600} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
					<XAxis dataKey="name"/>
					<YAxis/>
					<CartesianGrid strokeDasharray="3 3"/>
					<Tooltip/>
					<Legend />
					<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
					<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
				</LineChart>

				<SimplePieChart />

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
