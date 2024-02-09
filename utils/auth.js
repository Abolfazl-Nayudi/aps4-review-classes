class Authentication {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  verifyData() {
    // console.log(this.email);
    // console.log(this.password);
    if (!this.email.endsWith('@gmail.com')) {
      throw new Error('emailError');
    }

    if (this.password.length < 5) {
      throw new Error('passwordError');
    }
  }

  async signup() {
    try {
      const getUser = await fetch(
        `http://localhost:3000/users?email=${this.email}`
      );
      const user = await getUser.json();

      if (user.length !== 0) {
        return {
          statusCode: 409,
          message: 'the email is already exists',
          data: '',
        };
      }

      const createUser = await fetch('http://localhost:3000/users', {
        method: 'POST',
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
        headers: {
          'content-type': 'application/json',
        },
      });
      const data = await createUser.json();

      return { statusCode: 201, message: 'signed up successfully', data };
    } catch (error) {
      console.log(error);
    }
  }

  async singin() {
    const getUser = await fetch(
      `http://localhost:3000/users?email=${this.email}`
    );
    const user = await getUser.json();
    console.log(user);
    if (user.length < 1) {
      console.log('email condition');
      return {
        statusCode: 404,
        message: 'email or password is incorrect',
        data: '',
      };
    }

    if (user[0].password !== this.password) {
      // console.log('password condition');
      // console.log(user.password);
      // console.log(this.password);
      return {
        statusCode: 404,
        message: 'email or password is incorrect',
        data: '',
      };
    }

    return {
      statusCode: 200,
      message: 'logged in successfully',
      data: user[0],
    };
  }
}

// named export

export { Authentication };

// default export
// export default Authentication;
