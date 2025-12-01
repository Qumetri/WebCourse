class ZipValidator {
    static isZipValid(zipCode) {
        let str = String(zipCode)
        return /^[0-9]{5}$/.test(str);
    }

    static isZipFixable(zipCode) {
        let str = String(zipCode)
        return /^[0-9]{0,5}$/.test(str);
    }

    static fixZip(zipCode) {
        let str = String(zipCode)
        if (!ZipValidator.isZipFixable(str)) {
            throw new Error("Zip code cannot be fixed");
        }
        return str.padStart(5, '0')
    }
}

console.log(ZipValidator.isZipFixable(''))
