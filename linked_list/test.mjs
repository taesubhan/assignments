import {LinkedList} from './linkedList.mjs';

function check(list) {
    console.log(list.toString());
    console.log(list.size);
    console.log(list.head);
    console.log(list.tail);
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend('lizard');
list.prepend('capybara');

check(list);

// console.log(list.at(3));
// console.log(list.contains('dog'));
// console.log(list.contains('dragon'));
// console.log(list.pop());
// check(list);
// console.log(list.find('parrot'));
// list.insertAt('komododragon', 8);
// list.removeAt(7)
// check(list);