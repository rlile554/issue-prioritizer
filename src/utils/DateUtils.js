export const getTextTimeframe = (dateTime, now) => {
	const distance = Math.abs((now - dateTime));
	const min =  Math.floor(distance / (1000 * 60))
	const hours = Math.floor(distance / (1000 * 60 * 60))
	const days = Math.floor(distance / (1000 * 60 * 60 * 24)) 
	const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365))
	if(years >= 1){
		return (`${years} year${isPlural(years) ? 's' : ''} ago`);
	} else if (days >= 1){
		return (`${days} day${isPlural(days) ? 's' : ''} ago`)
	} else if (hours >= 1) {
		return (`${hours} hour${isPlural(hours) ? 's' : ''} ago`);
	} else if(min >= 1) {
		return (`${min} minute${isPlural(min) ? 's' : ''} ago`);
	} else return 'less than 1 min ago';
}

const isPlural = (number) => {
	return number > 1;
};