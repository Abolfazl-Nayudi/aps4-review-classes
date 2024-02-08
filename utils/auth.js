class Authentication {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  verifyData() {
    if (!this.email.endsWith('@gmail.com')) {
      console.log('in email condition');
      throw new Error('email or password incorrect');
    }

    if (this.password.length < 5) {
      console.log('in password condition');
      throw new Error('email or password incorrect');
    }
  }

  async signup() {
    try {
      // check the user is exists or not
      const getUser = await fetch(
        `http://localhost:3000/users?email=${this.email}`
      );
      const user = await getUser.json();

      if (user.length !== 0) {
        return { statusCode: 409, message: 'email already exists', data: '' };
      }

      // create a doucment for the user
      const res = await fetch('http://localhost:3000/users', {
        method: 'POST',
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
        headers: {
          'content-type': 'application/json',
        },
      });
      const data = await res.json();

      return {
        statusCode: 201,
        message: 'user registered successfully',
        data: data,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async login() {
    try {
      // check the user is exists or not
      const getUser = await fetch(
        `http://localhost:3000/users?email=${this.email}`
      );

      const user = await getUser.json();
      console.log(user);
      if (user.length === 0) {
        return {
          statusCode: 404,
          message: 'email or password incorrect',
          data: '',
        };
      }

      if (!(this.password === user[0].password)) {
        console.log('in password condition');
        return {
          statusCode: 404,
          message: 'email or password incorrect',
          data: '',
        };
      }

      return { statusCode: 200, message: 'login successfully', data: user[0] };
    } catch (error) {
      console.log(error);
    }
  }
}

export { Authentication };
