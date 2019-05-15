export class Course { 
    id:string
    title: string;
    description: string;
    rating: number;
}
  
export const COURSES: Course[] =  [
    { id:"1", title: "Maths", description: "Basic Algebra", rating: 5},
    { id:"2", title: "Geography", description: "Mountains and stuff", rating: 4},
    { id:"3", title: "History", description: "Mostly old stuff", rating: 3}
]