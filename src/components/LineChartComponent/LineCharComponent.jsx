import React from 'react'
import { Line } from 'react-chartjs-2'
import styles from '../../scss/components/Chart.module.scss'

export function LineChartComponent({ data, title }) {
	return (
		<div className={styles['Chart']}>
			<h3 className={styles['Chart__title']}>{title}</h3>
			<Line data={data} />
		</div>
	)
}
