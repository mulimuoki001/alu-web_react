interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;  
    workTeacherTasks(): string;
}

export const Director = class Director implements DirectorInterface{
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to Director tasks";
    }
}

export const Teacher = class Teacher implements TeacherInterface{
    workFromHome(): string {
        return "Can not work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

export const createEmployee = (salary: number | string): DirectorInterface|TeacherInterface => {
    if ( typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

console.log(createEmployee(200))
console.log(createEmployee(1000))
console.log(createEmployee("$500"))