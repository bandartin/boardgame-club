# 보드득 보드게임

## 미리 보기

`index.html`을 브라우저에서 열면 됩니다. 네 개의 사이트 파일을 같은 폴더에 두세요. 별도 설치나 빌드는 필요 없습니다.

## 게임 추가하기

`games.js`의 `games` 배열에 아래 형식으로 항목을 추가하세요. 현재 목록은 동호회가 제공한 46줄에서 중복 3줄을 합친 43개 게임입니다.

```js
{
  name: '스플렌더',
  minPlayers: 2,
  maxPlayers: 4,
  duration: '30분',
  keywords: ['전략', '자원 관리', '초보 추천'],
  video: 'https://www.youtube.com/watch?v=0oe4QXSgCKw',
},
```

인원이 정해진 게임은 최소·최대에 같은 숫자를 적으세요. 상한이 없으면 `maxPlayers: Infinity`를 사용합니다. 모르는 인원은 `null`, 시간과 영상은 빈 문자열 `''`로 두세요. `aliases`에 다른 이름이나 철자를, `note`에 판본이나 변형 규칙을 적을 수 있습니다. 영상은 확인된 개별 YouTube 링크를 사용합니다.

## GitHub Pages에 공개하기

1. GitHub에 `boardgame-club` 공개 저장소를 만들고, 이 파일들을 `main` 브랜치의 최상위 폴더에 올립니다.
2. **Settings → Pages → Build and deployment**에서 **Deploy from a branch**를 선택합니다. 브랜치는 **main**, 폴더는 **/(root)**로 지정하고 **Save**를 누릅니다.
3. 배포가 완료되면 Pages 설정에 표시된 `https://<계정명>.github.io/boardgame-club/` 주소를 공유합니다. [GitHub Pages 설정 안내](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

화면 디자인 참고 [보드득 보드게임 목록](https://dlwldk.github.io/bodeudeug_boards/)
