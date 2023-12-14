export interface ISignUp {
    name: string,
    email: string,
    password: string,
    userType: string,
    ra: number,
    course: string
}

export interface ISignIn {
    email: string,
    password: string
}