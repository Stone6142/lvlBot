module.exports = {
    name: 'credits',
    description: 'Shows the credits',
    execute(message, args, Discord) {
      const chawiEmbed = new Discord.MessageEmbed()
        .setTitle('Stone')
        .setDescription("Lead Developer")
        .addField("GitHub", "[Stone6142](https://github.com/stone6142)", true)
        .setThumbnail("https://images-ext-2.discordapp.net/external/wJjqJ1zDQJ_MhPA8lx1yXTTAvXRUJsvREmcqFkmVOpI/https/cdn.discordapp.com/avatars/762935989512437800/df35556c0b6d86dc4b755bdb03aa3006.webp")
        .setTimestamp()
        .setFooter('Stone#6142')
        .setColor('RANDOM')

      message.channel.send(chawiEmbed);
    }
  }
