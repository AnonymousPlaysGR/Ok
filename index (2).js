const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1099642415754776628')
        .setType('PLAYING')
        .setURL('https://www.youtube.com/channel/UCYvGMEkXftp8u6El8HyVayw')
        .setState('Join my Discord Server')
        .setName('AnonymousPlaysGR')
        .setDetails('Check my SocialMedia')
        .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1176952548545003660/1193000441647202334/standard_2.gif?ex=65bd943e&is=65ab1f3e&hm=88c235a04decc647476098fdab96029dc44ee91d7d239f59cc917aaf9a8926d1&')
        .setAssetsLargeText('APGR')
        .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1140101823227773040/1185292563821895720/kmc_20231215_003405.png?ex=65c673b8&is=65b3feb8&hm=936ad8af1ac90ec1ce96c4dc6005231fe5f3b6caa63b5db3c9838d24fee557c2& ')
        .setAssetsSmallText('APGR')
        .addButton('YouTube', 'https://youtube.com/@apgr.?si=hYWu_7NHMI2pmSqK')
        .addButton('Discord', 'https://discord.com/invite/nMmPSHH8S8');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'idle' });
});

client.login(process.env.TOKEN);












