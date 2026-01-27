export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    type: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
    value: number;
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "주말에 갑자기 친구가 만나자고 하면?",
    options: [
      { text: "오히려 좋아! 당장 나갈 준비를 한다.", type: 'E', value: 1 },
      { text: "갑스러운 만남은 조금 당황스럽다. 집에서 쉬고 싶다.", type: 'I', value: 1 }
    ]
  },
  {
    id: 2,
    text: "새로운 모임에 갔을 때 나는?",
    options: [
      { text: "먼저 말을 걸며 분위기를 주도한다.", type: 'E', value: 1 },
      { text: "구석에서 조용히 상황을 지켜보는 편이다.", type: 'I', value: 1 }
    ]
  },
  {
    id: 3,
    text: "어떤 문제를 해결할 때 나는?",
    options: [
      { text: "현실적인 데이터를 바탕으로 실질적인 대안을 찾는다.", type: 'S', value: 1 },
      { text: "직관과 미래의 가능성을 고려하여 창의적인 방법을 찾는다.", type: 'N', value: 1 }
    ]
  },
  {
    id: 4,
    text: "상상을 할 때 나는?",
    options: [
      { text: "구체적으로 일어날 법한 일을 상상한다.", type: 'S', value: 1 },
      { text: "꼬리에 꼬리를 무는 엉뚱한 상상을 즐긴다.", type: 'N', value: 1 }
    ]
  },
  {
    id: 5,
    text: "친구가 슬픈 일을 겪었을 때 나의 첫 반응은?",
    options: [
      { text: "어쩌다 그런 일이... 마음이 정말 아프겠다 (공감).", type: 'F', value: 1 },
      { text: "왜 그런 일이 생겼어? 해결 방법은 뭐야? (분석).", type: 'T', value: 1 }
    ]
  },
  {
    id: 6,
    text: "영화를 보고 나서 나는?",
    options: [
      { text: "영상이 예쁘고 감동적이었어. 여운이 많이 남아.", type: 'F', value: 1 },
      { text: "스토리가 개연성 있었어. 연출이 논리적이었어.", type: 'T', value: 1 }
    ]
  },
  {
    id: 7,
    text: "여행 계획을 세울 때 나는?",
    options: [
      { text: "시간 단위로 꼼꼼하게 일정을 짠다.", type: 'J', value: 1 },
      { text: "장소만 정하고 그때그때 기분에 따라 움직인다.", type: 'P', value: 1 }
    ]
  },
  {
    id: 8,
    text: "과제를 시작할 때 나는?",
    options: [
      { text: "미리미리 계획하고 기한보다 일찍 끝낸다.", type: 'J', value: 1 },
      { text: "미루고 미루다 벼락치기로 끝낸다.", type: 'P', value: 1 }
    ]
  },
  {
    id: 9,
    text: "사람들이 많은 곳에서 기가 빨리나?",
    options: [
      { text: "아니, 오히려 에너지를 얻는다!", type: 'E', value: 1 },
      { text: "그렇다. 집에 와야 에너지가 충전된다.", type: 'I', value: 1 }
    ]
  },
  {
    id: 10,
    text: "설명서를 볼 때 나는?",
    options: [
      { text: "처음부터 끝까지 꼼꼼하게 읽는다.", type: 'S', value: 1 },
      { text: "대충 훑어보거나 일단 직접 만져본다.", type: 'N', value: 1 }
    ]
  },
  {
    id: 11,
    text: "비판을 들었을 때 나는?",
    options: [
      { text: "나를 비난하는 것 같아 상처를 받는다.", type: 'F', value: 1 },
      { text: "비판의 내용이 타당한지부터 생각한다.", type: 'T', value: 1 }
    ]
  },
  {
    id: 12,
    text: "약속 시간이 다가오면?",
    options: [
      { text: "최소 5~10분 전에는 도착해 있어야 마음이 편하다.", type: 'J', value: 1 },
      { text: "딱 맞춰 가거나 상황에 따라 조금 늦을 때도 있다.", type: 'P', value: 1 }
    ]
  }
];
