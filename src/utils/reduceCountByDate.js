import { filterAproved, filterPending, filterRejected } from './filterByState'

export function aprovedTotalItemsByDate(data, date) {
	const filteredData = filterAproved(data)

	const mapReduce = filteredData
		.filter((current) => current.creationDate === date)
		.map((current) => current.totalItems)
		.reduce((acum, current) => acum + current, 0)

	return mapReduce
}

export function pendingTotalItemsByDate(data, date) {
	const filteredData = filterPending(data)

	const mapReduce = filteredData
		.filter((current) => current.creationDate === date)
		.map((current) => current.totalItems)
		.reduce((acum, current) => acum + current, 0)

	return mapReduce
}

export function rejectedTotalItemsByDate(data, date) {
	const filteredData = filterRejected(data)

	const mapReduce = filteredData
		.filter((current) => current.creationDate === date)
		.map((current) => current.totalItems)
		.reduce((acum, current) => acum + current, 0)

	return mapReduce
}
