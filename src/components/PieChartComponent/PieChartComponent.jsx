import React from 'react'
import { Pie } from 'react-chartjs-2'
import styles from '../../scss/components/Chart.module.scss'

export function PieChartComponent({ data, title }) {
	return (
		<div className={styles['Chart']}>
			<h3 className={styles['Chart__title']}>{title}</h3>
			<Pie data={data} />
		</div>
	)
}
