export const removeLike = (list, id) => {
	console.log(list)
	const removeIndex = list.findIndex(item => item.likeID === id)
	console.log('removeLike')
	return [
		...list.slice(0, removeIndex),
		...list.slice(removeIndex+1)
	]
}

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete});

export const toggleLikeHelper = (like) => ({...like, liked: !like.liked})



export const findByID = (id, list) => list.find(item => item.id === id)

export const findBabbleByID = (id, babbles) => babbles.find(babble => babble.id === id)