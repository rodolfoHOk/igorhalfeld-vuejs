const { v4: uuidv4 } = require('uuid');

// const jwt = require('jsonwebtoken');
// const { JWT_SECRET } = process.env;

function CreateUserHandler(db) {
  async function getLoggerUser(ctx) {
    const { id } = ctx.state.user;
    // const token = ctx.headers.authorization?.split(' ')[1];
    // if (!token) {
    //   ctx.status = 401;
    //   ctx.body = { error: 'Unauthorized' };
    //   return;
    // }
    // const decodedToken = jwt.verify(token, JWT_SECRET);
    // const id = decodedToken.id;

    const user = await db.readOneById('users', id);
    if (!user) {
      ctx.status = 404;
      ctx.body = { error: 'Not found' };
      return;
    }

    const userResponse = {
      ...user,
      apiKey: user.apiKey[user.apiKey.length - 1],
    };

    delete userResponse.password;
    ctx.status = 200;
    ctx.body = userResponse;
  }

  async function generateApiKey(ctx) {
    const apiKey = uuidv4();

    const { id } = ctx.state.user;

    const user = await db.readOneById('users', id);
    const updated = await db.update('users', id, {
      apiKey: [...user.apiKey, apiKey],
    });
    if (updated) {
      ctx.status = 202;
      ctx.body = { apiKey };
      return;
    }
    ctx.status = 422;
    ctx.body = { error: 'User not updated' };
  }

  async function create(ctx) {
    const { email, password, name } = ctx.request.body;

    if (!email) {
      ctx.status = 400;
      ctx.body = { error: 'email is empty' };
      return;
    }
    if (!password) {
      ctx.status = 400;
      ctx.body = { error: 'password is empty' };
      return;
    }
    if (!name) {
      ctx.status = 400;
      ctx.body = { error: 'name is empty' };
      return;
    }

    const user = {
      id: uuidv4(),
      name,
      email,
      password,
      apiKey: [uuidv4()],
      createdAt: new Date().getTime(),
    };

    const inserted = await db.insert('users', user);
    if (inserted) {
      ctx.status = 201;
      ctx.body = user;
      return;
    }

    ctx.status = 422;
    ctx.body = { error: 'User not created' };
  }

  return {
    create,
    generateApiKey,
    getLoggerUser,
  };
}

module.exports = CreateUserHandler;
