import { filterAproved, filterPending, filterRejected } from './filterByState'

export function approvedTotalAmount(data) {
	const filteredData = filterAproved(data)

	const mapReduce = filteredData
		.map((current) => current.totalAmount)
		.reduce((acum, current) => acum + current, 0)
		.toFixed(2)

	return Number(mapReduce)
}

export function pendingTotalAmount(data) {
	const filteredData = filterPending(data)

	const mapReduce = filteredData
		.map((current) => current.totalAmount)
		.reduce((acum, current) => acum + current, 0)
		.toFixed(2)

	return Number(mapReduce)
}

export function rejectedTotalAmount(data) {
	const filteredData = filterPending(data)

	const mapReduce = filteredData
		.map((current) => current.totalAmount)
		.reduce((acum, current) => acum + current, 0)
		.toFixed(2)

	return Number(mapReduce)
}
