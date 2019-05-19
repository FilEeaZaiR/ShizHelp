//Base bot discord :
const Discord = require('discord.js');

const client = new Discord.Client();

//Variables :

var prefix = "*";

//Login + connexion du bot :
client.login(process.env.TOKEN);

client.on("ready", () => {
	console.log("Connexion en cours ...");
    	setInterval(function() {

        	var statut = [
          	`ShiZhelp el bot`, 
            `FilEeaZaiR Is my bae`,
            'You see this text change Owo',
          	`${client.users.size} users`];
    
        	var random = Math.floor(Math.random()*(statut.length));
    
        	client.user.setPresence({ 
            		game: { 
            		name: statut[random],
            		type: 0
          		}
        	});
      }, 30000); 
});

client.on("guildMemberAdd", member => {

    const logs = member.guild.channels.find(m => m.id === "559020272351444993");
    if (!logs) return;

    logs.send({
        embed: {
            color: 0xFE6F01,
            author: {
                name: member.user.tag,
                icon_url: member.user.displayAvatarURL
            },
            title: ":flag_fr: Bienvenue a toi sur le server communautaire de ShiZyuu !",
            description: "Sur ce server tu retrouveras plusieurs catégorie :",
            fields: [
            {
                name: "1ère : Shizyuu",
                value: `Cette zone est dédiée au créateur de ce server : ShiZyuu\nTu pourras faire ta commande , savoir qui est avant toi / après toi et tu retrouveras finalement toutes mes créations dans le dernier salon!`,
                inline: true
            },
            {
                name: `2ème : Createurs`,
                value: 'Cette zone est dédiée au talentueux créateurs ou tu pourras : Commander\nVoir leurs boulot et savoir ou en est ta commande ( ce seras un channel en commun pour TOUS les créateurs )\n ils pouront aussi créer leurs market pour vendre leurs oeuvres',
                inline: false
            },
            {
                name: `3ème : Graphiste`,
                value: 'Ici tu pourras avoir : des effets ,des conseils , des musiques pour travailler proposer par la communautée et moi même ^^',
                inline: false
            },
            {
                name: `4ème :  Combat de Créateur`,
                value: 'Ici ce sera pour les duels entre créateurs pour gagner des récompenses diverses et variée',
                inline: false
            },
            {
                name: `5ème : Grade`,
                value: 'Tu pourras demander un rôle pour : Les commandes / Les créateurs',
                inline: false
            },
            {
                name: `Pour savoir mes commandes et en savoir plus sur le serveur fais *help et *bot`,
                value: 'Sur ce bonne journée en espérant que tu reste !!',
                inline: false
            }],
            timestamp: new Date(),
            footer: {
                text: `ID : ${member.user.id} | FilEeaZaiR#1258`,
            }
        }
    });

    logs.send({
        embed: {
            color: 0xFE6F01,
            author: {
                name: member.user.tag,
                icon_url: member.user.displayAvatarURL
            },
            title: `:flag_gb:  Welcome to you ${member.user.tag} on ShiZyuuu Community Server!`,
            description: "On this server you will find several categories :",
            fields: [
            {
                name: "1st: Shizyuu",
                value: `This area is dedicated to the creator of this server: ShiZyuu\nYou will be able to make your order, know who is before you / after you and you will finally find all my creations in the last channel!`,
                inline: true
            },
            {
                name: `2nd: Creators`,
                value: 'This area is dedicated to the talented creators where you can: Order\nSee their work and know where your order is ( it will be a common channel for ALL creators)\nthey will also be able to create their markets to sell their works',
                inline: false
            },
            {
                name: `3rd : Graphism`,
                value: 'Here you can have: effects, advice, music to work on, proposed by the community and myself ^^',
                inline: false
            },
            {
                name: `4th : Creator Contest`,
                value: 'Here it will be for duels between creators to win various and varied awards',
                inline: false
            },
            {
                name: `5th : Grade`,
                value: 'You can ask for a role for: Orders / Creators',
                inline: false
            },
            {
                name: `To know my orders and to know more about the server do *help and *bot`,
                value: 'have a nice day and hope you will stay!',
                inline: false
            }],
            timestamp: new Date(),
            footer: {
                text: `ID : ${member.user.id} | FilEeaZaiR#1258`,
            }
        }
    });
});

//Début des commandes help :
client.on(`message`, message =>{

    //Commande help générale :
    if(message.content === prefix + "help" || message.content === prefix + "aide") {    
        console.log(`Un utilisateur viens de faire la commande help !`)
        message.channel.send({
            embed: {
                color: 0xFE6F01,
                title: ":robot: Voici mes catégories d'aide !",
                description: "Voici mes commandes disponible : (préfix : **" + prefix +"**)" ,
                thumbnail: {
                            url: message.author.displayAvatarURL
                },
                fields: [
                {
                    name: ":flag_fr: Français",
                    value: "`ShiZyuu`, `Bot`, `Orders`, `Soon`",
                    inline: false
                },
                {
                    name: ":flag_gb: English",
                    value: "`ShiZyuu`, `Bot`, `Orders`, `Soon`",
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    text: `ShiZHelp | FilEeaZaiR#1258`,
                }
            }
        });
    };

});

client.on(`message`, message =>{

    if(message.content === prefix + "ShiZyuu") {
        message.channel.send({
            embed: {
                color: 0xFE6F01,
                title: "It's me ^^",
                fields: [
                {
                    name: ":flag_fr: Français",
                    value: "Bonjour ! Mon pseudonyme est ShiZyuu , j'ai 13 ans et je me suis lancer dans le graphisme il n'y a pas très longtemps ( fin 2018 ) pour le moment je suis gratuit car je n'ai pas le niveaux d'être payant ^^. Tu peux aller dans le channel <#559017975655694362> pour faire me faire commande!\nPasse une bonne journée",
                    inline: true
                },
                {
                    name: ":flag_gb: English",
                    value: "Hello! Hello! My nickname is ShiZyuuu, I am 13 years old and I started working in graphic design not long ago (end of 2018) for the moment I am free because I don't have the level to be paid ^^. You can go to the <#559017975655694362> channel to make me order!\nHave a nice day",
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    text: `ShiZyuu | FilEeaZaiR#1258`,
                }
            }
        });
    }

    if(message.content === prefix + "Bot") {
        message.channel.send({
            embed: {
                color: 0xFE6F01,
                title: "Are we talking about the bot ? ^^",
                fields: [
                {
                    name: ":flag_fr: Français",
                    value: "Ce bot a été creer par FilEeaZaiR un grand merci a lui !!!!",
                    inline: true
                },
                {
                    name: ":flag_gb: English",
                    value: "This bot was created by FilEeaZaiR a big thank you to him!!!!!!",
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    text: `ShiZBot | FilEeaZaiR#1258`,
                }
            }
        });
    }

    if(message.content === prefix + "Orders") {
        message.channel.send({
            embed: {
                color: 0xFE6F01,
                title: "An Order ??",
                fields: [
                {
                    name: ":flag_fr: Français",
                    value: "Si tu veux commander un logo va dans ma catégorie et <#559017975655694362> sinon va dans la catégorie Creators",
                    inline: true
                },
                {
                    name: ":flag_gb: English",
                    value: "If you want to order a logo go to my category and <#559017975655694362> otherwise go to the Creators category",
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    text: `ShiZOrders | FilEeaZaiR#1258`,
                }
            }
        });
    }

    if(message.content === prefix + "Soon") {
        message.channel.send({
            embed: {
                color: 0xFE6F01,
                title: "Prochainement ^^ / Soon ^^",
                fields: [
                {
                    name: ":flag_fr: Français",
                    value: "Prochaines commandes, bientôt",
                    inline: false
                },
                {
                    name: ":flag_gb: English",
                    value: "Next commands, soon",
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    text: `ShiZOrders | FilEeaZaiR#1258`,
                }
            }
        });
    }
});