/* Exercise */

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
  }

const getPersonInfo = (object) => {
    const {firstName, lastName, age, country, job , skills: [html, css, javascript, react, redux, node, mongodb, python, d3], languages:[amharic, english, suomi]} = object

    return `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${html}, ${css}, ${javascript}, ${react}, ${redux}, ${node}, ${mongodb}, ${python}, and ${d3}. He speaks ${amharic}, ${english} and a little bit of ${suomi}`
}

console.log(getPersonInfo(person))