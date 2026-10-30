// Draws one callout from its item data: {text, tone}.
const item = doctreeEmbed.json() || { text: doctreeEmbed.data, tone: 'tip' };
const icons = { tip: '💡', note: 'ℹ️', warning: '⚠️' };
const tone = icons[item.tone] ? item.tone : 'tip';
document.getElementById('box').classList.add(tone);
document.getElementById('icon').textContent = icons[tone];
document.getElementById('text').textContent = item.text || '';
