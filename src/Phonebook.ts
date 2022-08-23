import IPhonebook from "./IPhonebook";
import Contact from "./Contact";

class Phonebook implements IPhonebook {
    size: number
    _contacts: Contact[]
    _idCounter: number

    constructor() {
        this.size = 0
        this._contacts = []
        this._idCounter = 1
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
}

export const createPhonebook = ():IPhonebook => {
    return new Phonebook();
} 

