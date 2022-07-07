/* const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //tuple
} = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
}; */

//person.role.push('admin');  works anyway

//person.role = [0, 'admin', 'author']; error

enum Role {
  ADMIN = 5,
  READ_ONLY = 10,
  AUTHOR = 'author',
}

const person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log('is admin');
}
