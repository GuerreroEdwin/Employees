export interface Welcome {
    status:  string;
    data:    Datum[];
    message: string;
}

export interface Datum {
    id:              number;
    employee_name:   string;
    employee_salary: number;
    employee_age:    number;
    profile_image:   string;
}
