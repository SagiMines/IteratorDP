"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Phonebook_1 = require("./Phonebook");
var Contact_1 = __importDefault(require("./Contact"));
var phoneBook = (0, Phonebook_1.createPhonebook)();
// 5
phoneBook.add(new Contact_1.default('Shahar', 'Ben-Gurion 14, Netanya', ['09-43433']));
phoneBook.add(new Contact_1.default('Sagi', 'HaOnot 6, Ashkelon', ['09-4545645', '052-4564544']));
phoneBook.add(new Contact_1.default('Ori', 'HaGvura 62, Tel-Aviv', ['01-454675']));
phoneBook.add(new Contact_1.default('Itzhak', 'Shayetet 6, Lod', ['053-4523344']));
phoneBook.add(new Contact_1.default('Shalom', 'Ort 24, Givataim', ['08-6745645', '058-4534424']));
phoneBook.add(new Contact_1.default('Moran', 'Emek 2, Modiin', ['09-4545645', '052-4564544', '052-6934324']));
phoneBook.add(new Contact_1.default('Moran', 'Shabat 55, Haifa', ['07-4535445']));
phoneBook.add(new Contact_1.default('Shani', 'Shoshana 76, Petach-Tikva', ['09-4545645', '050-45633144']));
phoneBook.add(new Contact_1.default('Yaakov', 'Nagar 9, Beer-Sheva', ['03-4745645']));
phoneBook.add(new Contact_1.default('Simha', 'Herzel 90, Kesaria', ['09-6545645', '055-4533144']));
phoneBook.add(new Contact_1.default('Yaakov', 'Sderot-Yerushalaim 90, Ashkelon', ['058-4000064']));
// 6
console.log(phoneBook.size);
phoneBook.add(new Contact_1.default('Sagi', 'Sderot-Montifiory, Tel-Aviv', ['057-41212194']));
phoneBook.add(new Contact_1.default('Pinchas', 'Hamacabim, Eilat', ['052-12222294']));
console.log(phoneBook.size);
// 7
console.log(phoneBook.get(1));
phoneBook.addPhone(1, '056-4572323');
console.log(phoneBook.get(1));
// 8 + 9
var contacts = phoneBook.get('Yaakov');
// 8
if (contacts !== undefined) {
    for (var _i = 0, contacts_1 = contacts; _i < contacts_1.length; _i++) {
        var contact = contacts_1[_i];
        if (contact.id !== undefined) {
            phoneBook.addPhone(contact.id, '052-0000022');
        }
    }
    console.log(phoneBook.get('Yaakov'));
    // 9
    console.log(phoneBook.size);
    var lastContactsID = contacts[contacts.length - 1].id;
    if (typeof lastContactsID === 'number') {
        phoneBook.remove(lastContactsID);
    }
    console.log(phoneBook.size);
}
console.log(phoneBook.get('Yaakov'));
