
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
  <p><strong>EN:</strong> ${result.en}</p>
  <p><strong>ID:</strong> ${result.id}</p>
  <p><em>Example:</em> ${result.example_en}</p>
  <p><em>Contoh:</em> ${result.example_id}</p>
  `;
  const playButton = document.getElementById('play-sound');
playButton.onclick = () => playAudio(result.audio);
});


function playAudio(audioUrl) {
  const audio = new Audio(audioUrl);
  audio.play();
}

