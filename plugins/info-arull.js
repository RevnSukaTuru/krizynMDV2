let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : REVAN
║│➸ ```UMUR``` : Private
║│➸ ```ASAL``` : ACEH
║│➸ ```OFFICIAL GRUP``` :
https://chat.whatsapp.com/H6AeFd5BKNcIa6uErFxoTZ
║│➸ ```INSTAGRAM``` : http://instagram.com/vanzzxyt_official
║│➸ ```WHATSAPP``` : http://wa.me/6285822347348
╰────────❉
`.trim(), m)
}

handler.help = ['inforevan]
handler.tags = ['main', 'utama']
handler.command = /^(infoarull|inforozi)$/i

handler.exp = 150

module.exports = handler
