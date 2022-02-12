export interface IHonorsAwards{
  documentID:string
  userID:string
  issuer:string
  field:string
  location:string
  issuingDate:string // date
  descripition:string
  verifierEmail:string
  mediaUrl:string // video or photo or pdf only one
  verified:boolean
  createdOn:Date
  verifiedOn:Date
}
