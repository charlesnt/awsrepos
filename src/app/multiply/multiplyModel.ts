export class MultiplyObject {

    name: string;
    age: number;
    above18: boolean;
    //detailObj : Details;

}

export class Details {
    name:string;
    age: string;
    dob: string;
    skills: string[];
    qualifications: Qualifications[];
    hobbies: Hobbies;
}

export class Qualifications {
    degree: string;
    percentage: string;
    passoutyear: string;
}

export class Hobbies {
    indoor: string;
    outdoor: string;
}