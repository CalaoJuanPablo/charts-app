import {
	approvedTotalAmount,
	pendingTotalAmount,
	rejectedTotalAmount
} from '../utils'

export function serializeTotalAmountData(data) {
	const totalApproved = approvedTotalAmount(data)
	const totalPending = pendingTotalAmount(data)
	const totalRejected = rejectedTotalAmount(data)

	const dataForTotalAmount = {
		labels: ['Approved', 'Pending', 'Rejected'],
		datasets: [
			{
				data: [totalApproved, totalPending, totalRejected],
				backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
				hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#FF6384']
			}
		]
	}

	return dataForTotalAmount
}
