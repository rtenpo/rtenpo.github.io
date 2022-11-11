/** @format */

const textArea = document.getElementById("text");
const sendBtn = document.getElementById("submitButton");

textArea.style.cssText = ` height: ${textArea.scrollHeight}px;
                           overflow-y: hidden; `;

textArea.addEventListener("input", function () {
	this.style.height = `max(${this.scrollHeight}px , 3rem)`;
	this.style.transition = "height 0.1s";
});

sendBtn.addEventListener("click", () => {
	Email.send({
		Host: "smtp.elasticemail.com",
		Username: "benariba28@gmail.com",
		Password: "706343DEE8B32D1F1093B3F6C5F18CD2D677",
		To: "benariba28@gmail.com",
		From: `${document.getElementById("email").value}`,
		Subject: `RT-enpo: from ${document.getElementById("name").value} (class:${
			document.getElementById("year").value
		} ${document.getElementById("specialty").value} )`,
		Body: `${document.getElementById("text").value}`,
	})
		.then((msg) => console.log(msg))
		.catch((err) => console.log(err));
});
