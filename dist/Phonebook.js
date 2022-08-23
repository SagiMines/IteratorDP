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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPhonebook = void 0;
var Phonebook = /** @class */ (function () {
    function Phonebook() {
        this.size = 0;
        this._contacts = [];
        this._idCounter = 1;
        this._index = 0;
    }
    Phonebook.prototype.add = function (contact) {
        contact.id = this._idCounter++;
        this._contacts.push(contact);
        this.size += 1;
        return contact.id;
    };
    Phonebook.prototype.addPhone = function (id, phone) {
        var isContact = this._contacts.find(function (contact) { return contact.id === id; });
        if (isContact) {
            isContact.phones.push(phone);
        }
        return;
    };
    Phonebook.prototype.get = function (value) {
        if (typeof value === 'number') {
            var isContact = this._contacts.find(function (contact) { return contact.id === value; });
            return isContact;
        }
        else if (typeof value === 'string') {
            var areContacts = this._contacts.filter(function (contact) { return contact.name === value; });
            return areContacts;
        }
        return undefined;
    };
    Phonebook.prototype.remove = function (id) {
        var e_1, _a;
        var counter = 0;
        var found;
        try {
            for (var _b = __values(this._contacts), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contact = _c.value;
                if (contact.id === id) {
                    found = contact;
                    this._contacts.splice(counter, 1);
                    this.size -= 1;
                    return found;
                }
                counter += 1;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return undefined;
    };
    Phonebook.prototype.sortAlphabetic = function () {
        this._contacts.sort(function (a, b) { return a.name.toLowerCase().localeCompare(b.name.toLowerCase()); });
    };
    Phonebook.prototype.nameContains = function (str) {
        var result = this._contacts.filter(function (contact) { return contact.name.toLowerCase().includes(str.toLowerCase()); });
        var iter = result[Symbol.iterator]();
        return iter;
    };
    Phonebook.prototype.next = function () {
        if (this._index === 0) {
            this.sortAlphabetic();
        }
        if (this._index === this._contacts.length) {
            return {
                done: true
            };
        }
        return {
            done: false,
            value: this._contacts[this._index++]
        };
    };
    Phonebook.prototype[Symbol.iterator] = function () {
        return this;
    };
    return Phonebook;
}());
var createPhonebook = function () {
    return new Phonebook();
};
exports.createPhonebook = createPhonebook;
