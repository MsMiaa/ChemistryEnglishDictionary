
const chemistryDictionary = {
  "acid": {
    en: "A substance with a pH less than 7",
    id: "Zat yang memiliki pH kurang dari 7",
    example_en: "Sulfuric acid is used in car batteries.",
    example_id: "Asam sulfat digunakan dalam aki mobil.",
    phonetic: "ˈæ.sɪd",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/acid--_gb_1.mp3"
  },
  "base": {
    en: "A substance with a pH greater than 7",
    id: "Zat yang memiliki pH lebih dari 7",
    example_en: "Sodium hydroxide is a strong base.",
    example_id: "Natrium hidroksida adalah basa kuat.",
    phonetic: "beɪs",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/base--_gb_1.mp3"
  },
  "atom": {
    en: "The basic unit of a chemical element.",
    id: "Unit dasar dari suatu unsur kimia.",
    example_en: "Everything is made up of atoms.",
    example_id: "Segala sesuatu tersusun atas atom.",
    phonetic: "ˈæt.əm",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/atom--_gb_1.mp3"
  },
  "molecule": {
    en: "A group of atoms bonded together.",
    id: "Sekelompok atom yang terikat bersama.",
    example_en: "A water molecule has two hydrogen atoms and one oxygen atom.",
    example_id: "Molekul air memiliki dua atom hidrogen dan satu atom oksigen.",
    phonetic: "ˈmɒl.ɪ.kjuːl",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/molecule--_gb_1.mp3"
  },
  "element": {
    en: "A substance made of only one type of atom.",
    id: "Zat yang hanya terdiri dari satu jenis atom.",
    example_en: "Gold is a chemical element.",
    example_id: "Emas adalah unsur kimia.",
    phonetic: "ˈel.ɪ.mənt",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/element--_gb_1.mp3"
  },
  "compound": {
    en: "A substance formed when two or more elements are chemically bonded.",
    id: "Zat yang terbentuk dari dua atau lebih unsur yang terikat secara kimia.",
    example_en: "Water is a compound made from hydrogen and oxygen.",
    example_id: "Air adalah senyawa yang terbentuk dari hidrogen dan oksigen.",
    phonetic: "ˈkɒm.paʊnd",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/compound--_gb_1.mp3"
  },
  "reaction": {
    en: "A process in which substances change into new substances.",
    id: "Proses di mana zat berubah menjadi zat baru.",
    example_en: "Combustion is a chemical reaction.",
    example_id: "Pembakaran adalah reaksi kimia.",
    phonetic: "riˈæk.ʃən",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/reaction--_gb_1.mp3"
  },
  "solution": {
    en: "A homogeneous mixture of two or more substances.",
    id: "Campuran homogen dari dua atau lebih zat.",
    example_en: "Salt water is a solution.",
    example_id: "Air garam adalah larutan.",
    phonetic: "səˈluː.ʃən",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/solution--_gb_1.mp3"
  },
  "solvent": {
    en: "The substance that dissolves another substance.",
    id: "Zat yang melarutkan zat lain.",
    example_en: "Water is a common solvent.",
    example_id: "Air adalah pelarut yang umum.",
    phonetic: "ˈsɒl.vənt",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/solvent--_gb_1.mp3"
  },
  "solute": {
    en: "The substance that is dissolved in a solvent.",
    id: "Zat yang larut dalam pelarut.",
    example_en: "Sugar is the solute in sugar water.",
    example_id: "Gula adalah zat terlarut dalam air gula.",
    phonetic: "ˈsɒl.juːt",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/solute--_gb_1.mp3"
  },
  "alkali": {
    en: "A base that is soluble in water.",
    id: "Basa yang larut dalam air.",
    example_en: "Potassium hydroxide is an alkali.",
    example_id: "Kalium hidroksida adalah alkali.",
    phonetic: "ˈæl.kə.laɪ",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/alkali--_gb_1.mp3"
  },
  "alloy": {
    en: "A mixture of two or more metals.",
    id: "Campuran dari dua atau lebih logam.",
    example_en: "Bronze is an alloy of copper and tin.",
    example_id: "Perunggu adalah paduan tembaga dan timah.",
    phonetic: "ˈæl.ɔɪ",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/alloy--_gb_1.mp3"
  },
  "precipitate": {
    en: "A solid that forms from a solution during a chemical reaction.",
    id: "Padatan yang terbentuk dari larutan selama reaksi kimia.",
    example_en: "A white precipitate formed when silver nitrate was added.",
    example_id: "Endapan putih terbentuk saat perak nitrat ditambahkan.",
    phonetic: "prɪˈsɪp.ɪ.teɪt",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/precipitate--_gb_1.mp3"
  },
  "catalyst": {
    en: "A substance that speeds up a chemical reaction without being consumed.",
    id: "Zat yang mempercepat reaksi kimia tanpa ikut bereaksi.",
    example_en: "Enzymes act as catalysts in the body.",
    example_id: "Enzim bertindak sebagai katalis dalam tubuh.",
    phonetic: "ˈkæt.əl.ɪst",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/catalyst--_gb_1.mp3"
  },
  "evaporation": {
    en: "The process of turning from liquid into vapor.",
    id: "Proses perubahan dari cair menjadi uap.",
    example_en: "Evaporation occurs more quickly at higher temperatures.",
    example_id: "Penguapan terjadi lebih cepat pada suhu tinggi.",
    phonetic: "ɪˌvæp.əˈreɪ.ʃən",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/evaporation--_gb_1.mp3"
  },
  "condensation": {
    en: "The change of state from gas to liquid.",
    id: "Perubahan wujud dari gas menjadi cair.",
    example_en: "Condensation appears on cold glass.",
    example_id: "Kondensasi muncul pada kaca yang dingin.",
    phonetic: "ˌkɒn.denˈseɪ.ʃən",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/condensation--_gb_1.mp3"
  },
  "sublimation": {
    en: "The process in which a solid changes directly into a gas.",
    id: "Proses perubahan padat langsung menjadi gas.",
    example_en: "Dry ice undergoes sublimation.",
    example_id: "Es kering mengalami sublimasi.",
    phonetic: "ˌsʌb.lɪˈmeɪ.ʃən",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/sublimation--_gb_1.mp3"
  },
  "filtration": {
    en: "A process that separates materials based on the size of their particles.",
    id: "Proses yang memisahkan bahan berdasarkan ukuran partikelnya.",
    example_en: "Filtration is used to purify water.",
    example_id: "Filtrasi digunakan untuk memurnikan air.",
    phonetic: "fɪlˈtreɪ.ʃən",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/filtration--_gb_1.mp3"
  },
  "absorption": {
    en: "The process by which one substance takes in or absorbs another.",
    id: "Proses di mana suatu zat menyerap zat lain.",
    example_en: "The sponge shows high water absorption.",
    example_id: "Spons menunjukkan daya serap air yang tinggi.",
    phonetic: "əbˈzɔːp.ʃən",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/absorption--_gb_1.mp3"
  },
  "oxidation": {
    en: "A chemical reaction in which a substance loses electrons.",
    id: "Reaksi kimia di mana suatu zat kehilangan elektron.",
    example_en: "Iron rusts due to oxidation.",
    example_id: "Besi berkarat karena oksidasi.",
    phonetic: "ˌɒksɪˈdeɪʃən",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/oxidation--_gb_1.mp3"
  },
  "reduction": {
    en: "A chemical reaction in which a substance gains electrons.",
    id: "Reaksi kimia di mana suatu zat memperoleh elektron.",
    example_en: "In the reaction, copper oxide undergoes reduction.",
    example_id: "Dalam reaksi, oksida tembaga mengalami reduksi.",
    phonetic: "rɪˈdʌkʃən",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/reduction--_gb_1.mp3"
  },
  "equilibrium": {
    en: "A state of balance in a chemical reaction.",
    id: "Keadaan keseimbangan dalam reaksi kimia.",
    example_en: "Chemical equilibrium occurs when the rate of forward and reverse reactions are equal.",
    example_id: "Keseimbangan kimia terjadi ketika laju reaksi maju dan mundur sama.",
    phonetic: "ˌiːkwɪˈlɪbrɪəm",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/equilibrium--_gb_1.mp3"
  },
  "buffer": {
    en: "A solution that resists changes in pH when acids or bases are added.",
    id: "Larutan yang menahan perubahan pH ketika asam atau basa ditambahkan.",
    example_en: "A buffer solution maintains the pH of a solution.",
    example_id: "Larutan penyangga mempertahankan pH suatu larutan.",
    phonetic: "ˈbʌfə(r)",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/buffer--_gb_1.mp3"
  },
  "valence": {
    en: "The ability of an atom to bond with other atoms based on the number of electrons in its outer shell.",
    id: "Kemampuan atom untuk mengikat dengan atom lain berdasarkan jumlah elektron di kulit terluarnya.",
    example_en: "The valence of an element determines how it bonds with other elements.",
    example_id: "Valensi suatu unsur menentukan bagaimana ia mengikat dengan unsur lain.",
    phonetic: "ˈveɪləns",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/valence--_gb_1.mp3"
  },
  "covalent": {
    en: "A bond formed when atoms share electrons.",
    id: "Ikatan yang terbentuk ketika atom saling berbagi elektron.",
    example_en: "Water molecules are formed by covalent bonds.",
    example_id: "Molekul air terbentuk oleh ikatan kovalen.",
    phonetic: "ˈkəʊveɪlənt",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/covalent--_gb_1.mp3"
  },
  "ionic": {
    en: "A bond formed when one atom donates an electron to another atom.",
    id: "Ikatan yang terbentuk ketika satu atom menyumbangkan elektron ke atom lain.",
    example_en: "Salt is formed from ionic bonds between sodium and chloride ions.",
    example_id: "Garam terbentuk dari ikatan ionik antara ion natrium dan klorida.",
    phonetic: "aɪˈɒnɪk",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/ionic--_gb_1.mp3"
  },
  "hydrogen": {
    en: "The chemical element with symbol H and atomic number 1.",
    id: "Unsur kimia dengan simbol H dan nomor atom 1.",
    example_en: "Hydrogen is the lightest element in the periodic table.",
    example_id: "Hidrogen adalah unsur teringan dalam tabel periodik.",
    phonetic: "ˈhaɪdrədʒən",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/hydrogen--_gb_1.mp3"
  },
  "oxygen": {
    en: "A chemical element with symbol O and atomic number 8, essential for life.",
    id: "Unsur kimia dengan simbol O dan nomor atom 8, penting untuk kehidupan.",
    example_en: "Oxygen is required for respiration in most organisms.",
    example_id: "Oksigen diperlukan untuk respirasi pada sebagian besar organisme.",
    phonetic: "ˈɒksɪdʒən",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/oxygen--_gb_1.mp3"
  },
  "nitrogen": {
    en: "A chemical element with symbol N and atomic number 7, found in the air.",
    id: "Unsur kimia dengan simbol N dan nomor atom 7, ditemukan di udara.",
    example_en: "Nitrogen makes up 78% of the Earth's atmosphere.",
    example_id: "Nitrogen membentuk 78% dari atmosfer bumi.",
    phonetic: "ˈnaɪtrədʒən",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/nitrogen--_gb_1.mp3"
  },
  "carbon": {
    en: "A chemical element with symbol C and atomic number 6.",
    id: "Unsur kimia dengan simbol C dan nomor atom 6.",
    example_en: "Carbon is the basis of all life forms.",
    example_id: "Karbon adalah dasar dari semua bentuk kehidupan.",
    phonetic: "ˈkɑːbən",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/carbon--_gb_1.mp3"
  },
  "chlorine": {
    en: "A chemical element with symbol Cl and atomic number 17.",
    id: "Unsur kimia dengan simbol Cl dan nomor atom 17.",
    example_en: "Chlorine is commonly used to disinfect water.",
    example_id: "Klorin umumnya digunakan untuk mendisinfeksi air.",
    phonetic: "ˈklɔːriːn",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/chlorine--_gb_1.mp3"
  },
  "sodium": {
    en: "A chemical element with symbol Na and atomic number 11.",
    id: "Unsur kimia dengan simbol Na dan nomor atom 11.",
    example_en: "Sodium is a soft, silvery metal.",
    example_id: "Natrium adalah logam lunak berwarna perak.",
    phonetic: "ˈsəʊdiəm",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/sodium--_gb_1.mp3"
  },
  "potassium": {
    en: "A chemical element with symbol K and atomic number 19.",
    id: "Unsur kimia dengan simbol K dan nomor atom 19.",
    example_en: "Potassium is used in fertilizers.",
    example_id: "Kalium digunakan dalam pupuk.",
    phonetic: "pəˈtæsɪəm",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/potassium--_gb_1.mp3"
  },
  "magnesium": {
    en: "A chemical element with symbol Mg and atomic number 12.",
    id: "Unsur kimia dengan simbol Mg dan nomor atom 12.",
    example_en: "Magnesium is a highly flammable metal.",
    example_id: "Magnesium adalah logam yang sangat mudah terbakar.",
    phonetic: "mæɡˈniːziəm",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/magnesium--_gb_1.mp3"
  },
  "calcium": {
    en: "A chemical element with symbol Ca and atomic number 20.",
    id: "Unsur kimia dengan simbol Ca dan nomor atom 20.",
    example_en: "Calcium is essential for strong bones.",
    example_id: "Kalsium sangat penting untuk tulang yang kuat.",
    phonetic: "ˈkælsɪəm",
    audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/calcium--_gb_1.mp3"
  },
  "batch process": {
        "en": "A manufacturing technique in which a set quantity of materials is processed together.",
        "id": "Teknik produksi di mana sejumlah bahan diproses secara bersamaan.",
        "example_en": "A batch process is commonly used in pharmaceutical production.",
        "example_id": "Proses batch umum digunakan dalam produksi farmasi.",
        "phonetic": "bætʃ ˈprəʊsɛs",
        "audio": ""
    },
    "boiling point": {
        "en": "The temperature at which a liquid turns into vapor.",
        "id": "Suhu di mana cairan berubah menjadi uap.",
        "example_en": "The boiling point of water is 100°C at sea level.",
        "example_id": "Titik didih air adalah 100°C pada permukaan laut.",
        "phonetic": "ˈbɔɪlɪŋ pɔɪnt",
        "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/boiling_point--_gb_1.mp3"
    },
    "buffer": {
        "en": "A solution that resists changes in pH when acid or base is added.",
        "id": "Larutan yang menahan perubahan pH saat asam atau basa ditambahkan.",
        "example_en": "A buffer keeps the pH of the solution stable.",
        "example_id": "Penyangga menjaga pH larutan tetap stabil.",
        "phonetic": "ˈbʌfə",
        "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/buffer--_gb_1.mp3"
    },
    "boiler": {
        "en": "A device used to generate steam or hot water by heating.",
        "id": "Perangkat yang digunakan untuk menghasilkan uap atau air panas dengan pemanasan.",
        "example_en": "The boiler provides heat for the entire building.",
        "example_id": "Boiler menyediakan panas untuk seluruh gedung.",
        "phonetic": "ˈbɔɪlə",
        "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/boiler--_gb_1.mp3"
    },
    "by-product": {
        "en": "A secondary product derived from a manufacturing process.",
        "id": "Produk sampingan yang dihasilkan dari proses manufaktur.",
        "example_en": "Glycerin is a by-product of biodiesel production.",
        "example_id": "Gliserin adalah produk sampingan dari produksi biodiesel.",
        "phonetic": "ˈbaɪˌprɒdʌkt",
        "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/by_product--_gb_1.mp3"
    },
    "catalyst": {
        "en": "A substance that increases the rate of a chemical reaction without being consumed.",
        "id": "Zat yang meningkatkan laju reaksi kimia tanpa habis bereaksi.",
        "example_en": "Enzymes act as catalysts in biological systems.",
        "example_id": "Enzim bertindak sebagai katalis dalam sistem biologis.",
        "phonetic": "ˈkætəlɪst",
        "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/catalyst--_gb_1.mp3"
    },
    "condensation": {
        "en": "The process by which vapor turns into liquid.",
        "id": "Proses di mana uap berubah menjadi cairan.",
        "example_en": "Water droplets on the glass are caused by condensation.",
        "example_id": "Tetes air di kaca disebabkan oleh kondensasi.",
        "phonetic": "ˌkɒndenˈseɪʃən",
        "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/condensation--_gb_1.mp3"
    },
    "corrosion": {
        "en": "The gradual destruction of materials by chemical reaction with their environment.",
        "id": "Kerusakan bertahap pada material akibat reaksi kimia dengan lingkungannya.",
        "example_en": "Corrosion of metal occurs in moist air.",
        "example_id": "Korosi logam terjadi di udara lembap.",
        "phonetic": "kəˈrəʊʒən",
        "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/corrosion--_gb_1.mp3"
    },
    "crystallization": {
        "en": "The process by which a solid forms from a solution or melt with an ordered structure.",
        "id": "Proses di mana padatan terbentuk dari larutan atau lelehan dengan struktur teratur.",
        "example_en": "Sugar can be separated from solution by crystallization.",
        "example_id": "Gula dapat dipisahkan dari larutan melalui kristalisasi.",
        "phonetic": "ˌkrɪstəlaɪˈzeɪʃən",
        "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/crystallization--_gb_1.mp3"
    },
    "concentration": {
        "en": "The amount of a substance in a given volume of solution.",
        "id": "Jumlah suatu zat dalam volume larutan tertentu.",
        "example_en": "The concentration of salt in seawater is about 3.5%.",
        "example_id": "Konsentrasi garam dalam air laut sekitar 3,5%.",
        "phonetic": "ˌkɒnsənˈtreɪʃən",
        "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/concentration--_gb_1.mp3"
    },
	"distillation": {
        "en": "A process of separating components of a mixture based on differences in boiling points.",
        "id": "Proses pemisahan komponen campuran berdasarkan perbedaan titik didih.",
        "example_en": "Distillation is used to purify water.",
        "example_id": "Distilasi digunakan untuk memurnikan air.",
        "phonetic": "ˌdɪstɪˈleɪʃən",
        "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/distillation--_gb_1.mp3"
    },
    "density": {
        "en": "The mass of a substance per unit volume.",
        "id": "Massa suatu zat per satuan volume.",
        "example_en": "Oil has a lower density than water.",
        "example_id": "Minyak memiliki kerapatan lebih rendah daripada air.",
        "phonetic": "ˈdɛnsɪti",
        "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/density--_gb_1.mp3"
    },
    "drying": {
        "en": "The process of removing moisture from a substance.",
        "id": "Proses menghilangkan kelembapan dari suatu zat.",
        "example_en": "Drying is an essential step in food preservation.",
        "example_id": "Pengeringan adalah langkah penting dalam pengawetan makanan.",
        "phonetic": "ˈdraɪɪŋ",
        "audio": ""
    },
    "dilution": {
        "en": "The process of reducing the concentration of a solute in solution.",
        "id": "Proses pengurangan konsentrasi zat terlarut dalam larutan.",
        "example_en": "Add more water for further dilution of the acid.",
        "example_id": "Tambahkan lebih banyak air untuk pengenceran asam lebih lanjut.",
        "phonetic": "daɪˈluːʃən",
        "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/dilution--_gb_1.mp3"
    },
    "dehydration": {
        "en": "The removal of water from a substance or compound.",
        "id": "Penghilangan air dari suatu zat atau senyawa.",
        "example_en": "Dehydration of fruits extends their shelf life.",
        "example_id": "Dehidrasi buah memperpanjang masa simpannya.",
        "phonetic": "ˌdiːhaɪˈdreɪʃən",
        "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/dehydration--_gb_1.mp3"
    },
    "emulsion": {
        "en": "A mixture of two immiscible liquids where one is dispersed in the other.",
        "id": "Campuran dua cairan yang tidak saling larut di mana satu tersebar dalam yang lain.",
        "example_en": "Mayonnaise is an example of an emulsion.",
        "example_id": "Mayones adalah contoh emulsi.",
        "phonetic": "ɪˈmʌlʃən",
        "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/emulsion--_gb_1.mp3"
    },
    "evaporation": {
        "en": "The process by which a liquid changes to a gas at the surface.",
        "id": "Proses di mana cairan berubah menjadi gas di permukaannya.",
        "example_en": "Evaporation cools the skin as sweat dries.",
        "example_id": "Evaporasi mendinginkan kulit saat keringat mengering.",
        "phonetic": "ɪˌvæpəˈreɪʃən",
        "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/evaporation--_gb_1.mp3"
    },
    "equilibrium": {
        "en": "A state in which opposing forces or processes are balanced.",
        "id": "Keadaan di mana gaya atau proses yang berlawanan berada dalam keseimbangan.",
        "example_en": "Chemical equilibrium occurs when the rate of forward and reverse reactions are equal.",
        "example_id": "Keseimbangan kimia terjadi ketika laju reaksi maju dan balik sama.",
        "phonetic": "ˌiːkwɪˈlɪbrɪəm",
        "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/equilibrium--_gb_1.mp3"
    },
    "extraction": {
        "en": "A process of separating a substance from a mixture using a solvent.",
        "id": "Proses memisahkan zat dari campuran menggunakan pelarut.",
        "example_en": "Solvent extraction is used to isolate natural oils.",
        "example_id": "Ekstraksi pelarut digunakan untuk mengisolasi minyak alami.",
        "phonetic": "ɪkˈstrækʃən",
        "audio": "https://ssl.gstatic.com/dictionary/static/sounds/oxford/extraction--_gb_1.mp3"
    }
};


const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const resultBox = document.getElementById("result-box");


form.addEventListener("submit", function (e) {
  e.preventDefault(); 
  const term = input.value.trim().toLowerCase();

  if (term === "") {
    resultBox.innerHTML = "<p>Please enter a word.</p>";
    return;
  }

  const result = chemistryDictionary[term];

  if (!result) {
    resultBox.innerHTML = "<p>Word not found in chemistry dictionary.</p>";
    return;
  }

  resultBox.innerHTML = `
  <h2>${term.charAt(0).toUpperCase() + term.slice(1)} <span>${result.phonetic}</span></h2>
  <br>
  <p><strong>EN:</strong> ${result.en}</p>
  <p><em>Example:</em> ${result.example_en}</p>
  <br>
  <p><strong>ID:</strong> ${result.id}</p>
    <p><em>Contoh:</em> ${result.example_id}</p>
  `;
  const playButton = document.getElementById('play-sound');
playButton.onclick = () => playAudio(result.audio);
});


function playAudio(audioUrl) {
  const audio = new Audio(audioUrl);
  audio.play();
}

