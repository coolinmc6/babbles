export const removeLike = (list, id) => {
	console.log(list)
	const removeIndex = list.findIndex(item => item.likeID === id)
	console.log('removeLike')
	return [
		...list.slice(0, removeIndex),
		...list.slice(removeIndex+1)
	]
}