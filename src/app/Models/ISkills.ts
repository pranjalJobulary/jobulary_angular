export interface ISkills{
  documentId:string
  userID:string,
  certification:string
  acquiredthisSkill:string // How you acquired this skill eg : education/self-learn/practice/experience
  rateExpertise: string // good/very good/normal/low
  proof:string // it can be url link /photo/video/document
  description:string
  createdOn:Date
  verifierMail:string
  verified:boolean
  verifiedOn:Date
}
