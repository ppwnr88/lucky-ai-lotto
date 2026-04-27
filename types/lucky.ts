export type LuckyResult = {
  summary: string;
  keywords: string[];
  mainNumbers2D: string[];
  mainNumbers3D: string[];
  secondaryNumbers: string[];
  luckyLevel: number;
  caption: string;
};

export type GenerateLuckyRequest = {
  text: string;
};

export type GenerateLuckyResponse = {
  success: true;
  data: LuckyResult;
};

export type GenerateLuckyErrorResponse = {
  success: false;
  message: string;
};