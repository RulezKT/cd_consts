const SSB = 0;
const MERCURY = 1;
const VENUS = 2;
const EARTH = 3;
const MARS = 4;
const JUPITER = 5;
const SATURN = 6;
const URANUS = 7;
const NEPTUNE = 8;
const PLUTO = 9;
const SUN = 10;
const MOON = 11;

// Earth Barycenter (3) -> Moon (301)
const MOONtoEARTH = 301;

const EARTH_NOT_BARYCENTER = 399;
const MERCURY_NOT_BARYCENTER = 199;
const VENUS_NOT_BARYCENTER = 299;

const AU = 0.1495978707e9; // km 149597870.7

// const SEC_TO_RAD = 4.8481368110953599359e-6;
/* radians per arc second */
//const RAD_TO_DEG = 5.7295779513082320877e1;
//1 Radians is equal to Degrees : 57.29577951308232 = 180/math.pi
const DEGREE_RATIO = 57.29577951308232;

// 88 градусов = 1.535889741755
const RAD_88_DEGREES = 1.53588974175500991848;

const PI = 3.14159265358979323846;

const SEC_TO_RAD = 4.8481368110953599359e-6; /* radians per arc second */
const SEC_IN_1_DAY = 86400;

// pi/180 - Ratio for conversion degrees to radians
// we need it for trigonometric functions
const RAD_RATIO = 0.017453292519943295;

const RAD_PER_ARCSECONDS = 4.8481368110953599359e-6; //STR radians per arc second

// Солнце проходит за день 1 градус, берем для верности 1.3
// за 1 секунду Солнце проходит 0.000015046296296296297 градусов или 0.0000002626074106009986440 радиана
// (1.535889741755/7689600).toFixed(20) =  0.00000019973597349082
const MED_SUN_PATH_IN_1_SEC = 0.000000199;

// время, за которое Солнце проходит 88 градусов
// 7_718_038.91 секунд
const SEC_FOR_88_DEGREES_SUN = RAD_88_DEGREES / MED_SUN_PATH_IN_1_SEC;

/*
according to tests
7_714_285.72 sec = 88 degrees
and deviation is +- 3.044 days == 263001.6 seconds
*/

const MED_EPS = 0.4090928042223289;
const MIN_EPS = 0.38571776469074687;
const MAX_EPS = 0.4276056667386107;

const JD2000 = 2451545;
const JD1950 = 2433282.5;

// 1 deg converted to radians
// const _1_DEG_IN_RAD = 0.017453292519943295;

// 359 deg converted to radians
// const _359_DEG_IN_RAD = 6.26574;

// размер одной гексаграммы в десятичных градусах
// const one_hex_in_dec = 5.625;

// размер одной линии в десятичных градусах
const oneLineInDec = 0.9375;

// размер одного цвета в десятичных градусах
const oneColorInDec = 0.15625;

// размер одного тона в десятичных градусах
const oneToneInDec = 0.026041666666666668;

// размер одной базы в десятичных градусах
const oneBaseInDec = 0.005208333333333334;

const hexSortByDeg = [
  // from 3.875 to 9.49
  [17, [3.875, 9.5]],
  [21, [9.5, 15.125]],
  [51, [15.125, 20.75]],
  [42, [20.75, 26.375]],

  [3, [26.375, 32.0]],
  [27, [32.0, 37.625]],
  [24, [37.625, 43.25]],
  [2, [43.25, 48.875]],

  [23, [48.875, 54.5]],
  [8, [54.5, 60.125]],
  [20, [60.125, 65.75]],
  [16, [65.75, 71.375]],

  [35, [71.375, 77.0]],
  [45, [77.0, 82.625]],
  [12, [82.625, 88.25]],
  [15, [88.25, 93.875]],

  [52, [93.875, 99.5]],
  [39, [99.5, 105.125]],
  [53, [105.125, 110.75]],
  [62, [110.75, 116.375]],

  [56, [116.375, 122.0]],
  [31, [122.0, 127.625]],
  [33, [127.625, 133.25]],
  [7, [133.25, 138.875]],

  [4, [138.875, 144.5]],
  [29, [144.5, 150.125]],
  [59, [150.125, 155.75]],
  [40, [155.75, 161.375]],

  [64, [161.375, 167.0]],
  [47, [167.0, 172.625]],
  [6, [172.625, 178.25]],
  [46, [178.25, 183.875]],

  [18, [183.875, 189.5]],
  [48, [189.5, 195.125]],
  [57, [195.125, 200.75]],
  [32, [200.75, 206.375]],

  [50, [206.375, 212.0]],
  [28, [212.0, 217.625]],
  [44, [217.625, 223.25]],
  [1, [223.25, 228.875]],

  [43, [228.875, 234.5]],
  [14, [234.5, 240.125]],
  [34, [240.125, 245.75]],
  [9, [245.75, 251.375]],

  [5, [251.375, 257.0]],
  [26, [257.0, 262.625]],
  [11, [262.625, 268.25]],
  [10, [268.25, 273.875]],

  [58, [273.875, 279.5]],
  [38, [279.5, 285.125]],
  [54, [285.125, 290.75]],
  [61, [290.75, 296.375]],

  [60, [296.375, 302.0]],
  [41, [302.0, 307.625]],
  [19, [307.625, 313.25]],
  [13, [313.25, 318.875]],

  [49, [318.875, 324.5]],
  [30, [324.5, 330.125]],
  [55, [330.125, 335.75]],
  [37, [335.75, 341.375]],

  [63, [341.375, 347.0]],
  [22, [347.0, 352.625]],
  [36, [352.625, 358.25]],
  [25, [358.25, 3.875]],
];

/*
// Вертикальное движение Луны
// сделать 100 замеров в разные времена и посмотреть изменение широты за 1000 10000 и 100000 секунд
// Средняя скорость прохождения  Луны по вертикали 0.000013473102552501308 градусов в секунду
// или 0.00000023515 RAD за 1 секунду

Средняя скорость при замере 1000 секунд =  0.0000002361
Средняя скорость при замере 10000 секунд = 0.0000002342
RAD в секунду
(0.0000002361 + 0.0000002342)/2 * 5.7295779513082320877e1 = 0.000013473102552501308

//грубая пристрелка для экономии ресурсов
//ищем когда поменяется знак
//когда искались узлы latitude был в диапазоне
//let max_range =  0.0009; эта широта в радианах проходится Луной примерно за 3812 секунд
//let min_range = -0.0009;

//RAD in 1 sec
//const MOON_VERTICAL_SPEED_IN_1_SEC = 0.0000002361;
*/

// дадим небольшой запас
// const MOON_VERTICAL_SPEED_IN_1_SEC = 0.0000002365;
// const MOON_VERTICAL_SPEED_IN_1_SEC = 0.0000003;
// корректируем прыжки на фактор
// const JUMP_FAC = 1;

// months from 1 to 12
const monthsArr = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// zodiac names from 0 to 11
// 0 - empty
// zodiac names from 1 to 12
const zodiacNames = [
  "", //????????
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

const planetsNumbers = {
  1: "mercury", // 7,01° (относительно эклиптики)
  2: "venus", // 3,39458° (относительно эклиптики)
  3: "earth",
  4: "mars", // 1,85061° (относительно эклиптики)
  5: "jupiter", // 1,304° (относительно эклиптики)
  6: "saturn", // 2,485 240° (относительно эклиптики)
  7: "uranus", // 0,772556° (относительно эклиптики)
  8: "neptune", // 1,767975° (относительно эклиптики)
  9: "pluto", // 17°,14 (относительно эклиптики)
  10: "sun",
  11: "moon", // 5,14° (относительно эклиптики)
  12: "north_node",
  13: "south_node",
  14: "hiron",
};

// массив с названиями планет в том порядке, в котором они находятся в файле de430.bsp
// +после 11 номера идут дополнительные планеты
const planetsArr = [
  "ssb",
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
  "pluto",
  "sun",
  "moon",
  "north_node",
  "south_node",
  "hiron",
];

// для каждого знака зодиака определяется сила планеты
// поиск идет от 6 к 0, берется первое найденное
const planetsPower = [
  // сила идет по порядку массива
  // [0,1,2,3,4,5,6]
  // 6 - обитель
  // 5 - экзальтация
  // 4 - родство, дружба
  // 3 - нейтрально
  // 2 - вражда
  // 1 - падение
  // 0 - изгнание

  // Aries
  [
    ["venus"],
    ["saturn"],
    ["mercury", "uranus"],
    ["moon"],
    ["jupiter", "neptune"],
    ["sun"],
    ["mars", "pluto"],
  ],

  // Taurus
  [
    ["mars", "pluto"],
    ["uranus"],
    ["jupiter", "neptune"],
    ["sun"],
    ["mercury", "saturn"],
    ["moon"],
    ["venus"],
  ],

  // Gemini
  [
    ["jupiter", "neptune"],
    ["hiron"],
    ["sun", "mars", "pluto"],
    ["moon"],
    ["venus", "saturn", "uranus"],
    ["mercury"],
    ["mercury"],
  ],

  // Cancer
  [
    ["saturn", "uranus"],
    ["mars"],
    ["mercury", "venus"],
    ["sun"],
    ["neptune", "pluto"],
    ["jupiter"],
    ["moon"],
  ],

  // Leo
  [
    ["saturn", "uranus"],
    ["neptune"],
    ["mercury", "venus"],
    ["moon"],
    ["jupiter", "mars"],
    ["pluto"],
    ["sun"],
  ],

  // Virgo
  [
    ["jupiter", "neptune"],
    ["venus"],
    ["mars", "pluto", "moon"],
    ["sun"],
    ["saturn", "uranus"],
    ["mercury"],
    ["mercury"],
  ],

  // Libra
  [
    ["mars", "pluto"],
    ["sun"],
    ["jupiter", "neptune"],
    ["moon"],
    ["mercury", "uranus"],
    ["saturn"],
    ["venus"],
  ],

  // Scorpio
  [
    ["venus"],
    ["moon"],
    ["mercury", "saturn"],
    ["sun"],
    ["jupiter", "neptune"],
    ["uranus"],
    ["mars", "pluto"],
  ],

  // Sagittarius
  [
    ["mercury"],
    ["mercury"],
    ["saturn", "uranus", "venus"],
    ["moon"],
    ["mars", "pluto", "sun"],
    ["hiron"],
    ["jupiter", "neptune"],
  ],

  // Capricorn
  [
    ["moon"],
    ["jupiter"],
    ["neptune", "pluto"],
    ["sun"],
    ["mercury", "venus"],
    ["mars"],
    ["saturn", "uranus"],
  ],

  // Aquarius
  [
    ["sun"],
    ["pluto"],
    ["jupiter", "mars"],
    ["moon"],
    ["mercury", "venus"],
    ["neptune"],
    ["saturn", "uranus"],
  ],

  // Pisces
  [
    ["mercury"],
    ["mercury"],
    ["saturn", "uranus"],
    ["sun"],
    ["mars", "pluto", "moon"],
    ["venus"],
    ["jupiter", "neptune"],
  ],
];

// показывает какие планеты из planets_numbers какими управляют знаками из zodiac_names
const dispositors = [
  // ssb
  [],

  // mercury
  ["Gemini", "Virgo"],

  // venus
  ["Taurus", "Libra"],

  // earth
  [],

  // mars
  ["Aries"],

  // jupiter
  ["Sagittarius"],

  // saturn
  ["Capricorn"],

  // uranus
  ["Aquarius"],

  // neptune
  ["Pisces"],

  // pluto
  ["Scorpio"],

  // sun
  ["Leo"],

  // moon
  ["Cancer"],
];

const signs_sorted_by_deg = [
  [0, [0, 0]],

  //Aries, Овен from 0 to 29.9
  [1, [0, 30]],

  //Taurus,  Телец from 30 to 59.9
  [2, [30, 60]],

  //Gemini,  Близнецы from 60 to 89.9
  [3, [60, 90]],

  //Cancer,  Рак from 90 to 119.9
  [4, [90, 120]],

  //Leo,  Лев from 120 to 149.9
  [5, [120, 150]],

  //Virgo,  Дева from 150 to 179.9
  [6, [150, 180]],

  //Libra,  Весы from 180 to 209.9
  [7, [180, 210]],

  //Scorpio,  Скорпион from 210 to 239.9
  [8, [210, 240]],

  //Sagittarius,  Стрелец from 240 to 269.9
  [9, [240, 270]],

  //Capricorn,  Козерог from 270 to 299.9
  [10, [270, 300]],

  //Aquarius,  Водолей from 300 to 329.9
  [11, [300, 330]],

  //Pisces,  Рыбы from 330 to 359.9
  [12, [330, 360]],
];

//дома планет,
// указаны соответствующие номера знаков зодиака от 1 до 12
const planets_houses = [
  [0],

  //Mercury Barycenter - Gemini and Virgo
  [3, 6],

  //Venus Barycenter - Taurus and Libra
  [2, 7],

  //Earth Barycenter
  [0],

  //Mars - Aries
  [1],

  //Jupiter  - Sagittarius
  [9],

  //Saturn - Capricorn
  [10],

  //Uranus - Aquarius
  [11],

  //Neptune - Pisces
  [12],

  //Pluto - Scorpio
  [8],

  //Sun - Leo
  [5],

  //Moon - Cancer
  [4],

  //Earth, Mercury, Venus
  [0],
  [0],
  [0],
];

const DE440s = {
  bsp_file: "de440s.bsp",
  nodes_file: "nodes_file.json",
  MIN_DATA: -4734072000.0,
  MAX_DATA: 4735368000.0,
  RECLEN: 1024,
  file_header: {
    file_record_struct: {
      // 1. LOCIDW (8 characters, 8 bytes) An identification word (`DAF/SPK') 7+'\0'
      locidw: "DAF/SPK",

      // 2. ND(1 integer, 4 bytes) : The number of double prec. components in each array summary.[Address 8]
      nd: 2,

      // 3. NI ( 1 integer, 4 bytes): The number of integer components in each array summary. [Address 12]
      ni: 6,

      // 4. LOCIFN (60 characters, 60 bytes):
      // The internal name or description of the array file. 7+'\0'
      locifn: "NIO2SPK",

      // 5. FWARD ( 1 integer, 4 bytes): The record number of the initial summary record in the file. [Address 76]
      fward: 62,

      // 6. BWARD ( 1 integer, 4 bytes): The record number of the final summary record in the file. [Address 80]
      bward: 62,

      // 7. FREE(1 integer, 4 bytes) :
      // The first free address in the file.This is the address at which
      // the first element of the next array to be added to the file will be stored.
      free: 4090737,

      // 8. LOCFMT(8 characters, 8 bytes) :
      // The character string that indicates the numeric binary format of the DAF.
      // The string has value "LTL-IEEE" 8+'\0' одна буква не влезает
      // переделывать структуру не хочется. и так сойдет :)
      locfmt: "LTL-IEEE",

      // 10. FTPSTR(28 characters, 28 bytes) : The FTP validation string.
      // ftpstr : "FTPSTR:\r:\n:\r\n:\r\x00:\x81:\x10\xce:ENDFTP",
    },

    // в de430.bsp всего одна summary_record состоящая из
    // summary_record+ 14 summaries_line
    summary_record_struct: {
      next_record_number: 0,
      previous_record_number: 0,
      total_summaries_number: 14,
    },

    // в файле 14 сегментов + solar system
    // etbeg, etend, target, observer, frame, type, rbeg, rend

    //                  (NI + 1)
    // SS       =  ND + --------         (Note that this is
    //                      2             integer division.)

    // Получается single_summary_size = 5 , умножаем на 8 (так как размер double precision),
    // равно 40 байтам. Эти 40 байтов состоят из ND*8 + NI*4 = 2ND*8 + 6NI*4 = 40

    summaries_line_struct: {
      // SOLAR SYSTEM BARYCENTER
      0: {
        segment_start_time: 0.0, // always
        segment_last_time: 0.0, // always
        target_code: 0,
        center_code: 0,
        ref_frame: 0, // always // always 1 in planet SPK ???
        type_of_data: 0, // always // always 2 in planet SPK ???
        record_start_adress: 0, // counted in elements, one need to multiply this by 8 to obtain adress in file
        record_last_adress: 0,
      },

      // MERCURY BARYCENTER
      1: {
        segment_start_time: -4734072000, // always
        segment_last_time: 4735368000, // always
        target_code: 1,
        center_code: 0,
        ref_frame: 1, // always // always 1 in planet SPK
        type_of_data: 2, // always // always 2 in planet SPK
        record_start_adress: 8065, // counted in elements, one need to multiply this by 8 to obtain adress in file
        record_last_adress: 610868,
      },

      // VENUS BARYCENTER
      2: {
        segment_start_time: -4734072000, // always
        segment_last_time: 4735368000, // always
        target_code: 2,
        center_code: 0,
        ref_frame: 1, // always // always 1 in planet SPK
        type_of_data: 2, // always // always 2 in planet SPK
        record_start_adress: 610869, // counted in elements, one need to multiply this by 8 to obtain adress in file
        record_last_adress: 830072,
      },

      // EARTH-MOON BARY.
      3: {
        segment_start_time: -4734072000, // always
        segment_last_time: 4735368000, // always
        target_code: 3,
        center_code: 0,
        ref_frame: 1, // always // always 1 in planet SPK
        type_of_data: 2, // always // always 2 in planet SPK
        record_start_adress: 830073, // counted in elements, one need to multiply this by 8 to obtain adress in file
        record_last_adress: 1110926,
      },

      // MARS BARYCENTER
      4: {
        segment_start_time: -4734072000, // always
        segment_last_time: 4735368000, // always
        target_code: 4,
        center_code: 0,
        ref_frame: 1, // always // always 1 in planet SPK
        type_of_data: 2, // always // always 2 in planet SPK
        record_start_adress: 1110927, // counted in elements, one need to multiply this by 8 to obtain adress in file
        record_last_adress: 1230805,
      },

      // JUPITER BARYCENTER
      5: {
        segment_start_time: -4734072000, // always
        segment_last_time: 4735368000, // always
        target_code: 5,
        center_code: 0,
        ref_frame: 1, // always // always 1 in planet SPK
        type_of_data: 2, // always // always 2 in planet SPK
        record_start_adress: 1230806, // counted in elements, one need to multiply this by 8 to obtain adress in file
        record_last_adress: 1319859,
      },

      // SATURN BARYCENTER
      6: {
        segment_start_time: -4734072000, // always
        segment_last_time: 4735368000, // always
        target_code: 6,
        center_code: 0,
        ref_frame: 1, // always // always 1 in planet SPK
        type_of_data: 2, // always // always 2 in planet SPK
        record_start_adress: 1319860, // counted in elements, one need to multiply this by 8 to obtain adress in file
        record_last_adress: 1398638,
      },

      // URANUS BARYCENTER
      7: {
        segment_start_time: -4734072000, // always
        segment_last_time: 4735368000, // always
        target_code: 7,
        center_code: 0,
        ref_frame: 1, // always // always 1 in planet SPK
        type_of_data: 2, // always // always 2 in planet SPK
        record_start_adress: 1398639, // counted in elements, one need to multiply this by 8 to obtain adress in file
        record_last_adress: 1467142,
      },

      // NEPTUNE BARYCENTER
      8: {
        segment_start_time: -4734072000, // always
        segment_last_time: 4735368000, // always
        target_code: 8,
        center_code: 0,
        ref_frame: 1, // always // always 1 in planet SPK
        type_of_data: 2, // always // always 2 in planet SPK
        record_start_adress: 1467143, // counted in elements, one need to multiply this by 8 to obtain adress in file
        record_last_adress: 1535646,
      },

      // PLUTO BARYCENTER
      9: {
        segment_start_time: -4734072000, // always
        segment_last_time: 4735368000, // always
        target_code: 9,
        center_code: 0,
        ref_frame: 1, // always // always 1 in planet SPK
        type_of_data: 2, // always // always 2 in planet SPK
        record_start_adress: 1535647, // counted in elements, one need to multiply this by 8 to obtain adress in file
        record_last_adress: 1604150,
      },

      // SUN
      10: {
        segment_start_time: -4734072000, // always
        segment_last_time: 4735368000, // always
        target_code: 10,
        center_code: 0,
        ref_frame: 1, // always // always 1 in planet SPK
        type_of_data: 2, // always // always 2 in planet SPK
        record_start_adress: 1604151, // counted in elements, one need to multiply this by 8 to obtain adress in file
        record_last_adress: 1843904,
      },

      // MOON
      11: {
        segment_start_time: -4734072000, // always
        segment_last_time: 4735368000, // always
        target_code: 301,
        center_code: 3,
        ref_frame: 1, // always // always 1 in planet SPK
        type_of_data: 2, // always // always 2 in planet SPK
        record_start_adress: 1843905, // counted in elements, one need to multiply this by 8 to obtain adress in file
        record_last_adress: 2967308,
      },

      // EARTH
      12: {
        segment_start_time: -4734072000, // always
        segment_last_time: 4735368000, // always
        target_code: 399,
        center_code: 3,
        ref_frame: 1, // always // always 1 in planet SPK
        type_of_data: 2, // always // always 2 in planet SPK
        record_start_adress: 2967309, // counted in elements, one need to multiply this by 8 to obtain adress in file
        record_last_adress: 4090712,
      },

      //  MERCURY
      13: {
        segment_start_time: -4734072000, // always
        segment_last_time: 4735368000, // always
        target_code: 199,
        center_code: 1,
        ref_frame: 1, // always // always 1 in planet SPK
        type_of_data: 2, // always // always 2 in planet SPK
        record_start_adress: 4090713, // counted in elements, one need to multiply this by 8 to obtain adress in file
        record_last_adress: 4090724,
      },

      //  VENUS
      14: {
        segment_start_time: -4734072000, // always
        segment_last_time: 4735368000, // always
        target_code: 299,
        center_code: 2,
        ref_frame: 1, // always // always 1 in planet SPK
        type_of_data: 2, // always // always 2 in planet SPK
        record_start_adress: 4090725, // counted in elements, one need to multiply this by 8 to obtain adress in file
        record_last_adress: 4090736,
      },
    },
  },
};

// NAIF names and codes for planets
const planets_names = [
  "SOLAR SYS. BARY.", // 0
  "MERCURY BARYCENTER", // 1
  "VENUS BARYCENTER", // 2
  "EARTH-MOON BARY.", // 3
  "MARS BARYCENTER", // 4
  "JUPITER BARYCENTER", // 5
  "SATURN BARYCENTER", // 6
  "URANUS BARYCENTER", // 7
  "NEPTUNE BARYCENTER", // 8
  "PLUTO BARYCENTER", // 9
  "SUN", // 10
  "MOON", // 301  instead of 11
  "EARTH", // 399 instead of 12
  "MERCURY", // 199 instead of 13
  "VENUS", // 299 instead of 14
];

// finds and returns planet name by naif_id number
function planet_name(naif_id) {
  if (naif_id >= 0 && naif_id <= 10) return planets_names[naif_id];

  let temp_id;

  switch (naif_id) {
    case 199:
    case 13:
      temp_id = 13;
      break;
    case 299:
    case 14:
      temp_id = 14;
      break;
    case 399:
    case 12:
      temp_id = 12;
      break;
    case 301:
    case 11:
      temp_id = 11;
      break;
    /*	case 499:
                temp_id = 15;
                break;
            case 599:
                temp_id = 16;
                break;
            case 699:
                temp_id = 17;
                break;
            case 799:
                temp_id = 18;
                break;
            case 899:
                temp_id = 19;
                break;
            case 999:
                temp_id = 20;
                break; */
    default:
      return "Unknown planet!!!";
    // break;
  }
  return planets_names[temp_id];
}

module.exports = {
  SSB,
  MERCURY,
  VENUS,
  EARTH,
  MARS,
  JUPITER,
  SATURN,
  URANUS,
  NEPTUNE,
  PLUTO,
  SUN,
  MOON,
  MOONtoEARTH,
  EARTH_NOT_BARYCENTER,
  MERCURY_NOT_BARYCENTER,
  VENUS_NOT_BARYCENTER,
  AU,
  RAD_RATIO,
  RAD_PER_ARCSECONDS,
  SEC_TO_RAD,
  SEC_IN_1_DAY,
  MED_SUN_PATH_IN_1_SEC,
  SEC_FOR_88_DEGREES_SUN,
  MED_EPS,
  MIN_EPS,
  MAX_EPS,
  JD2000,
  JD1950,
  DEGREE_RATIO,
  PI,
  monthsArr,
  zodiacNames,
  planetsNumbers,
  planetsArr,
  planetsPower,
  dispositors,
  DE440s,
  hexSortByDeg,
  oneLineInDec,
  oneColorInDec,
  oneToneInDec,
  oneBaseInDec,
  RAD_88_DEGREES,
  planets_names,
  planets_houses,
  signs_sorted_by_deg,
  planet_name,
};
