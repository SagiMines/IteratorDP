import { createPhonebook } from "./Phonebook";
import Contact from "./Contact";

const phoneBook = createPhonebook()

// 5
phoneBook.add(new Contact('Shahar', 'Ben-Gurion 14, Netanya', ['09-43433']))
phoneBook.add(new Contact('Sagi', 'HaOnot 6, Ashkelon', ['09-4545645', '052-4564544']))
phoneBook.add(new Contact('Ori', 'HaGvura 62, Tel-Aviv', ['01-454675']))
phoneBook.add(new Contact('Itzhak', 'Shayetet 6, Lod', ['053-4523344']))
phoneBook.add(new Contact('Shalom', 'Ort 24, Givataim', ['08-6745645', '058-4534424']))
phoneBook.add(new Contact('Moran', 'Emek 2, Modiin', ['09-4545645', '052-4564544', '052-6934324']))
phoneBook.add(new Contact('Moran', 'Shabat 55, Haifa', ['07-4535445']))
phoneBook.add(new Contact('Shani', 'Shoshana 76, Petach-Tikva', ['09-4545645', '050-45633144']))
phoneBook.add(new Contact('Yaakov', 'Nagar 9, Beer-Sheva', ['03-4745645']))
phoneBook.add(new Contact('Simha', 'Herzel 90, Kesaria', ['09-6545645', '055-4533144']))
phoneBook.add(new Contact('Yaakov', 'Sderot-Yerushalaim 90, Ashkelon', ['058-4000064']))

// 6
console.log(phoneBook.size)
phoneBook.add(new Contact('Sagi', 'Sderot-Montifiory, Tel-Aviv', ['057-41212194']))
phoneBook.add(new Contact('Pinchas', 'Hamacabim, Eilat', ['052-12222294']))
console.log(phoneBook.size)

// 7
console.log(phoneBook.get(1))
phoneBook.addPhone(1, '056-4572323')
console.log(phoneBook.get(1))

// 8 + 9
const contacts = phoneBook.get('Yaakov')
// 8
if(contacts !== undefined) {
    for(const contact of contacts) {
        if(contact.id !== undefined){
            phoneBook.addPhone(contact.id, '052-0000022')
        }
    }
    console.log(phoneBook.get('Yaakov'))

    // 9
    console.log(phoneBook.size)
    const lastContactsID = contacts[contacts.length - 1].id
    if( typeof lastContactsID === 'number') {
        phoneBook.remove(lastContactsID)
    }
    console.log(phoneBook.size)

}



