/* Instructions 
Scenario: 
You are tasked with designing a library management system. The library 
lends out various types of items such as books, DVDs, and magazines. While 
all items share some common properties (e.g., title, id, isAvailable), each 
type has unique properties and behaviors. For example: 
● Books have an author and a genre. 
● DVDs have a director and duration. 
● Magazines have an issueNumber and publisher. 
Tasks 
1. Step 1: Create a Base Class 
○ Define a class LibraryItem to represent shared properties 
(title, id, isAvailable) and methods (e.g., checkOut() and 
returnItem()).*/

class LibraryItem {
    constructor (title, id, isAvailable){
    this.title = title;
    this.id = id;
    this.isAvailable = isAvailable;
    }
    checkout(){
        
        if(this.isAvailable === true){
       console.log(`This ${this.title} is available for checkout.`) 
        }else{
        console.log(`This ${this.title} is not available for checkout.`)
        }
    }
    returnItem(){
        if(this.isAvailable === true){
            console.log(`This ${this.title} has been returned.`) 
             }else{
             console.log(`This ${this.title} has not been returned.`)
    }
    }


    /*2. Step 2: Extend the Base Class 
    ○ Create child classes Book, DVD, and Magazine that inherit from 
    LibraryItem. 
    ○ Add unique properties and methods for each child class: 
    ■ Book: Add properties like author and genre. 
    ■ DVD: Add properties like director and duration. 
    ■ Magazine: Add properties like issueNumber and publisher.*/
}
    class Book extends LibraryItem {
        constructor(title, id, isAvailable, author, genre){
            super(title, id, isAvailable);
            this.author = author;
            this.genre = genre;
            }
    }

    class DVD extends LibraryItem {
        constructor(title, id, isAvailable, director, duration){
            super(title, id, isAvailable);
            this.director = director;
            this.duration = duration;
            }
    }
    class Magazine extends LibraryItem {
        constructor(title, id, isAvailable, issueNumber, publisher){
            super(title, id, isAvailable);
            this.issueNumber = issueNumber;
            this.publisher = publisher;
            }
    }
    /*3. Step 3: Instantiate Objects 
    ○ Create instances of each class and test the shared and unique 
       methods. */
let book1 = new Book ('Absent Life',123, true,"Blake Pierce","Mystery");
console.log(book1);

let movie1 = new DVD ('Joe Dirt', 456 , false,'Dennie Gordon ', 90);
console.log(movie1);

let magazine1 = new Magazine ('US Weekly', 789 , true, 106, 'American Media Inc');
console.log(magazine1);

/*4. Step 4: Test the Inheritance 
○ Use inherited methods like checkOut() and returnItem() to 
manage the availability of items. 
○ Test accessing and displaying unique properties of each child 
class.*/

book1.checkout();
movie1.checkout();
magazine1.checkout();

book1.returnItem();
movie1.returnItem();
magazine1.returnItem();