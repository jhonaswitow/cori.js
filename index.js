const Discord = require("discord.js")
const client = new Discord.Client()

client.on("message", (message) => {
			if(message.author.bot) return;
		})


module.exports = class Cofi {
	constructor(token) {
		this.token = token;
		this.client = client
	}

	conectar() {
		if(!this.token) throw new TypeError("Nenhum token foi definido")
		this.client.login(this.token)
	}

	//eventos

	ready({ channel: canal, code: comando }) {
		if(!canal) {
		this.client.on("ready", () => { comando })
		} else {
			let ch = this.client.channels.cache.get(canal)
			if(!ch) throw new TypeError("Canal não está no cache do bot!")
		this.client.on("ready", () => { ch.send(comando) })
		}
	}

	guildCreate({ channel: canal, code: comando }) {
		let ch = this.client.channels.cache.get(canal)
		if(!ch) throw new TypeError("Canal não está no cache do bot!")
		this.client.on("guildCreate", () => { ch.send(comando) })
	}

	guildDelete({ channel: canal, code: comando }) {
		let ch = this.client.channels.cache.get(canal)
		if(!ch) throw new TypeError("Canal não está no cache do bot!")
		this.client.on("guildDelete", () => { ch.send(comando) })
	}

	guildMemberAdd({ channel: canal, code: comando }) {
		let ch = this.client.channels.cache.get(canal)
		if(!ch) throw new TypeError("Canal não está no cache do bot!")
		this.client.on("guildMemberAdd", () => { ch.send(comando) })
	}

	guildMemberRemove({ channel: canal, code: comando }) {
		let ch = this.client.channels.cache.get(canal)
		if(!ch) throw new TypeError("Canal não está no cache do bot!")
		this.client.on("guildDelete", () => { ch.send(comando) })
	}
}
