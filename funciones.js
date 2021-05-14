const pintar = (idButton, indexButton) => {
		const {id} = idButton;
		const {ind} = indexButton;
		document.getElementById(id).classList.toggle("clicked")
}