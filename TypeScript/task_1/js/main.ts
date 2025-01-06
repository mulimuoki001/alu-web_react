export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
    }
interface Directors extends Teacher {
    numberOfReports: number;
}

interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => `${firstName[0]}. ${lastName}`
console.log(printTeacher("John", "Doe"));


const director1: Directors = {
    firstName: "John",
    lastName: "Doe",
    location: "New York",
    fullTimeEmployee: false,
    numberOfReports: 17
}

console.log(director1);
