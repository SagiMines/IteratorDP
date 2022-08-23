import { createPhonebook } from "./Phonebook";
import Contact from "./Contact";

const yellowPages = createPhonebook()

// 5
yellowPages.add(new Contact('Shahar', 'Ben-Gurion 14, Netanya', ['09-43433']))
yellowPages.add(new Contact('Sagi', 'HaOnot 6, Ashkelon', ['09-4545645', '052-4564544']))
yellowPages.add(new Contact('Cohen', 'HaGvura 62, Tel-Aviv', ['01-454675']))
yellowPages.add(new Contact('Itzhak', 'Shayetet 6, Lod', ['053-4523344']))
yellowPages.add(new Contact('Shalom', 'Ort 24, Givataim', ['08-6745645', '058-4534424']))
yellowPages.add(new Contact('Moran', 'Emek 2, Modiin', ['09-4545645', '052-4564544', '052-6934324']))
yellowPages.add(new Contact('Moran', 'Shabat 55, Haifa', ['07-4535445']))
yellowPages.add(new Contact('Shani', 'Shoshana 76, Petach-Tikva', ['09-4545645', '050-45633144']))
yellowPages.add(new Contact('Yaakov', 'Nagar 9, Beer-Sheva', ['03-4745645']))
yellowPages.add(new Contact('Simha', 'Herzel 90, Kesaria', ['09-6545645', '055-4533144']))
yellowPages.add(new Contact('Yaakov', 'Sderot-Yerushalaim 90, Ashkelon', ['058-4000064']))

// 6
console.log(yellowPages.size)
yellowPages.add(new Contact('Sagi', 'Sderot-Montifiory, Tel-Aviv', ['057-41212194']))
yellowPages.add(new Contact('Pinchas', 'Hamacabim, Eilat', ['052-12222294']))
console.log(yellowPages.size)

// 7
console.log(yellowPages.get(1))
yellowPages.addPhone(1, '056-4572323')
console.log(yellowPages.get(1))

// 8 + 9
const contacts = yellowPages.get('Yaakov')
// 8
if(contacts !== undefined) {
    for(const contact of contacts) {
        if(contact.id !== undefined){
            yellowPages.addPhone(contact.id, '052-0000022')
        }
    }
    console.log(yellowPages.get('Yaakov'))

    // 9
    console.log(yellowPages.size)
    const lastContactsID = contacts[contacts.length - 1].id
    if( typeof lastContactsID === 'number') {
        yellowPages.remove(lastContactsID)
    }
    console.log(yellowPages.size)

}

// 10 
for(const contact of yellowPages){
    console.log(contact)
 }

console.log()

for(const contact of yellowPages.nameContains('cohen')){
    console.log(contact)
 }



