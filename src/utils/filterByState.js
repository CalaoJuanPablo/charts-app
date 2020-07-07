export function filterAproved(data) {
	const filteredData = data.filter((current) => current.status === 'APPROVED')

	return filteredData
}

export function filterPending(data) {
	const filteredData = data.filter((current) => current.status === 'PENDING')

	return filteredData
}

export function filterRejected(data) {
	const filteredData = data.filter((current) => current.status === 'REJECTED')

	return filteredData
}
