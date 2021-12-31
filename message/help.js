const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `*── 「 ${setting.botName} - MD Beta 」 ──*
	
  _*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_

    Library : *Baileys-MD*.
    Prefix : ( ${prefix} )
    Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
    Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}

	Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
	Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
	Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
	Balance : $${toCommas(getBalance(sender, balance))}
  Note : Anggap _<>_ *Tidak Ada*
  
  ›› *Main Menu* ‹‹
  ≻ ${prefix}menu
  ≻ ${prefix}owner
  ≻ ${prefix}donasi
  ≻ ${prefix}speed
  ≻ ${prefix}runtime
  ≻ ${prefix}cekprem
  ≻ ${prefix}listprem

  ›› *Feature Convert* ‹‹
  ≻ ${prefix}stiker <ReplyGambar/Caption>
  ≻ ${prefix}toimg <ReplyStiker>
  ≻ ${prefix}tovid <ReplyStiker>

  ›› *Feature Downloader* ‹‹
  ≻ ${prefix}play <Querry>
  ≻ ${prefix}tiktok <LinkTt>
  ≻ ${prefix}ytmp4 <LinkYt>
  ≻ ${prefix}ytmp3 <LinkYt>
  ≻ ${prefix}getvideo
  ≻ ${prefix}getmusic
  ≻ ${prefix}instagram <LinkIg>
  ≻ ${prefix}facebook <LinkFb>
  
  ›› *Feature Random* ‹‹
  ≻ ${prefix}quote
  ≻ ${prefix}cecan
  ≻ ${prefix}cogan
  ≻ ${prefix}naruto
  ≻ ${prefix}loli
  ≻ ${prefix}waifu
  ≻ ${prefix}husbu
  ≻ ${prefix}yaoi
  
  ›› *Feature Search* ‹‹
  ≻ ${prefix}lirik <Judul>
  ≻ ${prefix}grupwa <Pencarian>
  ≻ ${prefix}ytsearch <Pencarian>
  ≻ ${prefix}pinterest <Querry>
  
  ›› *Game Menu* ‹‹
  ≻ ${prefix}tictactoe @tag
  ≻ ${prefix}delttc
  ≻ ${prefix}tebakgambar
  
  ›› *Payment & Bank* ‹‹
  ≻ ${prefix}buylimit <Jumlah>
  ≻ ${prefix}buyglimit <Jumlah>
  ≻ ${prefix}transfer @tag <jumlah>
  ≻ ${prefix}limit
  ≻ ${prefix}balance
  ≻ ${prefix}topbalance
  
  ›› *Feature Maker* ‹‹
  ≻ ${prefix}glitch <Text>
  ≻ ${prefix}neon <Text>
  ≻ ${prefix}black <Text>
  ≻ ${prefix}glitch <Text>
  ≻ ${prefix}fiction <Text>
  ≻ ${prefix}blackpink <Text>
  ≻ ${prefix}neonlight <Text>
  ≻ ${prefix}toxic <Text>
  ≻ ${prefix}matrix <Text>
  ≻ ${prefix}neonpl <Text>
  ≻ ${prefix}breakwall <Text>
  ≻ ${prefix}grafity <Text> <Text>
  ≻ ${prefix}grafity2 <Text> <Text>
  ≻ ${prefix}gameover <Text> <Text>
  ≻ ${prefix}glitchtt <Text> <Text>
  ≻ ${prefix}pornhub <Text> <Text>
  ≻ ${prefix}wolflogo <Text> <Text>

  ›› *Feature Only Group* ‹‹
  ≻ ${prefix}linkgrup
  ≻ ${prefix}setppgrup
  ≻ ${prefix}setnamegc
  ≻ ${prefix}setdesc
  ≻ ${prefix}group <Open/Close>
  ≻ ${prefix}revoke
  ≻ ${prefix}hidetag <Text>
  
  ›› *Feature Only Owner* ‹‹
  > evalcode
  x evalcode-2
  $ executor
  ≻ ${prefix}setppbot
  ≻ ${prefix}exif
  ≻ ${prefix}leave
  ≻ ${prefix}addprem
  ≻ ${prefix}delprem

  *THANKS TO*
  - Riyan
  - Arasya
  - Xyann`
}
