export interface MBTIResult {
    type: string;
    title: string;
    description: string;
    traits: string[];
    strengths: string[];
    weaknesses: string[];
    matches: {
        good: string;
        bad: string;
    };
    advice: string;
}

export const mbtiResults: Record<string, MBTIResult> = {
    "INTJ": {
        type: "INTJ",
        title: "용의주도한 전략가",
        description: "모든 일에 계획이 있으며, 상상력이 풍부하고 결정이 빠릅니다.",
        traits: ["전략적", "독립적", "논리적"],
        strengths: ["높은 분석력", "독창적 사고", "결단력"],
        weaknesses: ["타인에 대한 무관심", "냉담함", "지나친 완벽주의"],
        matches: { good: "ENFP", bad: "ESFJ" },
        advice: "자신의 높은 기준을 타인에게도 똑같이 적용하려다 보면 갈등이 생길 수 있습니다. 완벽하지 않더라도 동료들의 노력 그 자체를 인정하는 연습이 필요합니다."
    },
    "INTP": {
        type: "INTP",
        title: "논리적인 사색가",
        description: "끊임없이 새로운 지식을 갈구하며 혁신적인 해결책을 찾아냅니다.",
        traits: ["창의적", "객관적", "열린 마음"],
        strengths: ["지적 호기심", "유연한 사고", "정확한 분석"],
        weaknesses: ["실행력 부족", "불안감", "사회적 둔감"],
        matches: { good: "ENTJ", bad: "ISFJ" },
        advice: "생각은 깊지만 실행으로 옮기는 속도가 더딜 수 있습니다. 완벽한 계획보다는 '일단 시작하기'를 목표로 작은 실천부터 옮겨보세요."
    },
    "ENTJ": {
        type: "ENTJ",
        title: "대담한 통솔자",
        description: "항상 목표를 향해 나아가며, 대담하고 상상력이 풍부한 리더입니다.",
        traits: ["지도력", "결단력", "자신감"],
        strengths: ["효율성", "의지력", "전략적 사고"],
        weaknesses: ["독단적", "참을성 부족", "감정 무시"],
        matches: { good: "INFP", bad: "ISFP" },
        advice: "효율성만큼이나 중요한 것이 구성원들의 감정적 지지입니다. 때로는 '빠른 결과'보다 '함께 가는 과정'에 더 집중해보세요."
    },
    "ENTP": {
        type: "ENTP",
        title: "뜨거운 논쟁을 즐기는 변론가",
        description: "지적인 도전을 두려워하지 않으며, 영리하고 호기심이 많습니다.",
        traits: ["기발함", "재치", "에너지"],
        strengths: ["브레인스토밍 능력", "카리스마", "학습 속도"],
        weaknesses: ["논의를 위한 논쟁", "집중력 분산", "관리 소홀"],
        matches: { good: "INFJ", bad: "ISFJ" },
        advice: "새로운 아이디어는 많지만 마무리가 약할 수 있습니다. 이미 벌여놓은 일들을 하나씩 매듭짓는 습관을 들이면 더 큰 성과를 거둘 것입니다."
    },
    "INFJ": {
        type: "INFJ",
        title: "선으희 옹호자",
        description: "조용하고 신비로우며 샘솟는 영감으로 사람들에게 동기를 부여합니다.",
        traits: ["통찰력", "이상주의", "신비로움"],
        strengths: ["이타적", "통찰력 있는", "결정력"],
        weaknesses: ["예민함", "철저한 프라이버시", "번아웃 위험"],
        matches: { good: "ENTP", bad: "ESTP" },
        advice: "세상의 고통에 너무 깊이 공감하다 보면 본인의 에너지가 쉽게 고갈될 수 있습니다. 정기적으로 혼자만의 시간을 가지며 자신을 돌봐주세요."
    },
    "INFP": {
        type: "INFP",
        title: "열정적인 중재자",
        description: "상냥하고 이타적인 성격으로, 항상 선을 행할 준비가 되어 있는 이상주의자입니다.",
        traits: ["공감 능력", "이타적", "예술적"],
        strengths: ["개방적", "열정적", "충실함"],
        weaknesses: ["현실 감각 부족", "자책", "비판에 예민"],
        matches: { good: "ENFJ", bad: "ESTJ" },
        advice: "자신의 신념과 현실 사이의 괴리에서 오는 실망감을 조절하는 법을 배워야 합니다. 이상적인 목표를 향하되, 현실적인 대안도 함께 고려해보세요."
    },
    "ENFJ": {
        type: "ENFJ",
        title: "정의로운 사회운동가",
        description: "카리스마 있고 충성심이 강하며, 타인을 이끄는 천부적인 리더입니다.",
        traits: ["카리스마", "사교적", "배려심"],
        strengths: ["설득력", "인내심", "리더십"],
        weaknesses: ["너무 이타적", "감정적 소모", "자존감 유동적"],
        matches: { good: "INFP", bad: "ISTP" },
        advice: "모든 사람에게 사랑받고 인정받으려는 욕구가 스트레스의 원인이 될 수 있습니다. 모든 비판을 자신의 탓으로 돌리지 말고 객관적으로 바라보는 힘을 키우세요."
    },
    "ENFP": {
        type: "ENFP",
        title: "재기발랄한 활동가",
        description: "어떤 일에도 미소를 잃지 않으며, 창의적이고 자유로운 영혼입니다.",
        traits: ["열정", "창의성", "자유"],
        strengths: ["공감력", "에너지", "인기쟁이"],
        weaknesses: ["집중력 부족", "잡생각", "스트레스 취약"],
        matches: { good: "INTJ", bad: "ISTJ" },
        advice: "흥미로운 프로젝트에 뛰어드는 추진력은 좋지만, 세밀한 행정 업무나 반복적인 일은 소홀히 하기 쉽습니다. 체크리스트를 활용해 우선순위를 관리해보세요."
    },
    "ISTJ": {
        type: "ISTJ",
        title: "청렴결백한 논리주의자",
        description: "사실에 근거하여 사고하며, 맡은 일에 책임을 다하는 실용주의자입니다.",
        traits: ["책임감", "논리적", "신중함"],
        strengths: ["성실함", "기억력", "질서 중시"],
        weaknesses: ["강직함", "감정 표현 서툼", "변화 거부"],
        matches: { good: "ESFP", bad: "ENFP" },
        advice: "전통과 규칙을 중시하는 만큼 급격한 변화에 당황할 수 있습니다. 때로는 가설에 기반한 새로운 시도가 예상치 못한 혁신을 가져올 수 있음을 열린 마음으로 수용해보세요."
    },
    "ISFJ": {
        type: "ISFJ",
        title: "용감한 수호자",
        description: "주변 사람들을 헌신적으로 돌보며, 조용하고 따뜻한 성격입니다.",
        traits: ["헌신적", "수줍음", "인내심"],
        strengths: ["관찰력", "충성심", "실질적 도움"],
        weaknesses: ["변화 저항", "과도한 부담감", "감정 억제"],
        matches: { good: "ESFP", bad: "ENTP" },
        advice: "타인의 부탁을 거절하지 못해 혼자서 과도한 짐을 짊어지는 경우가 많습니다. '안 된다'고 말하는 것도 상대방과의 관계를 건강하게 유지하는 방법임을 기억하세요."
    },
    "ESTJ": {
        type: "ESTJ",
        title: "엄격한 관리자",
        description: "사물과 사람을 관리하는 데 탁월한 능력을 갖춘 실질적인 지도자입니다.",
        traits: ["조직적", "전통적", "직설적"],
        strengths: ["의지력", "능률적", "정직함"],
        weaknesses: ["완고함", "비판적", "압박감 조성"],
        matches: { good: "ISFP", bad: "INFP" },
        advice: "자신의 기준에 미치지 못하는 타인을 성급하게 판단하거나 비판할 수 있습니다. 사람마다 일하는 방식과 속도가 다름을 인정하고 더 유연한 소통 방식을 택해보세요."
    },
    "ESFJ": {
        type: "ESFJ",
        title: "사교적인 외교관",
        description: "타인을 돕는 일에 열성적이며, 주변 사람들에게 인기가 많은 성격입니다.",
        traits: ["협동적", "상냥함", "실용적"],
        strengths: ["유대감 형성", "책임감", "세심함"],
        weaknesses: ["객관성 부족", "거절 못함", "비판에 취약"],
        matches: { good: "ISFP", bad: "INTJ" },
        advice: "집단 내의 조화를 중시하다 보니 자신의 의견을 죽이거나 갈등을 회피하게 됩니다. 때로는 건강한 대립이 더 나은 결론을 낼 수 있음을 믿고 솔직해지는 연습을 하세요."
    },
    "ISTP": {
        type: "ISTP",
        title: "만능 재주꾼",
        description: "대담하고 실용적인 태도를 지녔으며, 도구 사용에 능숙한 탐험가형입니다.",
        traits: ["호기심", "적응력", "낙관적"],
        strengths: ["위기 관리", "실용적", "자신감"],
        weaknesses: ["무심함", "쉽게 지루해함", "헌신 회피"],
        matches: { good: "ENFJ", bad: "ISTJ" },
        advice: "혼자만의 시간을 즐기다 보니 주변 사람들에게 차갑거나 무심하다는 오해를 받을 수 있습니다. 가끔은 자신의 생각을 주변과 공유해 협업의 즐거움을 느껴보세요."
    },
    "ISFP": {
        type: "ISFP",
        title: "호기심 많은 예술가",
        description: "항상 새로운 것을 탐구하며, 겸손하고 따뜻한 감각적인 예술가입니다.",
        traits: ["예술적", "겸손", "현재 중시"],
        strengths: ["관찰력", "독립적", "예술적 감각"],
        weaknesses: ["예상 고립", "장기 계획 부족", "평가에 민감"],
        matches: { good: "ENTJ", bad: "ESTJ" },
        advice: "미래를 대비하기보다는 현재의 즐거움에만 집중해 나중에 곤란을 겪을 수 있습니다. 아주 작은 단계부터라도 미래를 위한 단기 목표를 세우고 실천해보세요."
    },
    "ESTP": {
        type: "ESTP",
        title: "모험을 즐기는 사업가",
        description: "명석하고 에너지 넘치며, 타인의 의도를 파악하는 데 능숙한 행동파입니다.",
        traits: ["행동파", "현실적", "사교적"],
        strengths: ["대담함", "문제 해결", "관찰력"],
        weaknesses: ["성급함", "규범 무시", "큰 그림 무시"],
        matches: { good: "ISFJ", bad: "INFJ" },
        advice: "스릴을 즐기는 면모가 때로는 불필요한 위험을 초래할 수 있습니다. 행동하기 전에 한 번 더 생각하고, 상황을 거시적으로 바라보는 통찰력을 기르는 것이 좋습니다."
    },
    "ESFP": {
        type: "ESFP",
        title: "자유로운 영혼의 연예인",
        description: "주변 사람들을 즐겁게 하며, 즉흥적이고 에너지가 넘치는 성격입니다.",
        traits: ["낙천적", "사교적", "에너지"],
        strengths: ["미적 감각", "사람들과의 화합", "대담함"],
        weaknesses: ["미루는 습관", "집중력 부족", "갈등 회피"],
        matches: { good: "ISTJ", bad: "INTJ" },
        advice: "재미를 추구하느라 중요한 책무를 뒤로 미루는 경향이 있습니다. 업무와 휴식의 경계를 명확히 하고, 집중해야 할 때는 스마트폰 등 집중을 방해하는 요소를 제거해보세요."
    }
};
