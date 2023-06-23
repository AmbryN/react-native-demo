const admin = {
    email: 'admin@test.com',
    password: 'testtest'
}

export const validateLogin = (loginAttempt) => {
        return loginAttempt.email === admin.email && loginAttempt.password === admin.password;
}
