// number of years of experience
const diff = new Date().getTime() - new Date('2019.01.15').getTime()

function getYears(diff: number) {
	const seconds = Math.floor(diff / 1000),
		minutes = Math.floor(seconds / 60),
		hours = Math.floor(minutes / 60),
		days = Math.floor(hours / 24),
		years = Math.floor(days / 365)
	return years
}

export default getYears(diff)
