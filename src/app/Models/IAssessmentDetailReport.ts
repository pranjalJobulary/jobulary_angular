export interface IAssessmentDetailsReport {
  userName: string;
  userId: string;
  totalTime: string;
  assessmentName: string;
  assessmentId: string;
  createdBy: Date;
  totalNoOfQuestion: string;
  attemptedQuestion: bigint;
  passingPercentage: bigint;
  totalCorrectAnswer: bigint;
  totalWrongAnswer: bigint;
  result: string;
  questionNo: string;
  correctAnswer: string;
  yourAnswer: string;
  attemptTime: Date;
  status: boolean;
}
