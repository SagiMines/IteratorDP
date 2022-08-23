"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPhonebook = void 0;
var Phonebook = /** @class */ (function () {
    function Phonebook() {
        this.size = 0;
        this._contacts = [];
        this._idCounter = 1;
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
        var counter = 0;
        var found;
        for (var _i = 0, _a = this._contacts; _i < _a.length; _i++) {
            var contact = _a[_i];
            if (contact.id === id) {
                found = contact;
                this._contacts.splice(counter, 1);
                this.size -= 1;
                return found;
            }
            counter += 1;
        }
        return undefined;
    };
    return Phonebook;
}());
var createPhonebook = function () {
    return new Phonebook();
};
exports.createPhonebook = createPhonebook;
