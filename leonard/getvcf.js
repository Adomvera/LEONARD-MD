/*
░█ 
░░░░░██╗░█████╗░███████╗██╗░░░░░
░░░░░██║██╔══██╗██╔════╝██║░░░░░
░░░░░██║██║░░██║█████╗░░██║░░░░░
██╗░░██║██║░░██║██╔══╝░░██║░░░░░
╚█████╔╝╚█████╔╝███████╗███████╗
░╚════╝░░╚════╝░╚══════╝╚══════╝

███╗░░░███╗██████╗░
████╗░████║██╔══██╗
██╔████╔██║██║░░██║
██║╚██╔╝██║██║░░██║
██║░╚═╝░██║██████╔╝
╚═╝░░░░░╚═╝╚═════╝░

██████╗░░█████╗░████████╗
██╔══██╗██╔══██╗╚══██╔══╝
██████╦╝██║░░██║░░░██║░░░
██╔══██╗██║░░██║░░░██║░░░
██████╦╝╚█████╔╝░░░██║░░░
╚═════╝░░╚════╝░░░░╚═╝░░░
WHATSAPP BOT BY @joel james tech
Helpers - @joel james
        - @joel it
WHATSAPP - 255714595078
SUPPORT GROUP - https://wa.me/255714595078
Don't change this info else bot won't work by joeljames tech

*/











const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { getBuffer } = require("../framework/dl/Function");
const { default: axios } = require('axios');

const runtime = function (seconds) { 
 seconds = Number(seconds); 
 var d = Math.floor(seconds / (3600 * 24)); 
 var h = Math.floor((seconds % (3600 * 24)) / 3600); 
 var m = Math.floor((seconds % 3600) / 60); 
 var s = Math.floor(seconds % 60); 
 var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " d, ") : ""; 
 var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " h, ") : ""; 
 var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " m, ") : ""; 
 var sDisplay = s > 0 ? s + (s == 1 ? " second" : " s") : ""; 
 return dDisplay + hDisplay + mDisplay + sDisplay; 
 } 


zokou({ nomCom: 'vcf',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '📄', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_please wait..._*`) 

   


  }
);


zokou({ nomCom: 'getallmembers',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🐞', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_getting all members_*`) 

   


  }
);



zokou({ nomCom: 'channel',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '⚛️', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`https://whatsapp.com/channel/0029VakLfckBlHpYVxryFJ14`) 

   


  }
);


zokou({ nomCom: 'paircode',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🐞', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`get Session id https://Leonard-session.onrender.com/`) 

   


  }
);


zokou({ nomCom: 'update',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🏅', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_leonard md is running on its latest vision_*`) 

   


  }
);


zokou({ nomCom: 'bot',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🤖', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_bot enabled in this chat_*`) 

   


  }
);


  
zokou({ nomCom: 'gc',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🐞', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`top a link to join leonard md group https://chat.whatsapp.com/J54tT9uXXO81QLARCr7qQK`) 

   


  }
)

