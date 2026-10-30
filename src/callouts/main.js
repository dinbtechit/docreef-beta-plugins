// Callouts: puts the selected text — or a line the user types — in a
// coloured box. The tone comes from its first word: "Warning…" is amber,
// "Note…" is blue, anything else is a green tip.
const toneOf = (text) => {
  const first = text.trim().split(/\s+/)[0].toLowerCase().replace(/[^a-z]/g, '');
  if (['warning', 'careful', 'caution', 'danger'].includes(first)) return 'warning';
  if (['note', 'info', 'fyi'].includes(first)) return 'note';
  return 'tip';
};

doctree.commands.register('insert', async () => {
  let text = (await doctree.document.getSelection()).trim();
  if (!text) {
    const last = await doctree.storage.get('last');
    text = ((await doctree.ui.prompt('Callout text', last || '')) || '').trim();
    if (!text) return;
    await doctree.storage.set('last', text);
  }
  await doctree.document.insertEmbed('box', { text, tone: toneOf(text) });
});
