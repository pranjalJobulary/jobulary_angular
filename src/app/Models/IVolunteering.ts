export interface IVolunteering{
    docmentId:string,
    userId:string,
    organisation:string,
    role:string
    cause:string
    location:string
    startDate:string //year
    endDate:string //year
    description:string
    imageUrl:string
    videoUrl:string
    pdfUrl:string
    createdOn:Date
    verifierEmail:string
    verified:boolean,
    verifiedOn:Date
}
