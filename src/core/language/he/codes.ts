import HebrewMatrix = require('./matrix');

const codes = Object.freeze({
    ALEF: 1488,
    AYIN: 1506,
    BET: 1489,
    DALET: 1491,
    GIMEL: 1490,
    HE: 1492,
    HET: 1495,
    KAF: 1499,
    KAF_SOFIT: 1498,
    LAMED: 1500,
    MEM: 1502,
    MEM_SOFIT: 1501,
    NUN: 1504,
    NUN_SOFIT: 1503,
    PE: 1508,
    PE_SOFIT: 1507,
    QOF: 1511,
    RESH: 1512,
    SAMEKH: 1505,
    SHIN: 1513,
    TAV: 1514,
    TET: 1496,
    ZADI: 1510,
    ZADI_SOFIT: 1509,
    VAV: 1493,
    YOD: 1497,
    ZAYIN: 1494,

    /* niqqud */

    DAGESH: 1468,
    MAPIQ: 1468,
    DAGESH_OR_MAPIQ: 1468,
    HATAF_PATACH: 1458,
    HATAF_QAMAZ: 1459,
    HATAF_SEGOL: 1457,
    HIRIQ: 1460,
    HOLAM: 1465,
    METEG: 1469,
    PATACH: 1463,
    QAMAZ: 1464,
    QUBBUZ: 1467,
    RAFE: 1471,
    SEGOL: 1462,
    SHEVA: 1456,
    SHIN_DOT: 1473,
    SIN_DOT: 1474,
    ZEIRE: 1461,

    /* punctuation */

    GERESH: 1523,
    GERSHAYIM: 1524,
    MAQAF: 1470,
    PASEQ: 1472,
    SOF_PASUQ: 1475,
});

export = (codes as HebrewMatrix<number>);
