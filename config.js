import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

global.owner = [['22899869601', 'SCP•hells•Ichigo', true], ['22896870256', 'Israfel', true], ['']] //Number of owners

//global.pairingNumber = "" //put your bot number here

global.mods = ['22896870256', '22899869601']
global.prems = ['22899869601', '22896870256']
global.allowed = ['2286870256', '22899869601']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = [
  '29d4b59a4aa687ca',
  '5LTV57azwaid7dXfz5fzJu',
  'cb15ed422c71a2fb',
  '5bd33b276d41d6b4',
  'HIRO',
  'kurrxd09',
  'ebb6251cc00f9c63',
]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = {
  // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
}
global.APIKeys = {
  // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
}

// Sticker WM
global.botname = '𓆩☀️『🪶❦𝐊𝐮𝐫𝐨𝐬𝐚𝐤𝐢✘🪽』🌙𓆪'
global.premium = 'true'
global.packname = '𓆩❦𝕾𝕮𝕻ꕥ𓆪『🪶Foundation🪽』'
global.author = '@⁨ད𓆩☀️𝕴𝖘𝖗𝖆𝖋𝖊𝖑•𝕲𝖗𝖎𝖓𝖇𝖊𝖗𝖞𝖆𝖑𝖑🌙𓆪ཌ⁩'
global.menuvid = 'https://files.fm/u/djvwwqaqkh'
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/guru.json\n'
global.dygp = 'https://chat.whatsapp.com/EC7bZxZ9CK97fYOYMXmzlV'
global.fgsc = 'https://github.com/Itsmeji/Kurosaki-Hells-Bot'
global.fgyt = 'https://youtube.com/@Asliguru'
global.fgpyp = 'https://youtube.com/@Asliguru'
global.fglog = 'https://raw.githubusercontent.com/Guru322/api/Guru/guru.jpg'
global.thumb = fs.readFileSync('./Assets/Gurulogo.jpg')

global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌'
global.xmoji = '🔥'

global.multiplier = 69
global.maxwarn = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
