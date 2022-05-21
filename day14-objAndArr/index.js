    // start with strings, numbers and booleans
    // even if you change the variable that are referencing other variables, 
    //other variables are not changing just stay the same
    // let age= 100;
    // let age2= age;
    // console.log(age, age2)
    // age=200
    // console.log(age, age2)

    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // it will always reference back if you make any change

    // and we want to make a copy of it.
    const team = players

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
    const team2 = players.slice()

    // or create a new array and concat the old one in
    const team3 = [].concat(players)

    // or use the new ES6 Spread
    const team4 = [...players]

    const team5 = Array.from(players)

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:
    // this dont work either
    const captain = person

    console.log(person, captain)

    // how do we take a copy instead?
    const cap2 = Object.assign({}, person, {age: 100})
    console.log(captain, cap2)

    // the object ...spread
    const cap3 = {...person}

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
    const may = {
        name: 'May Choi',
        age: 31,
        social: {
            twitter: '@mayChoi',
            facebook: 'maychoi.developer',
            insta: {petId:'mong',
                    id:'mangolassi'}
        }
      }

    const may2 = Object.assign({}, may)

    // full copy of the object (deep clone)
    const may3 = JSON.parse(JSON.stringify(may))

    console.clear();
    console.log(may, may2, may3)