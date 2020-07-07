import React from 'react'
import { Pie } from 'react-chartjs-2'

export function PieChartComponent({ data }) {
	return <Pie data={data} />
}
