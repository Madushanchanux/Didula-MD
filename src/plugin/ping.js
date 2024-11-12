
import config from '../../config.cjs';

const checkPing = async (m, gss) => {
    const prefix = config.PREFIX;
    const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

    if (cmd === 'ping') {
        try {
            const startTime = Date.now();
            await m.reply('Pinging...');
            const endTime = Date.now();
            const ping = endTime - startTime;

            await m.reply(`Pong! 🏓\nPing: ${ping} ms`);
            await m.React("✅");
        } catch (error) {
            console.error('Error checking ping:', error);
            m.reply('Error checking ping.');
            await m.React("❌");
        }
    }
};

export default checkPing;
