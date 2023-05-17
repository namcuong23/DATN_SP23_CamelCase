interface IPost {
    _id: string;
    job_name: string;
    job_description: string;
    job_salary: number;
    working_form: string;
    number_of_recruits: number;
    requirements: string;
    gender: string;
    work_location: string;
    post_status: boolean | string;
    user_id: string;
}

export default IPost