export interface User {
  username: string;
  password: string;
  role: 'admin' | 'general';
}

export const users: User[] = [
  {
    username: 'roberto.morel',
    password: '123456',
    role: 'admin',
  },
  {
    username: 'general',
    password: '123456',
    role: 'general',
  },
  {
    username: 'jo.pinheiro',
    password: '123456',
    role: 'admin',
  },
];

// const generateRandomUsername = () => {
//     const adjectives = ['happy', 'sleepy', 'grumpy', 'dopey', 'sneezy', 'bashful', 'doc', 'fluffy'];
//     const nouns = ['dwarf', 'puppy', 'kitten', 'owl', 'hamster', 'rabbit', 'fox', 'bear'];
//     const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
//     const nounIndex = Math.floor(Math.random() * nouns.length);
//     return `${adjectives[adjectiveIndex]}_${nouns[nounIndex]}`;
// };

// const generateRandomPassword = () => {
//     return Math.random().toString(36).slice(-8);
// };

// for (let i = 0; i < 5; i++) {
//     const username = generateRandomUsername();
//     const password = generateRandomPassword();
//     const role = i === 0 ? 'admin' : 'general';
//     users.push({ username, password, role });
// }
