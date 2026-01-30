const {
	util: { getFiber, reactFiberWalker, log },
} = shelter;
const { subscribe } = shelter.plugin.scoped.flux;

export function onLoad() {
	// you can safely run onLoad actions at the top level!
	log("Hello, World from shelter!")
}

function handleDispatch(payload) {
	const message = reactFiberWalker(getFiber(payload.contextMenu.target.offsetParent), "message", true)?.pendingProps?.message;
	if (message?.attachments?.[0]?.url) {
		const att = message.attachments[0];
		if (att.content_type === "text/plain; charset=utf-8" &&
			att.filename.endsWith(".plist") || att.filename.endsWith(".txt")
		) {
			fetch(att.url).then(res => {
			if (!res.ok) {
				log(res)
				log("err")
			} else {
				res.text().then(data => {
					fetch("https://occr.recycledplist.space/api/v1/check", {
						method: "POST",
						body: data
					}).then(res => {
						res.text().then(data => {
							payload.contextMenu.target.childNodes[1].firstChild.firstChild.firstChild.firstChild.firstChild.innerText = data
						});
					});
				});
			}
			});
		}
	}
}

subscribe("CONTEXT_MENU_OPEN", handleDispatch);