"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var e_1, _a, e_2, _b, e_3, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var Phonebook_1 = require("./Phonebook");
var Contact_1 = __importDefault(require("./Contact"));
var yellowPages = (0, Phonebook_1.createPhonebook)();
// 5
yellowPages.add(new Contact_1.default('Shahar', 'Ben-Gurion 14, Netanya', ['09-43433']));
yellowPages.add(new Contact_1.default('Sagi', 'HaOnot 6, Ashkelon', ['09-4545645', '052-4564544']));
yellowPages.add(new Contact_1.default('Cohen', 'HaGvura 62, Tel-Aviv', ['01-454675']));
yellowPages.add(new Contact_1.default('Itzhak', 'Shayetet 6, Lod', ['053-4523344']));
yellowPages.add(new Contact_1.default('Shalom', 'Ort 24, Givataim', ['08-6745645', '058-4534424']));
yellowPages.add(new Contact_1.default('Moran', 'Emek 2, Modiin', ['09-4545645', '052-4564544', '052-6934324']));
yellowPages.add(new Contact_1.default('Moran', 'Shabat 55, Haifa', ['07-4535445']));
yellowPages.add(new Contact_1.default('Shani', 'Shoshana 76, Petach-Tikva', ['09-4545645', '050-45633144']));
yellowPages.add(new Contact_1.default('Yaakov', 'Nagar 9, Beer-Sheva', ['03-4745645']));
yellowPages.add(new Contact_1.default('Simha', 'Herzel 90, Kesaria', ['09-6545645', '055-4533144']));
yellowPages.add(new Contact_1.default('Yaakov', 'Sderot-Yerushalaim 90, Ashkelon', ['058-4000064']));
// 6
console.log(yellowPages.size);
yellowPages.add(new Contact_1.default('Sagi', 'Sderot-Montifiory, Tel-Aviv', ['057-41212194']));
yellowPages.add(new Contact_1.default('Pinchas', 'Hamacabim, Eilat', ['052-12222294']));
console.log(yellowPages.size);
// 7
console.log(yellowPages.get(1));
yellowPages.addPhone(1, '056-4572323');
console.log(yellowPages.get(1));
// 8 + 9
var contacts = yellowPages.get('Yaakov');
// 8
if (contacts !== undefined) {
    try {
        for (var contacts_1 = __values(contacts), contacts_1_1 = contacts_1.next(); !contacts_1_1.done; contacts_1_1 = contacts_1.next()) {
            var contact = contacts_1_1.value;
            if (contact.id !== undefined) {
                yellowPages.addPhone(contact.id, '052-0000022');
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (contacts_1_1 && !contacts_1_1.done && (_a = contacts_1.return)) _a.call(contacts_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    console.log(yellowPages.get('Yaakov'));
    // 9
    console.log(yellowPages.size);
    var lastContactsID = contacts[contacts.length - 1].id;
    if (typeof lastContactsID === 'number') {
        yellowPages.remove(lastContactsID);
    }
    console.log(yellowPages.size);
}
try {
    // 10 
    for (var yellowPages_1 = __values(yellowPages), yellowPages_1_1 = yellowPages_1.next(); !yellowPages_1_1.done; yellowPages_1_1 = yellowPages_1.next()) {
        var contact = yellowPages_1_1.value;
        console.log(contact);
        //contacts will be delivered in alphabetical order
        //Try with O(N) complexity
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (yellowPages_1_1 && !yellowPages_1_1.done && (_b = yellowPages_1.return)) _b.call(yellowPages_1);
    }
    finally { if (e_2) throw e_2.error; }
}
console.log();
try {
    for (var _d = __values(yellowPages.nameContains('cohen')), _e = _d.next(); !_e.done; _e = _d.next()) {
        var contact = _e.value;
        console.log(contact);
    }
}
catch (e_3_1) { e_3 = { error: e_3_1 }; }
finally {
    try {
        if (_e && !_e.done && (_c = _d.return)) _c.call(_d);
    }
    finally { if (e_3) throw e_3.error; }
}
