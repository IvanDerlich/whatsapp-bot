const {
    createBot,
    createProvider,
    createFlow,
    addKeyword,
  } = require("@bot-whatsapp/bot");
  
  const QRPortalWeb = require("@bot-whatsapp/portal");
  const BaileysProvider = require("@bot-whatsapp/provider/baileys");
  const MockAdapter = require("@bot-whatsapp/database/mock");
  
  
  const flowSiguiente = addKeyword(['4', 'siguiente']).addAnswer(['🔜 Avanzando...']);
  
  
  const flowLinkedIn = addKeyword(["1"]).addAnswer([
    "🤝 Conéctate conmigo en LinkedIn",
    "https://www.linkedin.com/in/maia-doroshenko/",
    "\n*4 Para siguiente paso.",
  ]);
  
  const flowGitHub = addKeyword(["2"]).addAnswer([
    "👨‍💻 Encuéntrame en GitHub",
    "https://github.com/MaiaDoroshenko",
    "\n*4* Para siguiente paso.",
  ]);
  
  const flowWeb = addKeyword(["3"]).addAnswer([
    "🌐 Visita mi sitio web",
    "http://maiadoroshenko.com/",
    "\n*4* Para siguiente paso.",
  ]);
  
  
  
  const flowPrincipal = addKeyword(["hola", "ole", "alo"])
    .addAnswer("🤖 👋 Hola bienvenido a este *Chatbot* ,  '👋 ¡Saludos! Soy Maia Doroshenko, soy *backend Developer*, y te doy la bienvenida.' ")
    .addAnswer(
      [
        "Permíteme compartirte información sobre mí y mis perfiles en línea:",
        "Ingresa el número de la opción que desees:",
        " 1️⃣  *linkedin* para conectarte en LinkedIn💻",
         "2️⃣  *github* para encontrar mi perfil de GitHub 🔗",
         "3️⃣  *web* para visitar mi sitio web 🌐",
      ],
      null,
      null,
      [flowLinkedIn, flowGitHub, flowWeb,flowSiguiente]
    );
  
  
  
  const main = async () => {
    const adapterDB = new MockAdapter();
    const adapterFlow = createFlow([flowPrincipal]);
    const adapterProvider = createProvider(BaileysProvider);
  
    createBot({
      flow: adapterFlow,
      provider: adapterProvider,
      database: adapterDB,
    });
  
    QRPortalWeb();
  };
  
  main();
  