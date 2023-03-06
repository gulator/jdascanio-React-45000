const vinos = [
  {
    bodega: "Cartuxa",
    nombre: "Pêra-Manca Tinto 1990",
    origen: "Portugal\n·\nAlentejo",
    tipo: "tinto",
    varietal: "Cabernet-Sauvignon",
    precio: 350000,
    image:
      "https://images.vivino.com/thumbs/L33jsYUuTMWTMy3KoqQyXg_pb_x300.png",
    id: 1,
  },
  {
    bodega: "Del Dotto",
    nombre: "The Beast Cabernet Sauvignon 2012",
    origen: "United States\n·\nRutherford",

    tipo: "tinto",
    varietal: "Cabernet-Sauvignon",
    precio: 40000,
    image:
      "https://images.vivino.com/thumbs/easjTPIcS-mCQ99XoYOMgQ_pb_x300.png",
    id: 2,
  },
  {
    bodega: "Scarecrow",
    nombre: "Cabernet Sauvignon 2016",
    origen: "United States\n·\nRutherford",
    tipo: "tinto",
    varietal: "Cabernet-Sauvignon",
    precio: 35000,
    image:
      "https://images.vivino.com/thumbs/pU7uFKR-TAKAOQaf3Hpn2A_pb_x300.png",
    id: 3,
  },
  {
    bodega: "Catena Zapata",
    nombre: "Estiba Reservada 1994",
    origen: "Argentina\n·\nAgrelo",
    tipo: "tinto",
    varietal: "Malbec",
    precio: 135000,
    image:
      "https://images.vivino.com/thumbs/Yt464jw0QS-ugF7ZQEbE2Q_pb_x300.png",
    id: 4,
  },
  {
    bodega: "Bodegas Valduero",
    nombre: "Ribera Del Duero Gran Reserva 12 Años 1999",
    origen: "Spain\n·\nRibera del Duero",
    tipo: "tinto",
    varietal: "Cabernet-Sauvignon",
    precio: 65000,
    image:
      "https://images.vivino.com/thumbs/5kJTu3dMQUCEtBy3zIhrKA_pb_x300.png",
    id: 5,
  },
  {
    bodega: "De Toren",
    nombre: "Book 17 XVII 2016",
    origen: "South Africa\n·\nStellenbosch",
    tipo: "tinto",
    varietal: "Cabernet-Sauvignon",
    precio: 35000,
    image:
      "https://images.vivino.com/thumbs/43se9NpdSPKkbPdGMbRV6Q_pb_x300.png",
    id: 6,
  },
  {
    bodega: "Outpost",
    nombre: "True Vineyard Cabernet Sauvignon 2014",
    origen: "United States\n·\nHowell Mountain",
    tipo: "tinto",
    varietal: "Cabernet-Sauvignon",
    precio: 40000,
    image:
      "https://images.vivino.com/thumbs/T8_v4hizTR-YX2nggkI52w_pb_x300.png",
    id: 7,
  },
  {
    bodega: "Teso La Monja",
    nombre: "Tinto 2013",
    origen: "Spain\n·\nToro",
    tipo: "tinto",
    varietal: "Cabernet-Sauvignon",
    precio: 37000,
    image:
      "https://images.vivino.com/thumbs/axBtSSH6TiK_ryMdUaw-rg_pb_x300.png",
    id: 8,
  },
  {
    bodega: "Tedeschi",
    nombre: "La Fabriseria Amarone della Valpolicella Classico 2003",
    origen: "Italy\n·\nAmarone della Valpolicella Classico",
    tipo: "tinto",
    varietal: "Cabernet-Sauvignon",
    precio: 63000,
    image:
      "https://images.vivino.com/thumbs/XtWBhvg9QACn8ElIr-NTQw_pb_x300.png",
    id: 9,
  },
  {
    bodega: "Promise",
    nombre: "Cabernet Sauvignon 2010",
    origen: "United States\n·\nRutherford",
    tipo: "tinto",
    varietal: "Cabernet-Sauvignon",
    precio: 35000,
    image:
      "https://images.vivino.com/thumbs/ELHDIsL6TOGR9_nfTRjC0w_pb_x300.png",
    id: 10,
  },
  {
    bodega: "Château Latour",
    nombre: "Grand Vin Pauillac (Premier Grand Cru Classé) 1982",
    origen: "France\n·\nPauillac",
    tipo: "tinto",
    varietal: "Malbec",
    precio: 140000,
    image:
      "https://images.vivino.com/thumbs/4RHhCzeQTsCeyCScxO0LOw_pb_x300.png",
    id: 11,
  },
  {
    bodega: "Château Margaux",
    nombre: "Château Margaux (Premier Grand Cru Classé) 2000",
    origen: "France\n·\nMargaux",
    tipo: "tinto",
    varietal: "Malbec",
    precio: 73000,
    image:
      "https://images.vivino.com/thumbs/dnqHnd0hSx-t14_V8uynAA_pb_x300.png",
    id: 12,
  },
  {
    bodega: "Viña Cobos",
    nombre: "Cobos Marchiori Vineyard Malbec 2015",
    origen: "Argentina\n·\nPerdriel",
    tipo: "tinto",
    varietal: "Malbec",
    precio: 50000,
    image:
      "https://images.vivino.com/thumbs/KOrKiHVjSlm4khPkAfU6yQ_pb_x300.png",
    id: 13,
  },
  {
    bodega: "ZD nombres",
    nombre: "Abacus Cabernet Sauvignon N.V.",
    origen: "United States\n·\nNapa Valley",
    tipo: "tinto",
    varietal: "Cabernet-Sauvignon",
    precio: 33000,
    image:
      "https://images.vivino.com/thumbs/yjmpM9eFR6G_twL2P0zXCg_pb_x300.png",
    id: 14,
  },
  {
    bodega: "Tusk",
    nombre: "Cabernet Sauvignon N.V.",
    origen: "United States\n·\nNapa Valley",
    tipo: "tinto",
    varietal: "Cabernet-Sauvignon",
    precio: 31000,
    image:
      "https://images.vivino.com/thumbs/_dyrZSN7Sq6xyIrWTS2slA_pb_x300.png",
    id: 15,
  },
  {
    bodega: "Montes",
    nombre: "Taita Marchigüe Vineyard Cabernet Sauvignon 2009",
    origen: "Chile\n·\nColchagua Valley",
    tipo: "tinto",
    varietal: "Cabernet-Sauvignon",
    precio: 91000,
    image:
      "https://images.vivino.com/thumbs/jmKZlGApSlSVDlSbUbe5JA_pb_x300.png",
    id: 16,
  },
  {
    bodega: "Monteviejo",
    nombre: "Lindaflor La Violeta Malbec 2010",
    origen: "Argentina\n·\nUco Valley",
    tipo: "tinto",
    varietal: "Malbec",
    precio: 81000,
    image:
      "https://images.vivino.com/thumbs/H27-UdTARwuWTyJpaCT8bw_pb_x300.png",
    id: 17,
  },
  {
    bodega: "Domaine de La Romanée-Conti",
    nombre: "Romanée-Saint-Vivant Grand Cru (Marey-Monge) 2008",
    origen: "France\n·\nRomanée-Saint-Vivant Grand Cru",
    tipo: "tinto",
    varietal: "Malbec",
    precio: 89000,
    image:
      "https://images.vivino.com/thumbs/qbolgWCtRq-z3tt-HeXRrA_pb_x300.png",
    id: 18,
  },
  {
    bodega: "Zýmē",
    nombre: "La Mattonara Amarone della Valpolicella Classico Riserva 2003",
    origen: "Italy\n·\nAmarone della Valpolicella Classico",
    tipo: "tinto",
    varietal: "Cabernet-Sauvignon",
    precio: 96000,
    image:
      "https://images.vivino.com/thumbs/mmxlvL67TWKI4iJfDkomcA_pb_x300.png",
    id: 19,
  },
  {
    bodega: "Catena Zapata",
    nombre: "Adrianna Vineyard River Stones Malbec 2015",
    origen: "Argentina\n·\nMendoza",
    tipo: "tinto",
    varietal: "Malbec",
    precio: 71000,
    image:
      "https://images.vivino.com/thumbs/nJVKE4QhQ8ayYG8MfdIJQA_pb_x300.png",
    id: 20,
  },
  {
    bodega: "Château Mouton Rothschild",
    nombre: "Pauillac (Premier Grand Cru Classé) 1961",
    origen: "France\n·\nPauillac",
    tipo: "tinto",
    varietal: "Malbec",
    precio: 331000,
    image:
      "https://images.vivino.com/thumbs/DNeQQKoHQCyq7BakiBm_zQ_pb_x300.png",
    id: 21,
  },
  {
    bodega: "Ovid",
    nombre: "Red Blend 2010",
    origen: "United States\n·\nNapa Valley",
    tipo: "tinto",
    varietal: "Cabernet-Sauvignon",
    precio: 52000,
    image:
      "https://images.vivino.com/thumbs/ezwBiGBKSLGNdUHBaLxKng_pb_x300.png",
    id: 22,
  },
  {
    bodega: "Villa Rinaldi",
    nombre: "Rinaldi Maior Amarone della Valpolicella 2000",
    origen: "Italy\n·\nAmarone della Valpolicella",
    tipo: "tinto",
    varietal: "Cabernet-Sauvignon",
    precio: 85000,
    image:
      "https://images.vivino.com/thumbs/rXpNpFjkRZCR891Jfxb8uw_pb_x300.png",
    id: 23,
  },
  {
    bodega: "Gaja",
    nombre: "Sperss Langhe 1988",
    origen: "Italy\n·\nLanghe",
    tipo: "tinto",
    varietal: "Cabernet-Sauvignon",
    precio: 129000,
    image:
      "https://images.vivino.com/thumbs/CwZPprKTSMCSikoZTeiwDA_pb_x300.png",
    id: 24,
  },
  {
    bodega: "Memento Mori",
    nombre: "Cabernet Sauvignon 2012",
    origen: "United States\n·\nNapa Valley",
    tipo: "tinto",
    varietal: "Cabernet-Sauvignon",
    precio: 43000,
    image:
      "https://images.vivino.com/thumbs/V1dBHwuBQsqUeHuGeGdiYw_pb_x300.png",
    id: 25,
  },
  {
    bodega: "Domaine Comte Georges de Vogüé",
    nombre: "Musigny Grand Cru (Cuveé Vieilles Vignes) 2009",
    origen: "France\n·\nMusigny Grand Cru",
    tipo: "tinto",
    varietal: "Malbec",
    precio: 88000,
    image:
      "https://images.vivino.com/thumbs/Hk_hnCNzRlW4AojQHUUVzA_pb_x300.png",
    id: 26,
  },
  {
    bodega: "Le Pin",
    nombre: "Pomerol 1990",
    origen: "France\n·\nPomerol",
    tipo: "tinto",
    varietal: "Malbec",
    precio: 190000,
    image:
      "https://images.vivino.com/thumbs/rCirPraNRPy8PHfOlG4E2w_pb_x300.png",
    id: 27,
  },
  {
    bodega: "Podere Il Carnasciale",
    nombre: "Il Caberlot 2005",
    origen: "Italy\n·\nToscana",
    tipo: "tinto",
    varietal: "Cabernet-Sauvignon",
    precio: 100000,
    image:
      "https://images.vivino.com/thumbs/ZVu6gHseTwquXgpwQSbE-w_pb_x300.png",
    id: 28,
  },
  {
    bodega: "Catena Zapata",
    nombre: "Malbec Argentino 2003",
    origen: "Argentina\n·\nMendoza",
    tipo: "tinto",
    varietal: "Malbec",
    precio: 110000,
    image:
      "https://images.vivino.com/thumbs/K2Ui4ULxQd2S3jcrgwmxYQ_pb_x300.png",
    id: 29,
  },
  {
    bodega: "Masseto",
    nombre: "Toscana 1992",
    origen: "Italy\n·\nToscana",
    tipo: "tinto",
    varietal: "Cabernet-Sauvignon",
    precio: 200000,
    image:
      "https://images.vivino.com/thumbs/GPvEr_IUSKS1CDhhsY1ySg_pb_x300.png",
    id: 30,
  },
  {
    bodega: "Domaine de La Romanée-Conti",
    nombre: "Montrachet Grand Cru 2010",
    origen: "France\n·\nMontrachet Grand Cru",
    tipo: "blanco",
    varietal: "Sauvignon Blanc",
    precio: 50000,
    image:
      "https://images.vivino.com/thumbs/rORmihtxSrKG7SfuI0bD6w_pb_x300.png",
    id: 31,
  },
  {
    bodega: "Château d'Yquem",
    nombre: "Y 1996",
    origen: "France\n·\nBordeaux Supérieur",
    tipo: "blanco",
    varietal: "Chardonnay",
    precio: 150000,
    image:
      "https://images.vivino.com/thumbs/6dP83oDrQy2Zv6es9tHp7w_pb_x300.png",
    id: 32,
  },
  {
    bodega: "Château Haut-Brion",
    nombre: "Pessac-Léognan Blanc (Grand Cru Classé de Graves) 2005",
    origen: "France\n·\nPessac-Léognan",
    tipo: "blanco",
    varietal: "Chardonnay",
    precio: 150000,
    image:
      "https://images.vivino.com/thumbs/EvtJOugzTx-HZXZfdZvTsA_pb_x300.png",
    id: 33,
  },
  {
    bodega: "Louis Jadot",
    nombre: "Bâtard-Montrachet Grand Cru 2003",
    origen: "France\n·\nBâtard-Montrachet Grand Cru",
    tipo: "blanco",
    varietal: "Sauvignon Blanc",
    precio: 70000,
    image:
      "https://images.vivino.com/thumbs/RIMuIFwaQVa-HkHKNztfxA_pb_x300.png",
    id: 34,
  },
  {
    bodega: "Gaja",
    nombre: "Gaia & Rey Langhe 2011",
    origen: "Italy\n·\nLanghe",
    tipo: "blanco",
    varietal: "Chardonnay",
    precio: 40000,
    image:
      "https://images.vivino.com/thumbs/5K9sXX9CQ8eonyEU71IlDA_pb_x300.png",
    id: 35,
  },
  {
    bodega: "Marqués de Murrieta",
    nombre: "Castillo Ygay Gran Reserva Especial Blanco 1986",
    origen: "Spain\n·\nRioja",
    tipo: "blanco",
    varietal: "Sherry",
    precio: 170000,
    image:
      "https://images.vivino.com/thumbs/G3MU5UwBQ1eCX5A6CiPivg_pb_x300.png",
    id: 36,
  },
  {
    bodega: "Marcassin",
    nombre: "Marcassin Vineyard Chardonnay 2011",
    origen: "United States\n·\nSonoma Coast",
    tipo: "blanco",
    varietal: "Chardonnay",
    precio: 35000,
    image:
      "https://images.vivino.com/thumbs/JFRTPDUcTFiLFvtMXT-4Cg_pb_x300.png",
    id: 37,
  },
  {
    bodega: "Rafael Palacios",
    nombre: "Sorte O Soro Val do Bibei 2014",
    origen: "Spain\n·\nValdeorras",
    tipo: "blanco",
    varietal: "Sherry",
    precio: 50000,
    image:
      "https://images.vivino.com/thumbs/zIh4iW-pRNim7pLF_q2QAg_pb_x300.png",
    id: 38,
  },
  {
    bodega: "Quintarelli Giuseppe",
    nombre: "Veneto Amabile del Cere Passito Bianco 2003",
    origen: "Italy\n·\nVeneto",
    tipo: "blanco",
    varietal: "Chardonnay",
    precio: 60000,
    image:
      "https://images.vivino.com/thumbs/KCv8em8IS3Wp_w9qHpQYoQ_pb_x300.png",
    id: 39,
  },
  {
    bodega: "Arkenstone",
    nombre: "NVD Blanc 2012",
    origen: "United States\n·\nNapa Valley",
    tipo: "blanco",
    varietal: "Chardonnay",
    precio: 30000,
    image:
      "https://images.vivino.com/thumbs/E-mLfBQTQFi1rifQPJeJZA_pb_x300.png",
    id: 40,
  },
  {
    bodega: "Raveneau",
    nombre: "Chablis Grand Cru 'Valmur' 2001",
    origen: "France\n·\nChablis Grand Cru 'Valmur'",
    tipo: "blanco",
    varietal: "Sauvignon Blanc",
    precio: 58000,
    image:
      "https://images.vivino.com/thumbs/NvJW_m_oSouF5BbUQ6a_Yg_pb_x300.png",
    id: 41,
  },
  {
    bodega: "Attis",
    nombre: "Attis Mar Albariño 2016",
    origen: "Spain\n·\nRías Baixas",
    tipo: "blanco",
    varietal: "Sherry",
    precio: 30000,
    image:
      "https://images.vivino.com/thumbs/O0reA-UNSISBwMILPPcFHg_pb_x300.png",
    id: 42,
  },
  {
    bodega: "Moone-Tsai",
    nombre: "Charles Heintz Vineyard Chardonnay 2013",
    origen: "United States\n·\nSonoma Coast",
    tipo: "blanco",
    varietal: "Chardonnay",
    precio: 40000,
    image:
      "https://images.vivino.com/thumbs/DX46cOq9T4mVsmEtkwbJng_pb_x300.png",
    id: 43,
  },
  {
    bodega: "Cartuxa",
    nombre: "Pêra-Manca Branco 2007",
    origen: "Portugal\n·\nEvora",
    tipo: "blanco",
    varietal: "Chardonnay",
    precio: 53000,
    image:
      "https://images.vivino.com/thumbs/xILVphRlQV2wdzCZLzWg8g_pb_x300.png",
    id: 44,
  },
  {
    bodega: "Franz Hirtzberger",
    nombre: "Singerriedel - Riesling Smaragd 2011",
    origen: "Austria\n·\nWachau",
    tipo: "blanco",
    varietal: "Chardonnay",
    precio: 50000,
    image:
      "https://images.vivino.com/thumbs/W7Tblf6DSU6rZjeCpIkJ8Q_pb_x300.png",
    id: 45,
  },
  {
    bodega: "Villa M",
    nombre: "Rosé 2016",
    origen: "Italy\n·\nPiemonte",
    tipo: "rose",
    varietal: "Syrah rose",
    precio: 30000,
    image:
      "https://images.vivino.com/thumbs/__JeiUHGQ5KF6LBGEREllw_pb_x300.png",
    id: 46,
  },
  {
    bodega: "Minuty",
    nombre: "281 Rosé 2017",
    origen: "France\n·\nProvence",
    tipo: "rose",
    varietal: "Merlot rose",
    precio: 33000,
    image:
      "https://images.vivino.com/thumbs/CRBSmK3xRuqHdCg4TpBpVw_pb_x300.png",
    id: 47,
  },
  {
    bodega: "Château d'Esclans",
    nombre: "Garrus Rosé 2017",
    origen: "France\n·\nCôtes de Provence",
    tipo: "rose",
    varietal: "Provence rose",
    precio: 35000,
    image:
      "https://images.vivino.com/thumbs/NGq7QIE3QwSE0cAKrvPuTA_pb_x300.png",
    id: 48,
  },
  {
    bodega: "Château Sainte Marguerite",
    nombre: "Fantastique Rosé 2017",
    origen: "France\n·\nCôtes de Provence",
    tipo: "rose",
    varietal: "Provence rose",
    precio: 36000,
    image:
      "https://images.vivino.com/thumbs/WiDmw-hpT5-D3TfjjnOXDA_pb_x300.png",
    id: 49,
  },
  {
    bodega: "Cakebread",
    nombre: "Vin De Porche Rosé 2017",
    origen: "United States\n·\nAnderson Valley",
    tipo: "rose",
    varietal: "Merlot rose",
    precio: 31000,
    image:
      "https://images.vivino.com/thumbs/IZ_XBIxLSKuCRa1KhuRcGQ_pb_x300.png",
    id: 50,
  },
  {
    bodega: "Monte da Ravasqueira",
    nombre: "Touriga Nacional 2010",
    origen: "Portugal\n·\nAlentejano",
    tipo: "rose",
    varietal: "Syrah rose",
    precio: 39000,
    image:
      "https://images.vivino.com/thumbs/mE9if7kSTWOjfGBiV5T5CA_pb_x300.png",
    id: 51,
  },
  {
    bodega: "Domaines Ott",
    nombre: "Château de Selle Rosé (Coeur de Grain) 2013",
    origen: "France\n·\nCôtes de Provence",
    tipo: "rose",
    varietal: "Provence rose",
    precio: 41000,
    image:
      "https://images.vivino.com/thumbs/znOSQj0RQ5-wnZBGajuK9w_pb_x300.png",
    id: 52,
  },
  {
    bodega: "Notorious Pink",
    nombre: "Grenache Rosé 2013",
    origen: "France\n·\nVin de France",
    tipo: "rose",
    varietal: "Grenache rose",
    precio: 43000,
    image:
      "https://images.vivino.com/thumbs/0iPgtJgmQ-2CeV5FUKQMfA_pb_x300.png",
    id: 53,
  },
  {
    bodega: "Château de Saint Martin",
    nombre: "Eternelle Favorite Rosé 2012",
    origen: "France\n·\nCôtes de Provence",
    tipo: "rose",
    varietal: "Provence rose",
    precio: 40000,
    image:
      "https://images.vivino.com/thumbs/ODBpWgzbSnuz-rO_guBoyg_pb_x300.png",
    id: 54,
  },
  {
    bodega: "Fattoria Aldobrandesca",
    nombre: "Aleatico Toscana Rosato 2014",
    origen: "Italy\n·\nToscana",
    tipo: "rose",
    varietal: "Syrah rose",
    precio: 37000,
    image:
      "https://images.vivino.com/thumbs/mu0MhRNbSma0xmVFTkt3vA_pb_x300.png",
    id: 55,
  },
  {
    bodega: "Taittinger",
    nombre: "Comtes de Champagne Blanc de Blancs 1983",
    origen: "France\n·\nChampagne",
    tipo: "espumante",
    varietal: "Brut",
    precio: 237000,
    image:
      "https://images.vivino.com/thumbs/5DnUGr-_SwOGKMxb1KuuGA_pb_x300.png",
    id: 56,
  },
  {
    bodega: "Krug",
    nombre: "Clos du Mesnil Blanc de Blancs Brut Champagne 2000",
    origen: "France\n·\nChampagne",
    tipo: "espumante",
    varietal: "Brut",
    precio: 97000,
    image:
      "https://images.vivino.com/thumbs/xtWMPmF6RtKFoWz3kpxz4Q_pb_x300.png",
    id: 57,
  },
  {
    bodega: "Bollinger",
    nombre: "Vieilles Vignes Françaises Blanc de Noirs Brut Champagne 2007",
    origen: "France\n·\nChampagne",
    tipo: "espumante",
    varietal: "Brut",
    precio: 57000,
    image:
      "https://images.vivino.com/thumbs/yYHkkUczRVaBfBBl1NAoww_pb_x300.png",
    id: 58,
  },
  {
    bodega: "Billecart-Salmon",
    nombre: "Clos Saint-Hilaire Brut Champagne 2002",
    origen: "France\n·\nChampagne",
    tipo: "espumante",
    varietal: "Brut",
    precio: 87000,
    image:
      "https://images.vivino.com/thumbs/qsDV-1yaSWi6OmT2Fm1i3A_pb_x300.png",
    id: 59,
  },
  {
    bodega: "Dom Pérignon",
    nombre: "Brut Champagne 1986",
    origen: "France\n·\nChampagne",
    tipo: "espumante",
    varietal: "Brut",
    precio: 297000,
    image:
      "https://images.vivino.com/thumbs/s5aXYaQiTu-V_xEYI3KXRg_pb_x300.png",
    id: 60,
  },
  {
    bodega: "Salon",
    nombre: "Le Mesnil Blanc de Blancs (Cuvée S) Brut Champagne N.V.",
    origen: "France\n·\nChampagne",
    tipo: "espumante",
    varietal: "Brut",
    precio: 153000,
    image:
      "https://images.vivino.com/thumbs/npULvXoQRk6stiNqDWzB6Q_pb_x300.png",
    id: 61,
  },
  {
    bodega: "Jacques Selosse",
    nombre: "Lieux-dits La Cote Faron Extra Brut Champagne Grand Cru 'Aÿ' N.V.",
    origen: "France\n·\nChampagne Grand Cru 'Aÿ'",
    tipo: "espumante",
    varietal: "Brut",
    precio: 99000,
    image:
      "https://images.vivino.com/thumbs/UOIohsiJRVOwUxC6u3sJOg_pb_x300.png",
    id: 62,
  },
  {
    bodega: "Veuve Clicquot",
    nombre: "La Grande Dame Brut Rosé Champagne 1998",
    origen: "France\n·\nChampagne",
    tipo: "espumante",
    varietal: "Brut rose",
    precio: 220000,
    image:
      "https://images.vivino.com/thumbs/pON9usEiTWKCbLmuwo9IaA_pb_x300.png",
    id: 63,
  },
  {
    bodega: "Veuve Clicquot",
    nombre: "Privée Brut Champagne 1989",
    origen: "France\n·\nChampagne",
    tipo: "espumante",
    varietal: "Brut",
    precio: 255000,
    image:
      "https://images.vivino.com/thumbs/esk8UGj7RA6cv50SJSzTlA_pb_x300.png",
    id: 64,
  },
  {
    bodega: "Deutz",
    nombre: "Amour de Deutz Millésime Brut Champagne 2000",
    origen: "France\n·\nChampagne",
    tipo: "espumante",
    varietal: "Brut",
    precio: 144000,
    image:
      "https://images.vivino.com/thumbs/pDBSsgOMTuOLjzy_DG2VcA_pb_x300.png",
    id: 65,
  },
];
export default vinos