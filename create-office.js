// wd create-entity create-office.js "Minister for X"
module.exports = (label) => {
  return {
    type: 'item',
    labels: {
      en: label,
    },
    descriptions: {
      en: 'Latvian government position',
    },
    claims: {
      P31:   { value: 'Q294414' }, // instance of: public office
      P279:  { value: 'Q83307'  }, // subclas of: minister
      P17:   { value: 'Q211'    }, // country: Latvia
      P1001: { value: 'Q211'    }, // jurisdiction: Latvia
      P361: {
        value: 'Q2502537',         // part of: Government of Latvia
        references: {
          P854: 'https://www.mk.gov.lv/en/cabinet-composition'
        },
      }
    }
  }
}
