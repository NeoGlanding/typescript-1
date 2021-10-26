type mandatory = ['TypeScript', 'Javascript']

type profile = {
    name: string;
    age: number;
    education: string;
    mandatory: mandatory
}

let myProfile : profile = {
    name: 'Muhammad Ihsan Abdurrahman',
    age: 18,
    education: 'SMK',
    mandatory: ['TypeScript', 'Javascript']
}

console.log(myProfile)