export interface IOMDBResponse{
    Title:string;
    Year:string;
    Director:string;
    Poster:string;
    Error:string;
    Ratings:Ratings[];
}

interface Ratings {
    Source:string;
    Value:string;
}