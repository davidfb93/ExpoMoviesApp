
export interface Movie {
    id: number,
    title: string,
    originalTitle: string,
    description: string,
    releaseDate: Date,
    rating: number,
    poster: string,
    backdrop: string,
}

export interface CompleteMovie extends Movie {
    genres: string[],
    runtime: number,
    budget: number,
    productionCompanies: string[],

}