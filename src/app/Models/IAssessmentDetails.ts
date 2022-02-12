export interface IAssessmentDetails {
  assessmentId: string;
  tqCode: string;
  tqQuestion: string;
  tqOption1: boolean;
  tqOption2: boolean;
  tqOption3: boolean;
  tqOption4: boolean;
  tqCorrectAnswer: bigint;
  tqMarks: bigint;
  tqVersionOfQb: string;
  tqLangauge: string;
  tqImage: string;
  tqNos: string;
  tqDifficultyLevel: string;
  tqNosNavigation: null;
  tqVersionOfQbNavigation: null;
}