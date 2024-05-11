document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generateBtn');
  const nicknameDisplay = document.getElementById('nickname');

  const adjectives = ['Быстрый', 'Сильный', 'Умный', 'Смелый', 'Хитрый'];
  const nouns = ['Лис', 'Волк', 'Медведь', 'Тигр', 'Лев'];

  generateBtn.addEventListener('click', () => {
      const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
      const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
      const nickname = randomAdjective + ' ' + randomNoun;
      nicknameDisplay.textContent = nickname;
  });
});
