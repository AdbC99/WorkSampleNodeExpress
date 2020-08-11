var md5 = require('md5');

class Identification {
    constructor(name)
    {
        this.name = name;
    }

    getIdentifier()
    {
        return md5(this.name);
    }
};

module.exports = {
    Identification
}