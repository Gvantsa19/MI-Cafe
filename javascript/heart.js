let hearts = document.querySelectorAll('.far');

for (let i = 0; i < hearts.length; i += 1) {
    let heart = hearts[i];
    heart.onclick = function () {
        if (this.classList.contains("block")) {
			this.classList.add("rotated");
			this.classList.remove("block");
		}
		else {
			this.classList.add("block");
			this.classList.remove("rotated");
		}
    };
}
