export enum ProjectDuration {
    OneSemester = '1 семестр',
    TwoSemesters = '2 семестр',
}

export enum ProjectLevel {
    Diagnostic = 'Диагностический проект',
    Educational = 'Учебный проект',
    EducationalApplied = 'Учебно-прикладной проект',
    Applied = 'Прикладной проект',
}

export interface Project {
    ID: number;
    ProjectName: string;
    ProjectGoal: string;
    ProblemHolder: string;
    ProjectDuration: string;
    ProjectLevel: string;
    Barrier: string;
    ExistingSolutions: string;
    Keywords: string;
    Status: string;
}

export interface ProjectData {
    applicant_name: string;
    applicant_email: string;
    applicant_phone: string;
    position_and_organization: string;
    project_duration: ProjectDuration;
    project_level: ProjectLevel;
    problem_holder: string;
    project_goal: string;
    barrier: string;
    existing_solutions: string;
    keywords: string;
    interested_parties: string;
    consultants: string;
    additional_materials: string;
    project_name: string;
}
