import {
	aprovedTotalItemsByDate,
	pendingTotalItemsByDate,
	rejectedTotalItemsByDate
} from '../utils'

export function serializeTotalItemsData(data) {
	const datesArray = ['5/1/2020', '5/2/2020', '5/3/2020']
	const totalData = datesArray.map((date) => [
		aprovedTotalItemsByDate(data, date),
		pendingTotalItemsByDate(data, date),
		rejectedTotalItemsByDate(data, date)
	])

	const dataForTotalItems = {
		labels: datesArray,
		datasets: [
			{
				label: 'Aproved',
				data: totalData[0],
				type: 'line',
				fill: false,
				borderColor: '#36A2EB',
				backgroundColor: '#36A2EB',
				pointBorderColor: '#36A2EB',
				pointBackgroundColor: '#36A2EB',
				pointHoverBackgroundColor: '#36A2EB',
				pointHoverBorderColor: '#36A2EB'
			},
			{
				label: 'Pending',
				data: totalData[1],
				type: 'line',
				fill: false,
				borderColor: '#FFCE56',
				backgroundColor: '#FFCE56',
				pointBorderColor: '#FFCE56',
				pointBackgroundColor: '#FFCE56',
				pointHoverBackgroundColor: '#FFCE56',
				pointHoverBorderColor: '#FFCE56'
			},
			{
				label: 'rejected',
				data: totalData[2],
				type: 'line',
				fill: false,
				borderColor: '#FF6384',
				backgroundColor: '#FF6384',
				pointBorderColor: '#FF6384',
				pointBackgroundColor: '#FF6384',
				pointHoverBackgroundColor: '#FF6384',
				pointHoverBorderColor: '#FF6384'
			}
		]
	}

	return dataForTotalItems
}
