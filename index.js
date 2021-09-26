const { Client, Collection, MessageEmbed } = require("discord.js")
const client = new Client()

 module.exports = class even {
	constructor({ token: token, prefix: prefix }) {
		this.token = token;
		this.client = client;
		this.prefix = prefix;
		this.embed = new MessageEmbed;
		this.args = `"a"`
	}

	conectar() {
		if(!this.token) throw new TypeError("Nenhum token foi definido")
		this.client.login(this.token)
}

	ready({ channel: canal, code: comando }) {
		if(!canal) {
		client.on("ready", () => { comando })
		} else {
		client.on("ready", () => { client.channels.cache.get(canal).send(comando) })
		}
	}

	guildCreate({ channel: canal, code: comando }) {
		let ch = this.client.channels.cache.get(canal)
		this.client.on("guildCreate", () => { ch.send(comando) })
	}

	guildDelete({ channel: canal, code: comando }) {
		let ch = this.client.channels.cache.get(canal)
		this.client.on("guildDelete", () => { ch.send(comando) })
	}

	guildMemberAdd({ channel: canal, code: comando }) {
		let ch = this.client.channels.cache.get(canal)
		this.client.on("guildMemberAdd", () => { ch.send(comando) })
	}

	guildMemberRemove({ channel: canal, code: comando }) {
		let ch = this.client.channels.cache.get(canal) || false
		this.client.on("guildMemberRemove", (member) => {
			ch.send(comando)
			})
	}

	createEmbed({ name: nome, author: author, title: title, color: color, description: description, addField: [nome1, valor, oq], thumbnail: thumb, footer: footer  }) {
		if(title) this.embed.setTitle(title)
		if(description) this.embed.setDescription(description)
		if(color) this.embed.setColor(color)
		if(nome1) this.embed.addField(nome1, valor, oq)
		if(thumb) this.embed.setThumbnail(thumb)
		if(footer) this.embed.setFooter(footer)

		this[nome] = this.embed
	}
	
 createCommand({ name: nome, aliases: aliases, code: comando, embed: name }) {
		client.on("message", async message => {

			if(message.content.toLowerCase().startsWith(this.prefix + nome) || message.content.startsWith(this.prefix + aliases)) {
				 return message.channel.send(comando)
			}
		})
	}
}
