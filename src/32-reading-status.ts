export {};

const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    isRead: true
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false
  }
];

const showStatus = (books:any) => {
  for (var i=0; i<books.length;i++){
    if (books[i].isRead){
      console.log(`Already read '${books[i].title}' by ${books[i].author}.`);
    }
    else console.log(`You still need to read '${books[i].title}' by ${books[i].author}.`);
  }
};

showStatus(library);

/*
  Expected output:

  Already read 'The Road Ahead' by Bill Gates.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/
