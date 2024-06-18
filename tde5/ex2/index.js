// CJS
const { faker, RandomModule } = require('@faker-js/faker');

function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

const USERS = faker.helpers.multiple(createRandomUser, {
  count: 5,
});

const chamarPessoa = (randomUser) =>{
    return {
        username: randomUser.username,
        email: randomUser.email,
        birthdate: randomUser.birthdate,
      };
}
const novaPessoa = createRandomUser()

  console.log(chamarPessoa(novaPessoa))