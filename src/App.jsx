import React from 'react'
import { Pie } from 'react-chartjs-2'
import './scss/init.scss'
import { data } from './data'
import { approvedReduce, pendingReduce, rejectedReduce } from './utils'

const totalApproved = approvedReduce(data)
const totalPending = pendingReduce(data)
const totalRejected = rejectedReduce(data)

const dataForChart = {
	labels: ['Approved', 'Pending', 'Rejected'],
	datasets: [
		{
			data: [totalApproved, totalPending, totalRejected],
			backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
			hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
		}
	]
}

export function App() {
	return (
		<>
			<h1>Pie Example</h1>
			<Pie data={dataForChart} />
		</>
	)
}
