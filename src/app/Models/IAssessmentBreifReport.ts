export interface IAssessmentBreifReport {
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
}
