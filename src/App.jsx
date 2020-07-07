import React from 'react'
import { PieChartComponent, LineChartComponent } from './components'
import styles from './App.module.scss'
import { data } from './data'
import { serializeTotalAmountData, serializeTotalItemsData } from './helpers'

const dataForTotalAmount = serializeTotalAmountData(data)
const dataForTotalItems = serializeTotalItemsData(data)

export function App() {
	return (
		<div className={styles['App']}>
			<h1 className={styles['App__title']}>Chats app</h1>
			<div className={styles['App__grid']}>
				<PieChartComponent
					data={dataForTotalAmount}
					title="Suma de total amount por status"
				/>
				<LineChartComponent
					data={dataForTotalItems}
					title="Suma total de items por fecha y status"
				/>
			</div>
		</div>
	)
}
