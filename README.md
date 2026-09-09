# 국가AI전략위원회 — 첫 1년의 기록

2025.09.08–2026.09.08의 여정을 담은 독립된 3D 모션 아카이브입니다.
53개 장면, 분과별 탐색, 인물 대사·사진, 근거자료 오버레이와 세 축 타임라인을 제공합니다.

사이트: https://deep-diver.github.io/korea-ai-in-motion/

## 실행과 배포

```sh
npm ci
npm run dev
npm test
npm run build
```

정적 결과는 `out/`에 생성됩니다. `main`에 푸시하면 GitHub Actions가 테스트 후 Pages에 배포합니다.
사진과 글꼴을 함께 배포하며 별도 서버가 필요하지 않습니다.
`NEXT_PUBLIC_BASE_PATH`로 배포 경로를 지정할 수 있습니다.

## 구조

- `components/committee/`: 무대, 재생 UI, 콜아웃과 근거자료
- `data/committee/`: 53개 장면, 분과, 인물, 출처
- `components/timeline/`: 공용 3D 기본 도형과 입력·가시성 훅
- `pages-static/`: 독립된 홈페이지와 정적 호스팅 어댑터
- `public/committee/`: 로컬 인물 사진

OpenAI 연대기와는 저장소, 콘텐츠, 빌드 및 배포를 별도로 관리합니다.

## 모바일 화면

900px 이하에서는 모바일 전용 구성을 사용합니다. 무대 아래의 대사 카드,
고정 재생 바, 가로 스크롤 분과·타임라인, 본문 안의 출처 카드로 재배치합니다.
더 넓은 화면에서는 기존 데스크톱 구성을 유지합니다.
개선 및 검증 기록은 `docs/mobile-refinement-rounds.md`에 있습니다.
