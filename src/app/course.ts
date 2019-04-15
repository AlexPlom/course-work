export class Course { 
    title: string;
    description: string;
    rating: number;
}
  
export const COURSES: Course[] =  [
    { title: "Maths", description: "Basic Algebra", rating: 5},
    { title: "Geography", description: "Mountains and stuff", rating: 4},
    { title: "History", description: "Mostly old stuff", rating: 3}
]