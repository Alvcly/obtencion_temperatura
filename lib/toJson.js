const convert = require('xml-js');

module.exports = (xml) => {
    const json = convert.xml2json(xml, {compact: true, spaces: 2});    
    return json
}