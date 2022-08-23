import IPhonebook from "./IPhonebook";
import Contact from "./Contact";

class Phonebook implements IPhonebook {
    size: number
    _contacts: Contact[]
    _idCounter: number
    _index: number

    constructor() {
        this.size = 0
        this._contacts = []
        this._idCounter = 1
        this._index = 0
    }

    add(contact:Contact):number {
        contact.id = this._idCounter++ 
        this._contacts.push(contact)
        this.size += 1 
        return contact.id 
    }

    addPhone(id:number, phone:string):void {
        const isContact = this._contacts.find(contact => contact.id === id)
        if(isContact) {
            isContact.phones.push(phone)
        }
        return
    }

    get(id:number):Contact|undefined;
    get(name:string):Contact[]|undefined;
    get(value: number | string):Contact|Contact[]|undefined {
        if(typeof value === 'number') {
            const isContact = this._contacts.find(contact => contact.id === value)
            return isContact;
        }
        else if(typeof value === 'string') {
            const areContacts = this._contacts.filter(contact => contact.name === value)
            return areContacts
        }
        return undefined
    
    }

    remove(id:number):Contact|undefined {
        let counter: number = 0
        let found: Contact;
        for(const contact of this._contacts) {
            if(contact.id === id) {
                found = contact
                this._contacts.splice(counter, 1)
                this.size -= 1
                return found
            }
            counter += 1
        }
        return undefined
    }

    sortAlphabetic():void {
        this._contacts.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    }

    nameContains(str:string): IterableIterator<Contact> {
        const result = this._contacts.filter(contact => contact.name.toLowerCase().includes(str.toLowerCase()))
        const iter = result[Symbol.iterator]()
        return iter
    }

    next() {
        if(this._index === 0) {
            this.sortAlphabetic()
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
    }

    [Symbol.iterator]() {
        return this;
      }
}

export const createPhonebook = ():IPhonebook => {
    return new Phonebook();
} 

