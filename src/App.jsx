import React from 'react'
import { PieChartComponent } from './components'
import './App.scss'
import { data } from './data'
import { approvedReduce, pendingReduce, rejectedReduce } from './utils'

const totalApproved = approvedReduce(data)
const totalPending = pendingReduce(data)
const totalRejected = rejectedReduce(data)

const dataForPieChart = {
	labels: ['Approved', 'Pending', 'Rejected'],
	datasets: [
		{
			data: [totalApproved, totalPending, totalRejected],
			backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
			hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#FF6384']
		}
	]
}

export function App() {
	return (
		<div className="App">
			<h1 className="App__title">Chats app</h1>
			<PieChartComponent data={dataForPieChart} />
		</div>
	)
}
