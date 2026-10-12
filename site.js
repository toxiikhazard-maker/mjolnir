// Byt till den e-postadress som ska ta emot kontaktformulärets meddelanden.
const contactFormEmail = "kontakt@mjolnirpc.se";

// Redigera prislistan här: ändra titel, artiklar, priser, noter eller paket-innehåll.
const priceListData = [
  {
    category: "Felsökning & Diagnostik",
    items: [
      { name: "Grund felsökning", detail: "Mjukvara & hårdvara", price: "399 kr" },
      { name: "Avancerad felsökning", detail: "Krascher, BSOD, intermittenta fel", price: "699 kr" },
      { name: "Felsökning av nätaggregat, moderkort, CPU", price: "799 kr" },
      { name: "Felsökning på plats", detail: "Hemma hos kund", price: "499 kr första timmen, därefter 399 kr/tim" }
    ]
  },
  {
    category: "Datorbyggnation & Uppgraderingar",
    note: "Komponenter ingår inte i priset.",
    items: [
      { name: "Full datorbyggnation", price: "1 499 kr" },
      { name: "Montering av enskild komponent", price: "399 kr" },
      { name: "Uppgradering av GPU/CPU/RAM/SSD", price: "399-599 kr" },
      { name: "BIOS-uppdatering", price: "299 kr" },
      { name: "Byte av kylpasta", price: "299 kr" }
    ]
  },
  {
    category: "Rengöring & Underhåll",
    items: [
      { name: "Standardrengöring", detail: "Damm, fläktar, filter", price: "400 kr" },
      { name: "Djupgående rengöring", detail: "Nedmontering + full rengöring", price: "700 kr" },
      { name: "Rengöring av bärbar dator", detail: "Inkl. kylsystem", price: "600 kr" },
      { name: "Rengöring + byte av kylpasta", price: "450 kr" },
      { name: "Termisk optimering", detail: "Luftflöde optimering + rengöring", price: "700 kr" }
    ]
  },
  {
    category: "Installationer",
    items: [
      { name: "Installation av operativsystem", detail: "Windows/Linux", price: "599 kr" },
      { name: "Installation av drivrutiner", price: "249 kr" },
      { name: "Installation av antivirus & säkerhetspaket", price: "299 kr" },
      { name: "Installation av Office eller liknande program", price: "249 kr" },
      { name: "Skapa återställningspunkt & systembackup", price: "399 kr" },
      { name: "Optimering för gaming", detail: "Inställningar + drivrutiner + tweaks", price: "499 kr" }
    ]
  },
  {
    category: "Data & Lagring",
    items: [
      { name: "Dataöverföring", detail: "Gammal till ny dator", price: "699-899 kr" },
      { name: "Säkerhetskopiering av filer", price: "499 kr" },
      { name: "Rensning av virus & malware", price: "599 kr" },
      { name: "Återställning av data", detail: "Ej avancerad recovery", price: "från 799 kr" },
      { name: "Formatering av hårddisk/SSD", price: "249 kr" }
    ]
  },
  {
    category: "Nätverk & Hemmafix",
    items: [
      { name: "Installation av router/switch/nätverk", price: "från 499 kr" },
      { name: "Optimering av WiFi", price: "499 kr" },
      { name: "Nätverk felsökning", price: "499 kr" },
      { name: "Hemmafix", detail: "Valfri datorhjälp", price: "499 kr/tim eller 399 kr/tim efter RUT" },
      { name: "Fjärrsupport", detail: "TeamViewer/AnyDesk", price: "199 kr per 30 min" }
    ]
  },
  {
    category: "Fasta Paket",
    items: [
      {
        name: "Ragnarök Gaming Bundle",
        price: "1 499 kr",
        includes: [
          "Full rengöring",
          "Kylpasta + luftflöde optimering",
          "Nya drivrutiner",
          "Windows-optimering",
          "Gaming-performance tuning"
        ]
      },
      {
        name: "Mjölnir Full Service",
        price: "1 999 kr",
        includes: [
          "Felsökning",
          "Djupgående rengöring",
          "Kylpasta",
          "Uppdateringar",
          "Diagnosrapport",
          "Optimering av allt"
        ]
      },
      {
        name: "Valhalla Nybygge",
        detail: "Priset är inte slutgiltigt. Delar och komponenter är inte inräknade.",
        price: "1 499 kr",
        includes: [
          "Komplett datorbyggnation",
          "Kabeldragning (clean build)",
          "BIOS-optimering",
          "Stabilitetstest (CPU, GPU, RAM)"
        ]
      }
    ]
  }
];

window.mjolnirConfig = {
  contactFormEmail,
  priceListData
};

const supportedLanguages = {
  sv: { label: "SV", name: "Svenska", dir: "ltr" },
  en: { label: "EN", name: "English", dir: "ltr" },
  ar: { label: "AR", name: "العربية", dir: "rtl" },
  pl: { label: "PL", name: "Polski", dir: "ltr" },
  de: { label: "DE", name: "Deutsch", dir: "ltr" },
  es: { label: "ES", name: "Español", dir: "ltr" },
  fr: { label: "FR", name: "Français", dir: "ltr" },
  fi: { label: "FI", name: "Suomi", dir: "ltr" },
  uk: { label: "UK", name: "Українська", dir: "ltr" }
};

const uiTranslations = {
  en: {
    "Hoppa till innehåll": "Skip to content",
    "Datorservice i Jönköping": "Computer service in Jonkoping",
    "Tjänster": "Services",
    "Prislista": "Prices",
    "Så går det till": "How it works",
    "Om": "About",
    "Kontakt": "Contact",
    "Jönköping med distanshjälp": "Jonkoping with remote help",
    "Datorproblem? Jag hjälper dig få ordning på det.": "Computer problems? I help you get things sorted.",
    "Oavsett om datorn kraschar, låter för mycket, behöver uppgraderas eller byggas från grunden får du tydlig hjälp, raka besked och pris innan arbetet startar.": "Whether your computer crashes, makes too much noise, needs an upgrade or should be built from scratch, you get clear help, straight answers and a price before the work starts.",
    "Beskriv ditt problem": "Describe your problem",
    "Diagnos och pris innan arbete": "Diagnosis and price before work starts",
    "Rengöring, kylning och stabilitetstest": "Cleaning, cooling and stability testing",
    "Lokalt i Jönköping, distans vid enklare ärenden": "Local in Jonkoping, remote help for simpler cases",
    "På verkstaden": "In the workshop",
    "Fokus": "Focus",
    "Stabilitet": "Stability",
    "Arbetssätt": "How I work",
    "Tydlig diagnos": "Clear diagnosis",
    "Område": "Area",
    "Kabeldragning & stresstest vid byggen": "Cable management and stress testing for builds",
    "Felsökning av krascher, värme, nätverk": "Troubleshooting crashes, heat and network issues",
    "Uppgraderingar: GPU/CPU/RAM/SSD/PSU": "Upgrades: GPU/CPU/RAM/SSD/PSU",
    "Du behöver inte veta vad som är fel": "You do not need to know what is wrong",
    "Beskriv bara vad som händer, när det började och vad du vill kunna göra med datorn. Sedan hjälper jag dig reda ut nästa steg.": "Just describe what happens, when it started and what you want to do with the computer. Then I will help you figure out the next step.",
    "Datorn startar inte": "The computer will not start",
    "Felsökning av ström, nätaggregat, moderkort, RAM och andra vanliga orsaker.": "Troubleshooting power, PSU, motherboard, RAM and other common causes.",
    "Den blir varm eller låter mycket": "It gets hot or makes a lot of noise",
    "Rengöring, kylpasta, fläktkurvor och kontroll av temperaturer.": "Cleaning, thermal paste, fan curves and temperature checks.",
    "Spel kraschar": "Games crash",
    "Genomgång av drivrutiner, stabilitet, temperaturer och hårdvara.": "Driver, stability, temperature and hardware checks.",
    "Du vill uppgradera": "You want to upgrade",
    "Hjälp att välja rätt GPU, CPU, RAM, SSD eller nätaggregat för din dator.": "Help choosing the right GPU, CPU, RAM, SSD or power supply for your computer.",
    "Så funkar det": "How it works",
    "En rak process från första beskrivning till färdig testad dator.": "A straightforward process from first description to a finished, tested computer.",
    "Beskriv problemet": "Describe the problem",
    "Beskriv datorn, felet eller bygget du vill ha hjälp med.": "Describe the computer, issue or build you need help with.",
    "Få förslag": "Get a suggestion",
    "Du får en tydlig bedömning och prisbild innan arbetet startar.": "You get a clear assessment and price estimate before the work starts.",
    "Service": "Service",
    "Felsökning, rengöring, uppgradering eller bygge görs enligt plan.": "Troubleshooting, cleaning, upgrading or building is done according to plan.",
    "Klart": "Done",
    "Datorn lämnas tillbaka testad med besked om vad som gjorts.": "The computer is returned tested, with a clear explanation of what was done.",
    "Snabbval": "Quick links",
    "Gå direkt till det du behöver.": "Go straight to what you need.",
    "Datorbygge, felsökning, uppgraderingar, installationer och nätverk.": "PC builds, troubleshooting, upgrades, installations and networking.",
    "Se tjänster": "See services",
    "Arbetskostnader, fasta paket och vanliga tillägg.": "Labor costs, fixed packages and common add-ons.",
    "Öppna prislistan": "Open the price list",
    "Så går ett ärende till från första kontakt till färdig dator.": "How a case goes from first contact to a finished computer.",
    "Läs processen": "Read the process",
    "Berätta vad du behöver hjälp med, även om du inte vet exakt vad felet är.": "Tell me what you need help with, even if you do not know exactly what is wrong.",
    "Trygg datorhjälp": "Reliable computer help",
    "Tydliga besked, rimliga priser och personlig service för både gaming-PC, arbetsdatorer och hemmakontor.": "Clear answers, reasonable prices and personal service for gaming PCs, work computers and home offices.",
    "Tydliga priser": "Clear prices",
    "Du får veta kostnaden innan arbetet går vidare. Komponenter och större inköp stäms av separat.": "You know the cost before the work continues. Components and larger purchases are agreed separately.",
    "Inga dolda avgifter": "No hidden fees",
    "Felsökning, arbete och eventuella tillägg kommuniceras innan något beställs eller monteras.": "Troubleshooting, work and any add-ons are communicated before anything is ordered or installed.",
    "Lokalt & på distans": "Local and remote",
    "Utgångspunkt i Jönköping med hjälp i närområdet och fjärrsupport vid enklare ärenden.": "Based in Jonkoping with help nearby and remote support for simpler cases.",
    "Testat innan klart": "Tested before completion",
    "Byggen, uppgraderingar och felsökningar avslutas med kontroll av stabilitet, temperatur och funktion.": "Builds, upgrades and troubleshooting end with checks for stability, temperature and function.",
    "Jönköping, Huskvarna, Bankeryd, Taberg, Nässjö och distans i hela Sverige. Andra orter kan ofta lösas efter överenskommelse.": "Jonkoping, Huskvarna, Bankeryd, Taberg, Nassjo and remote help across Sweden. Other places can often be arranged.",
    "Datorhjälp från bygge till felsökning.": "Computer help from builds to troubleshooting.",
    "Nybygge, felsökning, reparationer och uppgraderingar med tydligt pris innan arbetet startar.": "New builds, troubleshooting, repairs and upgrades with a clear price before work starts.",
    "Datorbygge": "PC build",
    "Skräddarsytt för gaming, streaming eller arbete. Montering, kabeldragning, stresstest och optimering.": "Tailored for gaming, streaming or work. Assembly, cable management, stress testing and optimization.",
    "Rådgivning utifrån behov & budget": "Advice based on needs and budget",
    "Test av temperaturer & stabilitet": "Temperature and stability testing",
    "Redo att använda vid leverans": "Ready to use on delivery",
    "Felsökning": "Troubleshooting",
    "Krascher, blåskärm, stutter, ljudproblem, nätverk eller värmeproblem.": "Crashes, blue screens, stutter, sound issues, network issues or heat problems.",
    "Snabb diagnos": "Fast diagnosis",
    "Tydligt åtgärdsförslag": "Clear repair suggestion",
    "Pris innan arbete": "Price before work starts",
    "Reparation & Service": "Repair and service",
    "Byte av delar och åtgärd av hårdvaru- och mjukvaruproblem. Rengöring och kylåtgärder vid behov.": "Part replacement and fixes for hardware and software issues. Cleaning and cooling improvements when needed.",
    "Överhettning & throttling": "Overheating and throttling",
    "Startproblem & instabilitet": "Startup problems and instability",
    "Uppgraderingar": "Upgrades",
    "Förläng livslängden och få bättre prestanda med rätt delar på rätt plats.": "Extend the life of your computer and improve performance with the right parts in the right place.",
    "Kylning & airflow": "Cooling and airflow",
    "Nätaggregat och kompatibilitet": "Power supply and compatibility",
    "Rengöring & Underhåll": "Cleaning and maintenance",
    "Damm, kylpasta, luftflöde och temperaturer ses över så datorn kan prestera stabilt igen.": "Dust, thermal paste, airflow and temperatures are checked so the computer can perform reliably again.",
    "Standard- eller djupgående rengöring": "Standard or deep cleaning",
    "Bärbara och stationära datorer": "Laptops and desktop computers",
    "Termisk optimering": "Thermal optimization",
    "Nätverk & Hemmafix": "Network and home help",
    "Hjälp med router, switch, WiFi, nätverksfelsökning och enklare datorhjälp hemma.": "Help with router, switch, WiFi, network troubleshooting and simpler computer help at home.",
    "Installation och optimering": "Installation and optimization",
    "Fjärrsupport vid enklare ärenden": "Remote support for simpler cases",
    "Hemmafix per timme": "Home help per hour",
    "Prislista.": "Prices.",
    "Alla priser är arbetskostnad om inget annat anges. Komponenter ingår inte i byggnationer och uppgraderingar.": "All prices are labor costs unless stated otherwise. Components are not included in builds or upgrades.",
    "Boka tjänst": "Book service",
    "Osäker på vilken tjänst du behöver?": "Not sure which service you need?",
    "Skicka en kort beskrivning av datorn, felet eller bygget så återkommer vi med förslag och prisbild.": "Send a short description of the computer, issue or build and I will reply with a suggestion and price estimate.",
    "Skicka ärende": "Send request",
    "Vanliga frågor": "FAQ",
    "Snabba svar innan du skickar in ett ärende.": "Quick answers before you send a request.",
    "Ingår komponenter i priset?": "Are components included in the price?",
    "Nej. Prislistan gäller arbetskostnad om inget annat anges. Komponenter och delar stäms av innan inköp.": "No. The price list covers labor unless stated otherwise. Components and parts are agreed before purchase.",
    "Kan jag få prisförslag först?": "Can I get a price estimate first?",
    "Ja. Du får en bedömning och prisbild innan arbetet påbörjas, särskilt vid felsökning, uppgradering och datorbygge.": "Yes. You get an assessment and price estimate before work starts, especially for troubleshooting, upgrades and builds.",
    "Kan enklare problem lösas på distans?": "Can simpler problems be solved remotely?",
    "Ja, vissa ärenden kan lösas via fjärrsupport. Det passar bäst för program, inställningar, drivrutiner och enklare felsökning.": "Yes, some cases can be solved with remote support. It works best for software, settings, drivers and simpler troubleshooting.",
    "Tar ni emot bärbara datorer?": "Do you accept laptops?",
    "Ja, framför allt för felsökning, rengöring, installationer, backup och enklare service. Mer avancerade reparationer bedöms från fall till fall.": "Yes, especially for troubleshooting, cleaning, installations, backup and simpler service. More advanced repairs are assessed case by case.",
    "Hur snabbt kan jag få hjälp?": "How quickly can I get help?",
    "Det beror på ärendet och belastning, men skicka en beskrivning så återkommer vi med nästa möjliga tid.": "It depends on the case and workload, but send a description and I will reply with the next available time.",
    "Enkel process, raka besked.": "Simple process, straight answers.",
    "Du får veta vad som behöver göras och vad det kostar innan arbetet påbörjas.": "You know what needs to be done and what it costs before work starts.",
    "Diagnos": "Diagnosis",
    "Felet hittas och du får åtgärdsförslag samt pris innan något görs.": "The issue is found and you get a suggested solution and price before anything is done.",
    "Klart & testat": "Done and tested",
    "Datorn lämnas tillbaka testad. Vid bygge ingår stresstest och temperaturkontroll.": "The computer is returned tested. For builds, stress testing and temperature checks are included.",
    "Jönköping och distans": "Jonkoping and remote",
    "Utgångspunkten är Jönköping, med hjälp i bland annat Huskvarna, Bankeryd, Taberg och Nässjö efter överenskommelse. Vissa ärenden kan också lösas via fjärrsupport eller inlämning.": "The base is Jonkoping, with help in places such as Huskvarna, Bankeryd, Taberg and Nassjo by agreement. Some cases can also be solved by remote support or drop-off.",
    "Berätta vad du behöver hjälp med.": "Tell me what you need help with.",
    "Du behöver inte veta vad felet heter. Beskriv vad som händer, vad du vill bygga eller vilken uppgradering du funderar på, så återkommer jag med nästa steg.": "You do not need to know the name of the issue. Describe what happens, what you want to build or which upgrade you are considering, and I will reply with the next step.",
    "Namn": "Name",
    "E-post / Telefon": "Email / phone",
    "Typ av ärende": "Type of request",
    "Nytt ärende": "New request",
    "Support": "Support",
    "Pågående ärende": "Ongoing case",
    "Faktura": "Invoice",
    "Fakturafrågor": "Invoice questions",
    "Ort": "Location",
    "Beskrivning": "Description",
    "Skicka beskrivning": "Send description",
    "Svar kommer via e-post. Första skickningen till mottagaradressen behöver bekräftas via e-post.": "Replies are sent by email. The first submission to the recipient address must be confirmed by email.",
    "Datorhjälp utan onödigt krångel.": "Computer help without unnecessary hassle.",
    "Mjölnir PC & Service hjälper privatpersoner och företag med felsökning, uppgraderingar och datorbyggen på en rimlig nivå.": "Mjolnir PC & Service helps individuals and businesses with troubleshooting, upgrades and PC builds at a reasonable level.",
    "Om Mjölnir PC & Service": "About Mjolnir PC & Service",
    "Mjölnir PC & Service är till för dig som vill ha hjälp utan krångel, tekniksnack på en rimlig nivå och tydliga besked innan något görs. Fokus ligger på felsökning som går att följa, rimliga rekommendationer och datorer som testas innan de lämnas tillbaka.": "Mjolnir PC & Service is for you if you want help without hassle, technical talk at a reasonable level and clear answers before anything is done. The focus is troubleshooting you can follow, reasonable recommendations and computers that are tested before they are returned.",
    "Raka besked": "Straight answers",
    "Stabilitet först": "Stability first",
    "Kylning & airflow": "Cooling and airflow",
    "Vanliga ärenden": "Common cases",
    "PC som kraschar i spel": "PC that crashes in games",
    "Höga temperaturer / throttling": "High temperatures / throttling",
    "Blåskärm och instabilitet": "Blue screens and instability",
    "Uppgradering inför nya spel": "Upgrade for new games",
    "Nybyggd PC för streaming": "New PC build for streaming",
    "Kontaktuppgifter kan du byta ut när e-post, telefon och bokningssätt är bestämda.": "Contact details can be updated when email, phone and booking method are decided.",
    "Utgångspunkt": "Base",
    "Mjölnir PC & Service utgår från Jönköping och hjälper kunder lokalt samt på distans i hela Sverige.": "Mjolnir PC & Service is based in Jonkoping and helps customers locally and remotely across Sweden.",
    "Härifrån planeras uppdrag, felsökning, byggen och serviceärenden.": "This is where jobs, troubleshooting, builds and service cases are planned.",
    "Öppna större karta": "Open larger map",
    "Meddelande skickat": "Message sent",
    "Tack, ditt ärende är skickat.": "Thank you, your request has been sent.",
    "Vi återkommer så snart som möjligt med nästa steg.": "I will reply as soon as possible with the next step.",
    "Till startsidan": "To the home page",
    "Se prislista": "See prices",
    "Beskriv problemet, datorn och vad du vill ha hjälp med.": "Describe the problem, the computer and what you need help with.",
    "Mjölnir PC & Service bygger, lagar och felsöker datorer i Jönköping och hela Sverige.": "Mjolnir PC & Service builds, repairs and troubleshoots computers in Jonkoping and across Sweden.",
    "Mjölnir PC & Service startsida": "Mjolnir PC & Service home page",
    "Huvudmeny": "Main menu",
    "Kontakta Mjölnir PC & Service för felsökning, reparation, datorbygge eller uppgradering.": "Contact Mjolnir PC & Service for troubleshooting, repair, PC builds or upgrades.",
    "Ditt namn": "Your name",
    "ex. mail@domain.se / 07x-xxx xx xx": "e.g. mail@domain.com / phone number",
    "Jönköping / Distans / Annat": "Jonkoping / remote / other",
    "Exempel: datorn startar inte, spel kraschar, den blir varm, eller jag vill uppgradera men vet inte vad som passar...": "Example: the computer will not start, games crash, it gets hot, or I want to upgrade but do not know what fits...",
    "Om Mjölnir PC & Service och vanliga datorärenden.": "About Mjolnir PC & Service and common computer cases.",
    "Karta över Jönköping": "Map of Jonkoping",
    "Prislista för Mjölnir PC & Service med felsökning, datorbygge, rengöring, installationer och fasta paket.": "Price list for Mjolnir PC & Service with troubleshooting, PC builds, cleaning, installations and fixed packages.",
    "Så går det till hos Mjölnir PC & Service: kontakt, diagnos och färdig testad dator.": "How it works at Mjolnir PC & Service: contact, diagnosis and a finished tested computer.",
    "Tack för ditt meddelande till Mjölnir PC & Service.": "Thank you for your message to Mjolnir PC & Service.",
    "Tjänster hos Mjölnir PC & Service: datorbygge, felsökning, reparation, uppgraderingar och nätverk.": "Services at Mjolnir PC & Service: PC builds, troubleshooting, repair, upgrades and networking."
  },
  ar: {
    "Tjänster": "الخدمات",
    "Prislista": "الأسعار",
    "Så går det till": "كيف تسير العملية",
    "Om": "عن الخدمة",
    "Kontakt": "تواصل",
    "Datorservice i Jönköping": "خدمة كمبيوتر في يونشوبينغ",
    "Jönköping med distanshjälp": "يونشوبينغ مع دعم عن بعد",
    "Datorproblem? Jag hjälper dig få ordning på det.": "هل لديك مشكلة في الكمبيوتر؟ أساعدك على حلها.",
    "Oavsett om datorn kraschar, låter för mycket, behöver uppgraderas eller byggas från grunden får du tydlig hjälp, raka besked och pris innan arbetet startar.": "سواء كان الكمبيوتر يتعطل، يصدر ضجيجا، يحتاج إلى ترقية أو بناء من الصفر، ستحصل على مساعدة واضحة وسعر قبل بدء العمل.",
    "Beskriv ditt problem": "اشرح المشكلة",
    "Diagnos och pris innan arbete": "تشخيص وسعر قبل العمل",
    "Rengöring, kylning och stabilitetstest": "تنظيف وتبريد واختبار استقرار",
    "Lokalt i Jönköping, distans vid enklare ärenden": "محلي في يونشوبينغ ودعم عن بعد للحالات البسيطة",
    "Du behöver inte veta vad som är fel": "لا تحتاج إلى معرفة اسم المشكلة",
    "Beskriv bara vad som händer, när det började och vad du vill kunna göra med datorn. Sedan hjälper jag dig reda ut nästa steg.": "فقط اشرح ما يحدث، متى بدأ، وما الذي تريد فعله بالكمبيوتر. بعدها أساعدك في الخطوة التالية.",
    "Datorn startar inte": "الكمبيوتر لا يعمل",
    "Den blir varm eller låter mycket": "يسخن أو يصدر ضجيجا",
    "Spel kraschar": "الألعاب تتعطل",
    "Du vill uppgradera": "تريد ترقية الجهاز",
    "Så funkar det": "كيف تعمل الخدمة",
    "Beskriv problemet": "اشرح المشكلة",
    "Få förslag": "احصل على اقتراح",
    "Service": "الخدمة",
    "Klart": "جاهز",
    "Snabbval": "روابط سريعة",
    "Gå direkt till det du behöver.": "انتقل مباشرة إلى ما تحتاجه.",
    "Trygg datorhjälp": "مساعدة كمبيوتر موثوقة",
    "Tydliga priser": "أسعار واضحة",
    "Inga dolda avgifter": "لا توجد رسوم مخفية",
    "Lokalt & på distans": "محليا وعن بعد",
    "Testat innan klart": "اختبار قبل التسليم",
    "Datorhjälp från bygge till felsökning.": "مساعدة كمبيوتر من البناء إلى التشخيص.",
    "Datorbygge": "بناء كمبيوتر",
    "Felsökning": "تشخيص الأعطال",
    "Reparation & Service": "إصلاح وخدمة",
    "Uppgraderingar": "ترقيات",
    "Rengöring & Underhåll": "تنظيف وصيانة",
    "Nätverk & Hemmafix": "شبكات ومساعدة منزلية",
    "Prislista.": "الأسعار.",
    "Boka tjänst": "احجز خدمة",
    "Osäker på vilken tjänst du behöver?": "غير متأكد من الخدمة التي تحتاجها؟",
    "Skicka ärende": "أرسل طلبا",
    "Vanliga frågor": "أسئلة شائعة",
    "Ingår komponenter i priset?": "هل القطع مشمولة في السعر؟",
    "Kan jag få prisförslag först?": "هل يمكنني الحصول على تقدير سعر أولا؟",
    "Kan enklare problem lösas på distans?": "هل يمكن حل المشاكل البسيطة عن بعد؟",
    "Tar ni emot bärbara datorer?": "هل تستقبلون أجهزة لابتوب؟",
    "Hur snabbt kan jag få hjälp?": "كم بسرعة يمكنني الحصول على مساعدة؟",
    "Enkel process, raka besked.": "عملية بسيطة وإجابات واضحة.",
    "Diagnos": "تشخيص",
    "Klart & testat": "جاهز ومختبر",
    "Jönköping och distans": "يونشوبينغ وعن بعد",
    "Berätta vad du behöver hjälp med.": "أخبرني بما تحتاج المساعدة فيه.",
    "Namn": "الاسم",
    "E-post / Telefon": "البريد الإلكتروني / الهاتف",
    "Typ av ärende": "نوع الطلب",
    "Nytt ärende": "طلب جديد",
    "Support": "دعم",
    "Pågående ärende": "طلب جار",
    "Faktura": "فاتورة",
    "Fakturafrågor": "أسئلة الفاتورة",
    "Ort": "المدينة",
    "Beskrivning": "الوصف",
    "Skicka beskrivning": "إرسال الوصف",
    "Datorhjälp utan onödigt krångel.": "مساعدة كمبيوتر بدون تعقيد غير ضروري.",
    "Om Mjölnir PC & Service": "عن Mjolnir PC & Service",
    "Raka besked": "إجابات واضحة",
    "Stabilitet först": "الاستقرار أولا",
    "Kylning & airflow": "التبريد وتدفق الهواء",
    "Vanliga ärenden": "حالات شائعة",
    "Utgångspunkt": "نقطة الانطلاق",
    "Öppna större karta": "افتح خريطة أكبر",
    "Meddelande skickat": "تم إرسال الرسالة",
    "Tack, ditt ärende är skickat.": "شكرا، تم إرسال طلبك.",
    "Vi återkommer så snart som möjligt med nästa steg.": "سأعود إليك في أقرب وقت ممكن بالخطوة التالية.",
    "Till startsidan": "إلى الصفحة الرئيسية",
    "Se prislista": "عرض الأسعار"
  },
  pl: {
    "Hoppa till innehåll": "Przejdź do treści",
    "Datorservice i Jönköping": "Serwis komputerowy w Jonkoping",
    "Tjänster": "Usługi",
    "Prislista": "Cennik",
    "Så går det till": "Jak to działa",
    "Om": "O firmie",
    "Kontakt": "Kontakt",
    "Jönköping med distanshjälp": "Jonkoping i pomoc zdalna",
    "Datorproblem? Jag hjälper dig få ordning på det.": "Problem z komputerem? Pomogę to uporządkować.",
    "Oavsett om datorn kraschar, låter för mycket, behöver uppgraderas eller byggas från grunden får du tydlig hjälp, raka besked och pris innan arbetet startar.": "Niezależnie od tego, czy komputer się zawiesza, hałasuje, wymaga modernizacji czy budowy od zera, otrzymasz jasną pomoc, konkretne informacje i cenę przed rozpoczęciem pracy.",
    "Beskriv ditt problem": "Opisz problem",
    "Diagnos och pris innan arbete": "Diagnoza i cena przed pracą",
    "Rengöring, kylning och stabilitetstest": "Czyszczenie, chłodzenie i test stabilności",
    "Lokalt i Jönköping, distans vid enklare ärenden": "Lokalnie w Jonkoping, zdalnie przy prostszych sprawach",
    "Du behöver inte veta vad som är fel": "Nie musisz wiedzieć, co jest nie tak",
    "Beskriv bara vad som händer, när det började och vad du vill kunna göra med datorn. Sedan hjälper jag dig reda ut nästa steg.": "Opisz tylko, co się dzieje, kiedy się zaczęło i do czego chcesz używać komputera. Potem pomogę ustalić następny krok.",
    "Datorn startar inte": "Komputer się nie uruchamia",
    "Den blir varm eller låter mycket": "Grzeje się albo głośno pracuje",
    "Spel kraschar": "Gry się zawieszają",
    "Du vill uppgradera": "Chcesz zrobić modernizację",
    "Så funkar det": "Jak to działa",
    "Beskriv problemet": "Opisz problem",
    "Få förslag": "Otrzymaj propozycję",
    "Service": "Serwis",
    "Klart": "Gotowe",
    "Snabbval": "Szybkie linki",
    "Gå direkt till det du behöver.": "Przejdź od razu do tego, czego potrzebujesz.",
    "Trygg datorhjälp": "Pewna pomoc komputerowa",
    "Tydliga priser": "Jasne ceny",
    "Inga dolda avgifter": "Bez ukrytych opłat",
    "Lokalt & på distans": "Lokalnie i zdalnie",
    "Testat innan klart": "Testowane przed zakończeniem",
    "Datorhjälp från bygge till felsökning.": "Pomoc komputerowa od budowy po diagnostykę.",
    "Datorbygge": "Budowa komputera",
    "Felsökning": "Diagnostyka",
    "Reparation & Service": "Naprawa i serwis",
    "Uppgraderingar": "Modernizacje",
    "Rengöring & Underhåll": "Czyszczenie i konserwacja",
    "Nätverk & Hemmafix": "Sieć i pomoc domowa",
    "Prislista.": "Cennik.",
    "Boka tjänst": "Zamów usługę",
    "Osäker på vilken tjänst du behöver?": "Nie wiesz, której usługi potrzebujesz?",
    "Skicka ärende": "Wyślij zgłoszenie",
    "Vanliga frågor": "Najczęstsze pytania",
    "Ingår komponenter i priset?": "Czy części są wliczone w cenę?",
    "Kan jag få prisförslag först?": "Czy mogę najpierw dostać wycenę?",
    "Kan enklare problem lösas på distans?": "Czy prostsze problemy można rozwiązać zdalnie?",
    "Tar ni emot bärbara datorer?": "Czy przyjmujesz laptopy?",
    "Hur snabbt kan jag få hjälp?": "Jak szybko mogę otrzymać pomoc?",
    "Enkel process, raka besked.": "Prosty proces, konkretne informacje.",
    "Diagnos": "Diagnoza",
    "Klart & testat": "Gotowe i przetestowane",
    "Jönköping och distans": "Jonkoping i zdalnie",
    "Berätta vad du behöver hjälp med.": "Napisz, w czym potrzebujesz pomocy.",
    "Namn": "Imię",
    "E-post / Telefon": "E-mail / telefon",
    "Typ av ärende": "Rodzaj zgłoszenia",
    "Nytt ärende": "Nowe zgłoszenie",
    "Support": "Wsparcie",
    "Pågående ärende": "Sprawa w toku",
    "Faktura": "Faktura",
    "Fakturafrågor": "Pytania o fakturę",
    "Ort": "Miejscowość",
    "Beskrivning": "Opis",
    "Skicka beskrivning": "Wyślij opis",
    "Datorhjälp utan onödigt krångel.": "Pomoc komputerowa bez zbędnych komplikacji.",
    "Om Mjölnir PC & Service": "O Mjolnir PC & Service",
    "Raka besked": "Konkretne informacje",
    "Stabilitet först": "Stabilność przede wszystkim",
    "Kylning & airflow": "Chłodzenie i przepływ powietrza",
    "Vanliga ärenden": "Typowe sprawy",
    "Utgångspunkt": "Baza",
    "Öppna större karta": "Otwórz większą mapę",
    "Meddelande skickat": "Wiadomość wysłana",
    "Tack, ditt ärende är skickat.": "Dziękuję, zgłoszenie zostało wysłane.",
    "Vi återkommer så snart som möjligt med nästa steg.": "Odezwę się jak najszybciej z kolejnym krokiem.",
    "Till startsidan": "Do strony głównej",
    "Se prislista": "Zobacz cennik"
  },
  de: {
    "Datorservice i Jönköping": "Computerservice in Jönköping",
    "Tjänster": "Leistungen",
    "Prislista": "Preise",
    "Så går det till": "So funktioniert es",
    "Om": "Über uns",
    "Kontakt": "Kontakt",
    "Jönköping med distanshjälp": "Jönköping mit Fernsupport",
    "Datorproblem? Jag hjälper dig få ordning på det.": "Computerprobleme? Ich helfe dir, alles wieder in Ordnung zu bringen.",
    "Oavsett om datorn kraschar, låter för mycket, behöver uppgraderas eller byggas från grunden får du tydlig hjälp, raka besked och pris innan arbetet startar.": "Egal ob der Computer abstürzt, zu laut ist, aufgerüstet oder von Grund auf gebaut werden soll: Du bekommst klare Hilfe, direkte Antworten und einen Preis, bevor die Arbeit beginnt.",
    "Beskriv ditt problem": "Beschreibe dein Problem",
    "Du behöver inte veta vad som är fel": "Du musst nicht wissen, was genau falsch ist",
    "Datorn startar inte": "Der Computer startet nicht",
    "Den blir varm eller låter mycket": "Er wird heiß oder ist laut",
    "Spel kraschar": "Spiele stürzen ab",
    "Du vill uppgradera": "Du möchtest aufrüsten",
    "Så funkar det": "So funktioniert es",
    "Beskriv problemet": "Problem beschreiben",
    "Få förslag": "Vorschlag erhalten",
    "Service": "Service",
    "Klart": "Fertig",
    "Snabbval": "Schnellauswahl",
    "Trygg datorhjälp": "Zuverlässige Computerhilfe",
    "Tydliga priser": "Klare Preise",
    "Inga dolda avgifter": "Keine versteckten Gebühren",
    "Lokalt & på distans": "Vor Ort und aus der Ferne",
    "Testat innan klart": "Vor Übergabe getestet",
    "Datorhjälp från bygge till felsökning.": "Computerhilfe vom Aufbau bis zur Fehlersuche.",
    "Datorbygge": "PC-Bau",
    "Felsökning": "Fehlersuche",
    "Reparation & Service": "Reparatur und Service",
    "Uppgraderingar": "Upgrades",
    "Rengöring & Underhåll": "Reinigung und Wartung",
    "Nätverk & Hemmafix": "Netzwerk und Hilfe zu Hause",
    "Prislista.": "Preise.",
    "Boka tjänst": "Service buchen",
    "Osäker på vilken tjänst du behöver?": "Unsicher, welche Leistung du brauchst?",
    "Skicka ärende": "Anfrage senden",
    "Vanliga frågor": "Häufige Fragen",
    "Berätta vad du behöver hjälp med.": "Erzähl, wobei du Hilfe brauchst.",
    "Namn": "Name",
    "E-post / Telefon": "E-Mail / Telefon",
    "Typ av ärende": "Art der Anfrage",
    "Nytt ärende": "Neue Anfrage",
    "Pågående ärende": "Laufender Fall",
    "Faktura": "Rechnung",
    "Fakturafrågor": "Rechnungsfragen",
    "Ort": "Ort",
    "Beskrivning": "Beschreibung",
    "Skicka beskrivning": "Beschreibung senden",
    "Datorhjälp utan onödigt krångel.": "Computerhilfe ohne unnötigen Aufwand.",
    "Meddelande skickat": "Nachricht gesendet",
    "Tack, ditt ärende är skickat.": "Danke, deine Anfrage wurde gesendet.",
    "Till startsidan": "Zur Startseite",
    "Se prislista": "Preise ansehen"
  },
  es: {
    "Datorservice i Jönköping": "Servicio informático en Jönköping",
    "Tjänster": "Servicios",
    "Prislista": "Precios",
    "Så går det till": "Cómo funciona",
    "Om": "Acerca de",
    "Kontakt": "Contacto",
    "Jönköping med distanshjälp": "Jönköping con ayuda remota",
    "Datorproblem? Jag hjälper dig få ordning på det.": "¿Problemas con el ordenador? Te ayudo a solucionarlo.",
    "Oavsett om datorn kraschar, låter för mycket, behöver uppgraderas eller byggas från grunden får du tydlig hjälp, raka besked och pris innan arbetet startar.": "Tanto si el ordenador se bloquea, hace demasiado ruido, necesita una mejora o debe montarse desde cero, recibirás ayuda clara, respuestas directas y precio antes de empezar.",
    "Beskriv ditt problem": "Describe tu problema",
    "Du behöver inte veta vad som är fel": "No necesitas saber qué está mal",
    "Datorn startar inte": "El ordenador no arranca",
    "Den blir varm eller låter mycket": "Se calienta o hace mucho ruido",
    "Spel kraschar": "Los juegos se cierran",
    "Du vill uppgradera": "Quieres actualizar",
    "Så funkar det": "Así funciona",
    "Beskriv problemet": "Describe el problema",
    "Få förslag": "Recibe una propuesta",
    "Service": "Servicio",
    "Klart": "Listo",
    "Snabbval": "Accesos rápidos",
    "Trygg datorhjälp": "Ayuda informática fiable",
    "Tydliga priser": "Precios claros",
    "Inga dolda avgifter": "Sin costes ocultos",
    "Lokalt & på distans": "Local y remoto",
    "Testat innan klart": "Probado antes de entregar",
    "Datorhjälp från bygge till felsökning.": "Ayuda informática desde montaje hasta diagnóstico.",
    "Datorbygge": "Montaje de PC",
    "Felsökning": "Diagnóstico",
    "Reparation & Service": "Reparación y servicio",
    "Uppgraderingar": "Mejoras",
    "Rengöring & Underhåll": "Limpieza y mantenimiento",
    "Nätverk & Hemmafix": "Redes y ayuda en casa",
    "Prislista.": "Precios.",
    "Boka tjänst": "Reservar servicio",
    "Osäker på vilken tjänst du behöver?": "¿No sabes qué servicio necesitas?",
    "Skicka ärende": "Enviar solicitud",
    "Vanliga frågor": "Preguntas frecuentes",
    "Berätta vad du behöver hjälp med.": "Cuenta en qué necesitas ayuda.",
    "Namn": "Nombre",
    "E-post / Telefon": "Correo / teléfono",
    "Typ av ärende": "Tipo de solicitud",
    "Nytt ärende": "Nueva solicitud",
    "Support": "Soporte",
    "Pågående ärende": "Caso en curso",
    "Faktura": "Factura",
    "Fakturafrågor": "Preguntas de factura",
    "Ort": "Ciudad",
    "Beskrivning": "Descripción",
    "Skicka beskrivning": "Enviar descripción",
    "Datorhjälp utan onödigt krångel.": "Ayuda informática sin complicaciones innecesarias.",
    "Meddelande skickat": "Mensaje enviado",
    "Tack, ditt ärende är skickat.": "Gracias, tu solicitud ha sido enviada.",
    "Till startsidan": "A la página principal",
    "Se prislista": "Ver precios"
  },
  fr: {
    "Datorservice i Jönköping": "Service informatique à Jönköping",
    "Tjänster": "Services",
    "Prislista": "Tarifs",
    "Så går det till": "Comment ça marche",
    "Om": "À propos",
    "Kontakt": "Contact",
    "Jönköping med distanshjälp": "Jönköping avec aide à distance",
    "Datorproblem? Jag hjälper dig få ordning på det.": "Un problème d’ordinateur ? Je vous aide à remettre de l’ordre.",
    "Oavsett om datorn kraschar, låter för mycket, behöver uppgraderas eller byggas från grunden får du tydlig hjälp, raka besked och pris innan arbetet startar.": "Que l’ordinateur plante, fasse trop de bruit, ait besoin d’une mise à niveau ou d’un montage complet, vous recevez une aide claire, des réponses directes et un prix avant le début du travail.",
    "Beskriv ditt problem": "Décrire le problème",
    "Du behöver inte veta vad som är fel": "Vous n’avez pas besoin de savoir ce qui ne va pas",
    "Datorn startar inte": "L’ordinateur ne démarre pas",
    "Den blir varm eller låter mycket": "Il chauffe ou fait beaucoup de bruit",
    "Spel kraschar": "Les jeux plantent",
    "Du vill uppgradera": "Vous voulez améliorer le PC",
    "Så funkar det": "Comment ça marche",
    "Beskriv problemet": "Décrire le problème",
    "Få förslag": "Recevoir une proposition",
    "Service": "Service",
    "Klart": "Terminé",
    "Snabbval": "Accès rapide",
    "Trygg datorhjälp": "Aide informatique fiable",
    "Tydliga priser": "Tarifs clairs",
    "Inga dolda avgifter": "Pas de frais cachés",
    "Lokalt & på distans": "Local et à distance",
    "Testat innan klart": "Testé avant livraison",
    "Datorhjälp från bygge till felsökning.": "Aide informatique du montage au diagnostic.",
    "Datorbygge": "Montage PC",
    "Felsökning": "Diagnostic",
    "Reparation & Service": "Réparation et service",
    "Uppgraderingar": "Mises à niveau",
    "Rengöring & Underhåll": "Nettoyage et entretien",
    "Nätverk & Hemmafix": "Réseau et aide à domicile",
    "Prislista.": "Tarifs.",
    "Boka tjänst": "Réserver un service",
    "Osäker på vilken tjänst du behöver?": "Vous ne savez pas quel service choisir ?",
    "Skicka ärende": "Envoyer une demande",
    "Vanliga frågor": "Questions fréquentes",
    "Berätta vad du behöver hjälp med.": "Dites ce dont vous avez besoin.",
    "Namn": "Nom",
    "E-post / Telefon": "E-mail / téléphone",
    "Typ av ärende": "Type de demande",
    "Nytt ärende": "Nouvelle demande",
    "Support": "Support",
    "Pågående ärende": "Dossier en cours",
    "Faktura": "Facture",
    "Fakturafrågor": "Questions de facture",
    "Ort": "Ville",
    "Beskrivning": "Description",
    "Skicka beskrivning": "Envoyer la description",
    "Datorhjälp utan onödigt krångel.": "Aide informatique sans complications inutiles.",
    "Meddelande skickat": "Message envoyé",
    "Tack, ditt ärende är skickat.": "Merci, votre demande a été envoyée.",
    "Till startsidan": "Vers l’accueil",
    "Se prislista": "Voir les tarifs"
  },
  fi: {
    "Datorservice i Jönköping": "Tietokonehuolto Jönköpingissä",
    "Tjänster": "Palvelut",
    "Prislista": "Hinnasto",
    "Så går det till": "Näin se toimii",
    "Om": "Tietoa",
    "Kontakt": "Yhteys",
    "Jönköping med distanshjälp": "Jönköping ja etätuki",
    "Datorproblem? Jag hjälper dig få ordning på det.": "Tietokoneongelmia? Autan saamaan asiat kuntoon.",
    "Oavsett om datorn kraschar, låter för mycket, behöver uppgraderas eller byggas från grunden får du tydlig hjälp, raka besked och pris innan arbetet startar.": "Olipa tietokone kaatuileva, äänekäs, päivitystä vailla tai kokonaan rakennettava, saat selkeää apua, suorat vastaukset ja hinnan ennen työn aloitusta.",
    "Beskriv ditt problem": "Kuvaile ongelma",
    "Du behöver inte veta vad som är fel": "Sinun ei tarvitse tietää, mikä on vikana",
    "Datorn startar inte": "Tietokone ei käynnisty",
    "Den blir varm eller låter mycket": "Se kuumenee tai pitää kovaa ääntä",
    "Spel kraschar": "Pelit kaatuvat",
    "Du vill uppgradera": "Haluat päivittää koneen",
    "Så funkar det": "Näin se toimii",
    "Beskriv problemet": "Kuvaile ongelma",
    "Få förslag": "Saat ehdotuksen",
    "Service": "Huolto",
    "Klart": "Valmis",
    "Snabbval": "Pikalinkit",
    "Trygg datorhjälp": "Luotettavaa tietokoneapua",
    "Tydliga priser": "Selkeät hinnat",
    "Inga dolda avgifter": "Ei piilokuluja",
    "Lokalt & på distans": "Paikan päällä ja etänä",
    "Testat innan klart": "Testattu ennen luovutusta",
    "Datorhjälp från bygge till felsökning.": "Tietokoneapua rakentamisesta vianhakuun.",
    "Datorbygge": "Tietokoneen rakennus",
    "Felsökning": "Vianhaku",
    "Reparation & Service": "Korjaus ja huolto",
    "Uppgraderingar": "Päivitykset",
    "Rengöring & Underhåll": "Puhdistus ja ylläpito",
    "Nätverk & Hemmafix": "Verkko ja kotiapu",
    "Prislista.": "Hinnasto.",
    "Boka tjänst": "Varaa palvelu",
    "Osäker på vilken tjänst du behöver?": "Etkö ole varma, mitä palvelua tarvitset?",
    "Skicka ärende": "Lähetä pyyntö",
    "Vanliga frågor": "Usein kysytyt kysymykset",
    "Berätta vad du behöver hjälp med.": "Kerro, mihin tarvitset apua.",
    "Namn": "Nimi",
    "E-post / Telefon": "Sähköposti / puhelin",
    "Typ av ärende": "Pyynnön tyyppi",
    "Nytt ärende": "Uusi pyyntö",
    "Support": "Tuki",
    "Pågående ärende": "Käynnissä oleva asia",
    "Faktura": "Lasku",
    "Fakturafrågor": "Laskukysymykset",
    "Ort": "Paikkakunta",
    "Beskrivning": "Kuvaus",
    "Skicka beskrivning": "Lähetä kuvaus",
    "Datorhjälp utan onödigt krångel.": "Tietokoneapua ilman turhaa säätöä.",
    "Meddelande skickat": "Viesti lähetetty",
    "Tack, ditt ärende är skickat.": "Kiitos, pyyntösi on lähetetty.",
    "Till startsidan": "Etusivulle",
    "Se prislista": "Katso hinnasto"
  },
  uk: {
    "Datorservice i Jönköping": "Комп’ютерний сервіс у Єнчепінгу",
    "Tjänster": "Послуги",
    "Prislista": "Ціни",
    "Så går det till": "Як це працює",
    "Om": "Про сервіс",
    "Kontakt": "Контакт",
    "Jönköping med distanshjälp": "Єнчепінг і віддалена допомога",
    "Datorproblem? Jag hjälper dig få ordning på det.": "Проблеми з комп’ютером? Я допоможу все впорядкувати.",
    "Oavsett om datorn kraschar, låter för mycket, behöver uppgraderas eller byggas från grunden får du tydlig hjälp, raka besked och pris innan arbetet startar.": "Якщо комп’ютер зависає, шумить, потребує оновлення або складання з нуля, ви отримаєте зрозумілу допомогу, прямі відповіді та ціну до початку роботи.",
    "Beskriv ditt problem": "Опишіть проблему",
    "Du behöver inte veta vad som är fel": "Вам не потрібно знати точну причину",
    "Datorn startar inte": "Комп’ютер не вмикається",
    "Den blir varm eller låter mycket": "Він гріється або сильно шумить",
    "Spel kraschar": "Ігри вилітають",
    "Du vill uppgradera": "Ви хочете оновити комп’ютер",
    "Så funkar det": "Як це працює",
    "Beskriv problemet": "Опишіть проблему",
    "Få förslag": "Отримайте пропозицію",
    "Service": "Сервіс",
    "Klart": "Готово",
    "Snabbval": "Швидкі посилання",
    "Trygg datorhjälp": "Надійна комп’ютерна допомога",
    "Tydliga priser": "Зрозумілі ціни",
    "Inga dolda avgifter": "Без прихованих оплат",
    "Lokalt & på distans": "Локально та віддалено",
    "Testat innan klart": "Перевірено перед завершенням",
    "Datorhjälp från bygge till felsökning.": "Комп’ютерна допомога від складання до діагностики.",
    "Datorbygge": "Складання ПК",
    "Felsökning": "Діагностика",
    "Reparation & Service": "Ремонт і сервіс",
    "Uppgraderingar": "Оновлення",
    "Rengöring & Underhåll": "Чистка та обслуговування",
    "Nätverk & Hemmafix": "Мережа та домашня допомога",
    "Prislista.": "Ціни.",
    "Boka tjänst": "Замовити послугу",
    "Osäker på vilken tjänst du behöver?": "Не знаєте, яка послуга потрібна?",
    "Skicka ärende": "Надіслати запит",
    "Vanliga frågor": "Поширені питання",
    "Berätta vad du behöver hjälp med.": "Розкажіть, з чим потрібна допомога.",
    "Namn": "Ім’я",
    "E-post / Telefon": "Е-пошта / телефон",
    "Typ av ärende": "Тип запиту",
    "Nytt ärende": "Новий запит",
    "Support": "Підтримка",
    "Pågående ärende": "Поточна справа",
    "Faktura": "Рахунок",
    "Fakturafrågor": "Питання щодо рахунку",
    "Ort": "Місто",
    "Beskrivning": "Опис",
    "Skicka beskrivning": "Надіслати опис",
    "Datorhjälp utan onödigt krångel.": "Комп’ютерна допомога без зайвих складнощів.",
    "Meddelande skickat": "Повідомлення надіслано",
    "Tack, ditt ärende är skickat.": "Дякую, ваш запит надіслано.",
    "Till startsidan": "На головну",
    "Se prislista": "Переглянути ціни"
  }
};

const priceTranslations = {
  en: {
    "Felsökning & Diagnostik": "Troubleshooting and diagnostics",
    "Grund felsökning": "Basic troubleshooting",
    "Mjukvara & hårdvara": "Software and hardware",
    "Avancerad felsökning": "Advanced troubleshooting",
    "Krascher, BSOD, intermittenta fel": "Crashes, BSOD and intermittent issues",
    "Felsökning av nätaggregat, moderkort, CPU": "Troubleshooting PSU, motherboard, CPU",
    "Felsökning på plats": "On-site troubleshooting",
    "Hemma hos kund": "At the customer's location",
    "499 kr första timmen, därefter 399 kr/tim": "499 SEK first hour, then 399 SEK/hour",
    "Datorbyggnation & Uppgraderingar": "PC builds and upgrades",
    "Komponenter ingår inte i priset.": "Components are not included in the price.",
    "Full datorbyggnation": "Full PC build",
    "Montering av enskild komponent": "Single component installation",
    "Uppgradering av GPU/CPU/RAM/SSD": "GPU/CPU/RAM/SSD upgrade",
    "BIOS-uppdatering": "BIOS update",
    "Byte av kylpasta": "Thermal paste replacement",
    "Rengöring & Underhåll": "Cleaning and maintenance",
    "Standardrengöring": "Standard cleaning",
    "Damm, fläktar, filter": "Dust, fans, filters",
    "Djupgående rengöring": "Deep cleaning",
    "Nedmontering + full rengöring": "Disassembly and full cleaning",
    "Rengöring av bärbar dator": "Laptop cleaning",
    "Inkl. kylsystem": "Including cooling system",
    "Rengöring + byte av kylpasta": "Cleaning and thermal paste replacement",
    "Termisk optimering": "Thermal optimization",
    "Luftflöde optimering + rengöring": "Airflow optimization and cleaning",
    "Installationer": "Installations",
    "Installation av operativsystem": "Operating system installation",
    "Windows/Linux": "Windows/Linux",
    "Installation av drivrutiner": "Driver installation",
    "Installation av antivirus & säkerhetspaket": "Antivirus and security package installation",
    "Installation av Office eller liknande program": "Office or similar software installation",
    "Skapa återställningspunkt & systembackup": "Create restore point and system backup",
    "Optimering för gaming": "Gaming optimization",
    "Inställningar + drivrutiner + tweaks": "Settings, drivers and tweaks",
    "Data & Lagring": "Data and storage",
    "Dataöverföring": "Data transfer",
    "Gammal till ny dator": "Old computer to new computer",
    "Säkerhetskopiering av filer": "File backup",
    "Rensning av virus & malware": "Virus and malware removal",
    "Återställning av data": "Data recovery",
    "Ej avancerad recovery": "Not advanced recovery",
    "från 799 kr": "from 799 SEK",
    "Formatering av hårddisk/SSD": "HDD/SSD formatting",
    "Nätverk & Hemmafix": "Network and home help",
    "Installation av router/switch/nätverk": "Router/switch/network installation",
    "från 499 kr": "from 499 SEK",
    "Optimering av WiFi": "WiFi optimization",
    "Nätverk felsökning": "Network troubleshooting",
    "Hemmafix": "Home help",
    "Valfri datorhjälp": "General computer help",
    "499 kr/tim eller 399 kr/tim efter RUT": "499 SEK/hour or 399 SEK/hour after RUT",
    "Fjärrsupport": "Remote support",
    "TeamViewer/AnyDesk": "TeamViewer/AnyDesk",
    "199 kr per 30 min": "199 SEK per 30 min",
    "Fasta Paket": "Fixed packages",
    "Ragnarök Gaming Bundle": "Ragnarok Gaming Bundle",
    "Full rengöring": "Full cleaning",
    "Kylpasta + luftflöde optimering": "Thermal paste and airflow optimization",
    "Nya drivrutiner": "New drivers",
    "Windows-optimering": "Windows optimization",
    "Gaming-performance tuning": "Gaming performance tuning",
    "Felsökning": "Troubleshooting",
    "Djupgående rengöring": "Deep cleaning",
    "Kylpasta": "Thermal paste",
    "Uppdateringar": "Updates",
    "Diagnosrapport": "Diagnosis report",
    "Optimering av allt": "Full optimization",
    "Mjölnir Full Service": "Mjolnir Full Service",
    "Valhalla Nybygge": "Valhalla New Build",
    "Priset är inte slutgiltigt. Delar och komponenter är inte inräknade.": "The price is not final. Parts and components are not included.",
    "Komplett datorbyggnation": "Complete PC build",
    "Kabeldragning (clean build)": "Cable management (clean build)",
    "BIOS-optimering": "BIOS optimization",
    "Stabilitetstest (CPU, GPU, RAM)": "Stability test (CPU, GPU, RAM)"
  },
  ar: {
    "Felsökning & Diagnostik": "تشخيص الأعطال",
    "Grund felsökning": "تشخيص أساسي",
    "Mjukvara & hårdvara": "برامج ومكونات",
    "Avancerad felsökning": "تشخيص متقدم",
    "Krascher, BSOD, intermittenta fel": "تعطل، شاشة زرقاء، أعطال متقطعة",
    "Felsökning av nätaggregat, moderkort, CPU": "تشخيص مزود الطاقة واللوحة الأم والمعالج",
    "Felsökning på plats": "تشخيص في الموقع",
    "Hemma hos kund": "في منزل العميل",
    "499 kr första timmen, därefter 399 kr/tim": "499 كرونة للساعة الأولى، ثم 399 كرونة/ساعة",
    "Datorbyggnation & Uppgraderingar": "بناء وترقية الكمبيوتر",
    "Komponenter ingår inte i priset.": "القطع غير مشمولة في السعر.",
    "Full datorbyggnation": "بناء كمبيوتر كامل",
    "Montering av enskild komponent": "تركيب قطعة واحدة",
    "Uppgradering av GPU/CPU/RAM/SSD": "ترقية GPU/CPU/RAM/SSD",
    "BIOS-uppdatering": "تحديث BIOS",
    "Byte av kylpasta": "تغيير المعجون الحراري",
    "Rengöring & Underhåll": "تنظيف وصيانة",
    "Standardrengöring": "تنظيف عادي",
    "Damm, fläktar, filter": "غبار، مراوح، فلاتر",
    "Djupgående rengöring": "تنظيف عميق",
    "Nedmontering + full rengöring": "تفكيك وتنظيف كامل",
    "Rengöring av bärbar dator": "تنظيف لابتوب",
    "Inkl. kylsystem": "يشمل نظام التبريد",
    "Rengöring + byte av kylpasta": "تنظيف وتغيير المعجون الحراري",
    "Termisk optimering": "تحسين الحرارة",
    "Luftflöde optimering + rengöring": "تحسين تدفق الهواء وتنظيف",
    "Installationer": "تثبيتات",
    "Installation av operativsystem": "تثبيت نظام تشغيل",
    "Installation av drivrutiner": "تثبيت تعريفات",
    "Installation av antivirus & säkerhetspaket": "تثبيت مضاد فيروسات وحزمة أمان",
    "Installation av Office eller liknande program": "تثبيت Office أو برنامج مشابه",
    "Skapa återställningspunkt & systembackup": "إنشاء نقطة استعادة ونسخة احتياطية",
    "Optimering för gaming": "تحسين للألعاب",
    "Inställningar + drivrutiner + tweaks": "إعدادات وتعريفات وتحسينات",
    "Data & Lagring": "البيانات والتخزين",
    "Dataöverföring": "نقل البيانات",
    "Gammal till ny dator": "من كمبيوتر قديم إلى جديد",
    "Säkerhetskopiering av filer": "نسخ احتياطي للملفات",
    "Rensning av virus & malware": "إزالة فيروسات وبرامج ضارة",
    "Återställning av data": "استرجاع بيانات",
    "Ej avancerad recovery": "ليس استرجاعا متقدما",
    "från 799 kr": "من 799 كرونة",
    "Formatering av hårddisk/SSD": "تهيئة HDD/SSD",
    "Nätverk & Hemmafix": "شبكة ومساعدة منزلية",
    "Installation av router/switch/nätverk": "تثبيت راوتر/سويتش/شبكة",
    "från 499 kr": "من 499 كرونة",
    "Optimering av WiFi": "تحسين WiFi",
    "Nätverk felsökning": "تشخيص الشبكة",
    "Hemmafix": "مساعدة منزلية",
    "Valfri datorhjälp": "مساعدة كمبيوتر عامة",
    "499 kr/tim eller 399 kr/tim efter RUT": "499 كرونة/ساعة أو 399 كرونة/ساعة بعد RUT",
    "Fjärrsupport": "دعم عن بعد",
    "199 kr per 30 min": "199 كرونة لكل 30 دقيقة",
    "Fasta Paket": "باقات ثابتة",
    "Full rengöring": "تنظيف كامل",
    "Kylpasta + luftflöde optimering": "معجون حراري وتحسين تدفق الهواء",
    "Nya drivrutiner": "تعريفات جديدة",
    "Windows-optimering": "تحسين Windows",
    "Felsökning": "تشخيص",
    "Djupgående rengöring": "تنظيف عميق",
    "Kylpasta": "معجون حراري",
    "Uppdateringar": "تحديثات",
    "Diagnosrapport": "تقرير تشخيص",
    "Optimering av allt": "تحسين كامل",
    "Priset är inte slutgiltigt. Delar och komponenter är inte inräknade.": "السعر غير نهائي. القطع والمكونات غير مشمولة.",
    "Komplett datorbyggnation": "بناء كمبيوتر كامل",
    "Kabeldragning (clean build)": "تنظيم الكابلات",
    "BIOS-optimering": "تحسين BIOS",
    "Stabilitetstest (CPU, GPU, RAM)": "اختبار استقرار CPU وGPU وRAM"
  },
  pl: {
    "Felsökning & Diagnostik": "Diagnostyka i rozwiązywanie problemów",
    "Grund felsökning": "Podstawowa diagnostyka",
    "Mjukvara & hårdvara": "Oprogramowanie i sprzęt",
    "Avancerad felsökning": "Zaawansowana diagnostyka",
    "Krascher, BSOD, intermittenta fel": "Zawieszanie, BSOD, usterki okresowe",
    "Felsökning av nätaggregat, moderkort, CPU": "Diagnostyka zasilacza, płyty głównej, CPU",
    "Felsökning på plats": "Diagnostyka na miejscu",
    "Hemma hos kund": "U klienta",
    "499 kr första timmen, därefter 399 kr/tim": "499 kr pierwsza godzina, potem 399 kr/godz.",
    "Datorbyggnation & Uppgraderingar": "Budowa i modernizacja komputera",
    "Komponenter ingår inte i priset.": "Części nie są wliczone w cenę.",
    "Full datorbyggnation": "Pełna budowa komputera",
    "Montering av enskild komponent": "Montaż pojedynczej części",
    "Uppgradering av GPU/CPU/RAM/SSD": "Modernizacja GPU/CPU/RAM/SSD",
    "BIOS-uppdatering": "Aktualizacja BIOS",
    "Byte av kylpasta": "Wymiana pasty termicznej",
    "Rengöring & Underhåll": "Czyszczenie i konserwacja",
    "Standardrengöring": "Czyszczenie standardowe",
    "Damm, fläktar, filter": "Kurz, wentylatory, filtry",
    "Djupgående rengöring": "Czyszczenie dokładne",
    "Nedmontering + full rengöring": "Demontaż i pełne czyszczenie",
    "Rengöring av bärbar dator": "Czyszczenie laptopa",
    "Inkl. kylsystem": "W tym układ chłodzenia",
    "Rengöring + byte av kylpasta": "Czyszczenie i wymiana pasty",
    "Termisk optimering": "Optymalizacja temperatur",
    "Luftflöde optimering + rengöring": "Optymalizacja przepływu powietrza i czyszczenie",
    "Installationer": "Instalacje",
    "Installation av operativsystem": "Instalacja systemu operacyjnego",
    "Installation av drivrutiner": "Instalacja sterowników",
    "Installation av antivirus & säkerhetspaket": "Instalacja antywirusa i pakietu bezpieczeństwa",
    "Installation av Office eller liknande program": "Instalacja Office lub podobnego programu",
    "Skapa återställningspunkt & systembackup": "Punkt przywracania i kopia systemu",
    "Optimering för gaming": "Optymalizacja do gier",
    "Inställningar + drivrutiner + tweaks": "Ustawienia, sterowniki i optymalizacje",
    "Data & Lagring": "Dane i pamięć masowa",
    "Dataöverföring": "Przeniesienie danych",
    "Gammal till ny dator": "Ze starego komputera na nowy",
    "Säkerhetskopiering av filer": "Kopia zapasowa plików",
    "Rensning av virus & malware": "Usuwanie wirusów i malware",
    "Återställning av data": "Odzyskiwanie danych",
    "Ej avancerad recovery": "Nie obejmuje zaawansowanego odzysku",
    "från 799 kr": "od 799 kr",
    "Formatering av hårddisk/SSD": "Formatowanie HDD/SSD",
    "Nätverk & Hemmafix": "Sieć i pomoc domowa",
    "Installation av router/switch/nätverk": "Instalacja routera/switcha/sieci",
    "från 499 kr": "od 499 kr",
    "Optimering av WiFi": "Optymalizacja WiFi",
    "Nätverk felsökning": "Diagnostyka sieci",
    "Hemmafix": "Pomoc domowa",
    "Valfri datorhjälp": "Ogólna pomoc komputerowa",
    "499 kr/tim eller 399 kr/tim efter RUT": "499 kr/godz. lub 399 kr/godz. po RUT",
    "Fjärrsupport": "Wsparcie zdalne",
    "199 kr per 30 min": "199 kr za 30 min",
    "Fasta Paket": "Pakiety stałe",
    "Full rengöring": "Pełne czyszczenie",
    "Kylpasta + luftflöde optimering": "Pasta termiczna i optymalizacja przepływu powietrza",
    "Nya drivrutiner": "Nowe sterowniki",
    "Windows-optimering": "Optymalizacja Windows",
    "Felsökning": "Diagnostyka",
    "Djupgående rengöring": "Czyszczenie dokładne",
    "Kylpasta": "Pasta termiczna",
    "Uppdateringar": "Aktualizacje",
    "Diagnosrapport": "Raport diagnostyczny",
    "Optimering av allt": "Pełna optymalizacja",
    "Priset är inte slutgiltigt. Delar och komponenter är inte inräknade.": "Cena nie jest ostateczna. Części nie są wliczone.",
    "Komplett datorbyggnation": "Kompletna budowa komputera",
    "Kabeldragning (clean build)": "Ułożenie kabli",
    "BIOS-optimering": "Optymalizacja BIOS",
    "Stabilitetstest (CPU, GPU, RAM)": "Test stabilności CPU, GPU i RAM"
  }
};

const getCurrentLanguage = () => {
  const params = new URLSearchParams(window.location.search);
  const queryLanguage = params.get("lang");
  const savedLanguage = window.localStorage.getItem("mjolnir-language");
  return supportedLanguages[queryLanguage] ? queryLanguage : supportedLanguages[savedLanguage] ? savedLanguage : "sv";
};

let currentLanguage = getCurrentLanguage();

const translateValue = (value, dictionary) => {
  if (!value || currentLanguage === "sv") return value;
  return dictionary[value] || priceTranslations.en?.[value] || uiTranslations[currentLanguage]?.[value] || uiTranslations.en?.[value] || value;
};

const localizedPriceListData = () => {
  if (currentLanguage === "sv") return priceListData;
  const dictionary = priceTranslations[currentLanguage] || {};
  return priceListData.map((group) => ({
    category: translateValue(group.category, dictionary),
    note: translateValue(group.note, dictionary),
    items: group.items.map((item) => ({
      name: translateValue(item.name, dictionary),
      detail: translateValue(item.detail, dictionary),
      price: translateValue(item.price, dictionary),
      includes: item.includes?.map((included) => translateValue(included, dictionary))
    }))
  }));
};

const priceList = document.getElementById("price-list");

const renderPriceList = () => {
  if (!priceList) return;
  priceList.innerHTML = localizedPriceListData().map((group) => `
    <article class="price-card">
      <div class="price-card__head">
        <h3>${group.category}</h3>
        ${group.note ? `<p>${group.note}</p>` : ""}
      </div>
      <div class="price-card__items">
        ${group.items.map((item) => `
          <div class="price-row">
            <div class="price-row__copy">
              <strong>${item.name}</strong>
              ${item.detail ? `<span>${item.detail}</span>` : ""}
              ${item.includes ? `
                <ul class="price-row__includes">
                  ${item.includes.map((included) => `<li>${included}</li>`).join("")}
                </ul>
              ` : ""}
            </div>
            <div class="price-row__price">${item.price}</div>
          </div>
        `).join("")}
      </div>
    </article>
  `).join("");
};

renderPriceList();

const preserveSpacing = (original, replacement) => {
  const leading = original.match(/^\s*/)?.[0] || "";
  const trailing = original.match(/\s*$/)?.[0] || "";
  return `${leading}${replacement}${trailing}`;
};

const translateTextNode = (node) => {
  const original = node.parentElement?.dataset.i18nOriginalText || node.textContent;
  const trimmed = original.trim();
  if (!trimmed) return;

  if (node.parentElement && !node.parentElement.dataset.i18nOriginalText) {
    node.parentElement.dataset.i18nOriginalText = original;
  }

  const translated = currentLanguage === "sv" ? trimmed : uiTranslations[currentLanguage]?.[trimmed] || uiTranslations.en?.[trimmed] || trimmed;
  node.textContent = preserveSpacing(original, translated);
};

const translateAttributes = () => {
  const dictionary = uiTranslations[currentLanguage] || {};
  ["placeholder", "aria-label", "title", "content"].forEach((attributeName) => {
    document.querySelectorAll(`[${attributeName}]`).forEach((element) => {
      const dataKey = `i18nOriginal${attributeName.replace(/(^|-)([a-z])/g, (_, __, letter) => letter.toUpperCase())}`;
      if (!element.dataset[dataKey]) element.dataset[dataKey] = element.getAttribute(attributeName) || "";
      const original = element.dataset[dataKey];
      element.setAttribute(attributeName, currentLanguage === "sv" ? original : dictionary[original] || uiTranslations.en?.[original] || original);
    });
  });
};

const normalizeText = (value) => value.replace(/\s+/g, " ").trim();

const translateLeafElements = () => {
  const dictionary = uiTranslations[currentLanguage] || {};
  document.querySelectorAll("p, h1, h2, h3, li, a, button, summary, small, span, div").forEach((element) => {
    if (element.closest("script, style, textarea, .language-switcher, .price-grid")) return;
    if (element.children.length > 0) return;

    if (!element.dataset.i18nOriginalElementText) {
      const original = normalizeText(element.textContent || "");
      if (original) element.dataset.i18nOriginalElementText = original;
    }

    const original = element.dataset.i18nOriginalElementText;
    if (!original) return;
    element.textContent = currentLanguage === "sv" ? original : dictionary[original] || uiTranslations.en?.[original] || original;
  });
};

const applyTranslations = () => {
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = supportedLanguages[currentLanguage].dir;

  translateLeafElements();

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement?.closest("script, style, textarea")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(translateTextNode);
  translateAttributes();
  document.querySelectorAll(".language-switcher__button").forEach((button) => {
    const isActive = button.dataset.language === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const buildLanguageSwitcher = () => {
  if (window.location.pathname.includes("/admin/")) return;
  const header = document.querySelector(".header__inner");
  if (!header || document.querySelector(".language-switcher")) return;

  const switcher = document.createElement("div");
  switcher.className = "language-switcher";
  switcher.setAttribute("aria-label", "Språk");

  Object.entries(supportedLanguages).forEach(([code, language]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "language-switcher__button";
    button.dataset.language = code;
    button.textContent = language.label;
    button.title = language.name;
    button.addEventListener("click", () => {
      currentLanguage = code;
      window.localStorage.setItem("mjolnir-language", code);
      renderPriceList();
      applyTranslations();
    });
    switcher.appendChild(button);
  });

  header.appendChild(switcher);
};

buildLanguageSwitcher();
applyTranslations();

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const contactForm = document.getElementById("contact-form");

if (contactForm && typeof contactForm.addEventListener === "function") {
  const formStatus = document.getElementById("form-status");
  const nextUrl = document.getElementById("form-next-url");
  const requestTypeFields = contactForm.querySelectorAll('input[name="Ärende"]');
  const formSubject = document.getElementById("form-subject");
  const emailIsConfigured = contactFormEmail !== "din-epost@exempel.se" && contactFormEmail.includes("@");

  const updateSubject = () => {
    const selectedRequestType = contactForm.querySelector('input[name="Ärende"]:checked');
    if (selectedRequestType && formSubject) {
      formSubject.value = `${selectedRequestType.value} från Mjölnir PC & Service`;
    }
  };

  if (emailIsConfigured) {
    contactForm.action = `https://formsubmit.co/${encodeURIComponent(contactFormEmail)}`;
    if (nextUrl) {
      nextUrl.value = new URL("tack.html", window.location.href).href;
    }
  }

  updateSubject();
  requestTypeFields.forEach((field) => field.addEventListener("change", updateSubject));

  contactForm.addEventListener("submit", (event) => {
    if (!emailIsConfigured) {
      event.preventDefault();
      if (formStatus) {
        formStatus.textContent = "Lägg in mottagarens e-postadress i site.js innan formuläret kan skickas.";
      }
    }
  });
}
