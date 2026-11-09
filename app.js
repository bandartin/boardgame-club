(() => {
  const search = document.querySelector('#game-search');
  const players = document.querySelector('#player-count');
  const sort = document.querySelector('#sort-order');
  const list = document.querySelector('#game-list');
  const template = document.querySelector('#game-card');
  const activeTag = document.querySelector('#active-tag');
  const resetLink = document.querySelector('#reset-filters');
  const empty = document.querySelector('#empty-state');
  const emptyReset = document.querySelector('#empty-reset');
  const resultCount = document.querySelector('#result-count');
  const byName = new Intl.Collator('ko', { numeric: true });
  let selectedTag = '';

  function normalizeName(name) {
    return name.normalize('NFKC').toLocaleLowerCase('ko').replace(/\s+/g, '');
  }

  function hasPlayerRange({ minPlayers, maxPlayers }) {
    return Number.isSafeInteger(minPlayers) && minPlayers > 0 &&
      Number.isSafeInteger(maxPlayers) && maxPlayers >= minPlayers;
  }

  function playerLabel(game) {
    if (!hasPlayerRange(game)) return '인원 미확인';
    const { minPlayers, maxPlayers } = game;
    return minPlayers === maxPlayers ? `${minPlayers}명` : `${minPlayers}~${maxPlayers}명`;
  }

  function compareGames(a, b) {
    if (sort.value !== 'name') {
      const aHasRange = hasPlayerRange(a);
      const bHasRange = hasPlayerRange(b);
      if (aHasRange !== bHasRange) return aHasRange ? -1 : 1;
      if (aHasRange && bHasRange) {
        const difference = sort.value === 'min'
          ? a.minPlayers - b.minPlayers
          : b.maxPlayers - a.maxPlayers;
        if (difference) return difference;
      }
    }
    return byName.compare(a.name, b.name);
  }

  function videoUrl(value) {
    if (!value) return null;
    try {
      const url = new URL(value);
      if (url.protocol !== 'https:') return null;

      let id;
      if (url.hostname === 'youtu.be') {
        id = url.pathname.slice(1);
      } else if (['www.youtube.com', 'youtube.com', 'm.youtube.com'].includes(url.hostname)) {
        id = url.pathname === '/watch'
          ? url.searchParams.get('v')
          : url.pathname.match(/^\/(?:shorts|live)\/([\w-]+)\/?$/)?.[1];
      }
      return id && /^[\w-]{11}$/.test(id) ? url.href : null;
    } catch {
      return null;
    }
  }

  function setTag(tag) {
    selectedTag = selectedTag === tag ? '' : tag;
    render();
    (selectedTag ? activeTag : search).focus();
  }

  function createCard(game) {
    const card = template.content.firstElementChild.cloneNode(true);
    card.querySelector('.game-title').textContent = game.name;
    card.querySelector('.game-players').textContent = playerLabel(game);
    card.querySelector('.game-duration').textContent = game.duration || '시간 미확인';

    const tags = card.querySelector('.game-tags');
    for (const keyword of game.keywords || []) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'tag';
      button.textContent = keyword;
      button.setAttribute('aria-pressed', keyword === selectedTag);
      button.classList.toggle('is-active', keyword === selectedTag);
      button.addEventListener('click', () => setTag(keyword));
      tags.append(button);
    }

    const url = videoUrl(game.video);
    if (url) {
      const link = card.querySelector('.video-link');
      link.href = url;
      link.setAttribute('aria-label', `${game.name} 규칙 영상 (새 탭)`);
      link.hidden = false;
      card.querySelector('.video-pending').hidden = true;
      card.classList.add('has-video');
    }
    return card;
  }

  function render() {
    const term = normalizeName(search.value);
    const partySize = Number(players.value);
    const isFiltered = Boolean(term || partySize || selectedTag);
    const shown = games.filter(game =>
      normalizeName(game.name).includes(term) &&
      (!partySize || (hasPlayerRange(game) && game.minPlayers <= partySize && partySize <= game.maxPlayers)) &&
      (!selectedTag || game.keywords?.includes(selectedTag))
    ).sort(compareGames);

    resultCount.textContent = `표시 중 ${shown.length}개`;
    activeTag.hidden = !selectedTag;
    activeTag.textContent = selectedTag ? `${selectedTag} ×` : '';
    activeTag.setAttribute('aria-label', `${selectedTag} 키워드 필터 해제`);
    resetLink.hidden = !isFiltered || !shown.length;
    empty.hidden = shown.length > 0;
    emptyReset.hidden = !isFiltered;
    list.hidden = !shown.length;
    list.replaceChildren(...shown.map(createCard));
  }

  function resetFilters() {
    search.value = '';
    players.value = '';
    sort.value = 'name';
    selectedTag = '';
    render();
    search.focus();
  }

  const partySizes = new Set();
  for (const game of games.filter(hasPlayerRange)) {
    for (let size = game.minPlayers; size <= game.maxPlayers; size++) {
      partySizes.add(size);
    }
  }
  for (const size of [...partySizes].sort((a, b) => a - b)) {
    players.add(new Option(`${size}명`, size));
  }

  document.querySelector('#total-count').textContent = `전체 ${games.length}개 게임`;
  document.querySelector('#sample-badge').hidden = !isSampleList;
  if (!games.length) {
    document.querySelector('#empty-title').textContent = '아직 등록된 게임이 없어요';
    document.querySelector('#empty-detail').textContent = '게임이 추가되면 여기에 표시돼요.';
  }

  search.addEventListener('input', render);
  players.addEventListener('change', render);
  sort.addEventListener('change', render);
  activeTag.addEventListener('click', () => setTag(selectedTag));
  resetLink.addEventListener('click', resetFilters);
  emptyReset.addEventListener('click', resetFilters);
  render();
})();
