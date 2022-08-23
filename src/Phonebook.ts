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
        return contact.id 
    }

    addPhone(id:number, phone:string):void {
        const isContact = this._contacts.find(contact => contact.id === id)
        if(isContact) {
            isContact.phones.push(phone)
        }
        return
    }

    get(id:number):Contact|undefined {
        const isContact = this._contacts.find(contact => contact.id === id)
        return isContact;
    }

    get(name:string):Contact[]|undefined  {
        const areContacts = this._contacts.filter(contact => contact.name === name)
        return areContacts
    }

}