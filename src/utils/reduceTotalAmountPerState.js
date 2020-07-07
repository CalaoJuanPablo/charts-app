export function approvedReduce(data) {
	const mapReduce = data
		.filter((current) => current.status === 'APPROVED')
		.map((current) => current.totalAmount)
		.reduce((acum, current) => acum + current)
		.toFixed(2)

	return Number(mapReduce)
}

export function pendingReduce(data) {
	const mapReduce = data
		.filter((current) => current.status === 'PENDING')
		.map((current) => current.totalAmount)
		.reduce((acum, current) => acum + current)
		.toFixed(2)

	return Number(mapReduce)
}

export function rejectedReduce(data) {
	const mapReduce = data
		.filter((current) => current.status === 'REJECTED')
		.map((current) => current.totalAmount)
		.reduce((acum, current) => acum + current)
		.toFixed(2)

	return Number(mapReduce)
}
