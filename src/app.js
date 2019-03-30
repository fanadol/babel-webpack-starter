import '@babel/polyfill'
import { person, hello } from './lib'

console.log(person.name);

console.log(hello('Guys'));

const getPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    return data;
};

getPost().then(posts => console.log(posts))